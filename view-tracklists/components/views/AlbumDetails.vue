<template>
  <div>
    <h2>{{ album.title }}</h2>
    <img :src="album.coverUrl" alt="Album cover" />
    <p><strong>Artist:</strong> {{ album.artist }}</p>
    <Tracklist :tracks="album.tracks" />
  </div>
</template>

<script>
import Tracklist from '@/components/Tracklist.vue';
import { fetchAlbumById } from '@/api/albums.js';

export default {
  name: 'AlbumDetails',
  components: {
    Tracklist
  },
  data() {
    return {
      album: null
    };
  },
  async created() {
    const albumId = this.$route.params.id;
    this.album = await fetchAlbumById(albumId);
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>