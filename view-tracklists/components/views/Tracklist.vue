<template>
  <div class="tracklist">
    <h3>Tracklist</h3>
    <ul>
      <li v-for="track in tracks" :key="track.id">{{ track.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tracklist',
  props: {
    tracks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.tracklist {
  margin-top: 20px;
}

.tracklist h3 {
  margin-bottom: 10px;
}

.tracklist ul {
  list-style-type: none;
  padding: 0;
}

.tracklist li {
  margin-bottom: 5px;
}
</style>
