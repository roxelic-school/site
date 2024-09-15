// src/pages/api/fileparse.ts

import type { APIRoute } from 'astro';
import { getFileStructure } from '../../lib/fileparse';

export const GET: APIRoute = async () => {
  try {
    const fileStructure = getFileStructure();
    return new Response(fileStructure, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to generate file structure' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
