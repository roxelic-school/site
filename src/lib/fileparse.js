import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.resolve('src/pages/content');

async function buildFileStructure(dirPath) {
  const structure = {};
  const detailsJsonPath = path.join(dirPath, '_details.json');
  
  try {
    await fs.access(detailsJsonPath);
    const detailsContent = await fs.readFile(detailsJsonPath, 'utf-8');
    const detailsData = JSON.parse(detailsContent);
    if (Object.keys(detailsData).length > 0) {
      Object.assign(structure, detailsData);
    }
  } catch {

  }

  const items = await fs.readdir(dirPath, { withFileTypes: true });
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item.name);
    const stats = await fs.stat(itemPath);

    if (stats.isDirectory()) {
      structure[`\\${item.name}\\`] = await buildFileStructure(itemPath);
    } else {
      const fileExt = path.extname(item.name);
      const fileName = path.basename(item.name);
      
      if ((fileName === 'index.md' || fileName === 'index.astro') && (fileExt === '.md' || fileExt === '.astro')) {
        const url = `/content/${path.relative(contentDir, dirPath).replace(/\\/g, '/')}`;
        const fileContent = await fs.readFile(itemPath, 'utf-8');
        const { data } = matter(fileContent);
        const name = data.title || path.basename(itemPath, fileExt);
        const desc = data.desc || path.basename(itemPath, fileExt);
        const date = data.upDate || path.basename(itemPath, fileExt);
        const tags = data.tags || path.basename(itemPath, fileExt);
        structure[name] = [url, name, desc, date, tags];
        continue;
      }
      
      if (fileExt === '.md' || fileExt === '.astro') {
        const url = `/content/${path.relative(contentDir, itemPath).replace(/\\/g, '/').replace(fileExt, '')}`;
        const fileContent = await fs.readFile(itemPath, 'utf-8');
        const { data } = matter(fileContent);
        const name = data.title || path.basename(itemPath, fileExt);
        const desc = data.desc || path.basename(itemPath, fileExt);
        const date = data.upDate || path.basename(itemPath, fileExt);
        const tags = data.tags || path.basename(itemPath, fileExt);
        structure[name] = [url, name, desc, date, tags];
      }
    }
  }

  return structure;
}

export async function getFileStructure() {
  const fileStructure = await buildFileStructure(contentDir);
  return JSON.stringify(fileStructure, null, 2);
}
