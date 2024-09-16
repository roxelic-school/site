import fs from 'fs/promises';
import path from 'path';
import { getFileStructure } from './fileparse.js';

const outputFilePath = path.join(process.cwd(), 'public/api/fileparse.json'); // Adjust the path as needed

async function writeFile() {
  try {
    const fileStructure = await getFileStructure();
    await fs.writeFile(outputFilePath, fileStructure);
    console.log(`fileparse.json created successfully at ${outputFilePath}`);
  } catch (err) {
    console.error('Error writing to file:', err);
  }
}

writeFile();
