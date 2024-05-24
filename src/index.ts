// src/index.ts
// @ts-ignore
import { fetchAlbums } from './api/albums.js';

interface Album {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  tracks: { id: number; title: string }[];
}

const renderAlbums = (albums: Album[]): void => {
  const gallery = document.getElementById('image-gallery');
  if (!gallery) {
    console.error('Gallery element not found');
    return;
  }

  albums.forEach(album => {
    const albumDiv = document.createElement('div');
    albumDiv.className = 'album';

    const img = document.createElement('img');
    img.src = album.coverUrl;
    img.alt = album.title;

    const title = document.createElement('p');
    title.className = 'album-name';
    title.textContent = album.title;

    albumDiv.appendChild(img);
    albumDiv.appendChild(title);
    gallery.appendChild(albumDiv);
  });
};

const loadAlbums = async (): Promise<void> => {
  try {
    const albums = await fetchAlbums();
    renderAlbums(albums);
  } catch (error) {
    console.error('Failed to load albums:', error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadAlbums();
});
