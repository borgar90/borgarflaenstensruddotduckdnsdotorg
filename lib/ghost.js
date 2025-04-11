// lib/ghost.js

const GHOST_API_URL = process.env.GHOST_API_URL;
const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY;

export async function getPosts(limit = 3) {
  const res = await fetch(`${GHOST_API_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&limit=${limit}&include=authors`);
  const data = await res.json();
  return data.posts || [];
}
