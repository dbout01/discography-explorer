<!-- views/SearchResults.vue -->
<template>
  <div class="search-results">
    <div v-if="results.length">
      <div class="album" v-for="album in results" :key="album.id">
        <img :src="album.coverUrl" :alt="album.title">
        <p class="album-name">{{ album.title }}</p>
      </div>
    </div>
    <p v-else>No results found</p>
  </div>
</template>

<script>
export default {
  props: {
    results: Array
  }
};
</script>

<style scoped>
.search-results {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.album {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.album img {
  width: 100%;
  border-radius: 8px;
}

.album-name {
  font-weight: bold;
  margin: 10px 0;
}
</style>