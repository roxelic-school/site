// src/pages/api/file-structure.ts
import type { APIRoute } from 'astro';

export const get: APIRoute = async () => {
  try {
    const jsonPath = './public/api/fileparse.json';
    const fileStructure = require(jsonPath);
    return new Response(JSON.stringify(fileStructure), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response('Error reading file structure', { status: 500 });
  }
};
