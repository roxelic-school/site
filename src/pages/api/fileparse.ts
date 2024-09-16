// src/pages/api/file-structure.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { APIRoute } from 'astro';

const contentDir = path.resolve('src/pages/content');


function buildFileStructure(dirPath: string): Record<string, any> {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  const structure: Record<string, any> = {};
  const detailsJsonPath = path.join(dirPath, 'details.json');

  if (fs.existsSync(detailsJsonPath)) {
    const detailsContent = fs.readFileSync(detailsJsonPath, 'utf-8');
    const detailsData = JSON.parse(detailsContent);
    if (Object.keys(detailsData).length > 0) {
      Object.assign(structure, detailsData);
    }
  }

  items.forEach(item => {
    const itemPath = path.join(dirPath, item.name);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      structure[`\\${item.name}\\`] = buildFileStructure(itemPath);
    } else {
      const fileExt = path.extname(item.name);
      const fileName = path.basename(item.name);

      if ((fileName === 'index.md' || fileName === 'index.astro') && (fileExt === '.md' || fileExt === '.astro')) {
        const url = `/content/${path.relative(contentDir, dirPath).replace(/\\/g, '/')}`;
        const fileContent = fs.readFileSync(itemPath, 'utf-8');
        const { data } = matter(fileContent);
        const name = data.title || path.basename(itemPath, fileExt);

        structure[name] = [url, name];
        return structure;
      }

      if (fileExt === '.md' || fileExt === '.astro') {
        const url = `/content/${path.relative(contentDir, itemPath).replace(/\\/g, '/').replace(fileExt, '')}`;
        const fileContent = fs.readFileSync(itemPath, 'utf-8');
        const { data } = matter(fileContent);
        const name = data.title || path.basename(itemPath, fileExt);
        structure[name] = [url, name];
      }
    }
  });

  return structure;
}

export const GET: APIRoute = async () => {
  try {
    const fileStructure = buildFileStructure(contentDir);
    return new Response(JSON.stringify(fileStructure, null, 2), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to generate file structure' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};