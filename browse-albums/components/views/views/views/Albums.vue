<template>
  <div>
    <SearchBar @search="handleSearch" />
    <AlbumList :albums="filteredAlbums" />
  </div>
</template>

<script>
import AlbumList from '@/components/AlbumList.vue';
import SearchBar from '@/components/SearchBar.vue';
import { fetchAlbums } from '@/api/albums.js';

export default {
  name: 'Albums',
  components: {
    AlbumList,
    SearchBar
  },
  data() {
    return {
      albums: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredAlbums() {
      return this.albums.filter(album =>
        album.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    async loadAlbums() {
      try {
        this.albums = await fetchAlbums();
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    },
    handleSearch(query) {
      this.searchQuery = query;
    }
  },
  created() {
    this.loadAlbums();
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>