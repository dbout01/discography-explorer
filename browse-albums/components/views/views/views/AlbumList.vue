<template>
  <div class="album-list">
    <div v-for="album in albums" :key="album.id" class="album-item">
      <img :src="album.coverUrl" alt="Album cover" />
      <div class="album-details">
        <h3>{{ album.title }}</h3>
        <p>{{ album.artist }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumList',
  props: {
    albums: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.album-list {
  display: flex;
  flex-wrap: wrap;
}

.album-item {
  margin: 10px;
  text-align: center;
}

.album-details {
  margin-top: 5px;
}
</style>