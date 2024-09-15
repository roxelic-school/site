// src/pages/api/file-structure.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the directory where your content files are located
const contentDir = path.resolve('src/pages/content');

// Build the file structure
function buildFileStructure(dirPath) {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  const structure = {};
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
      structure[item.name] = buildFileStructure(itemPath);
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

// Handle the API request
exports.GET = async (req, res) => {
  try {
    const fileStructure = buildFileStructure(contentDir);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(fileStructure, null, 2));
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.status(500).send(JSON.stringify({ error: 'Failed to build file structure' }));
  }
};
