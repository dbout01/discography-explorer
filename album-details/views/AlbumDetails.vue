<template>
  <div>
    <h2>{{ album.title }}</h2>
    <img :src="album.coverUrl" alt="Album cover" />
    <h3>Tracklist</h3>
    <ul>
      <li v-for="track in album.tracks" :key="track.id">{{ track.title }}</li>
    </ul>
  </div>
</template>

<script>
import { fetchAlbumById } from '@/api/albums.js';

export default {
  name: 'AlbumDetails',
  data() {
    return {
      album: {}
    };
  },
  async created() {
    const albumId = this.$route.params.id;
    this.album = await fetchAlbumById(albumId);
  }
};
</script>

<style scoped>
/* Add styles */
</style>
