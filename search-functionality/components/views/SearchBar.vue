<!-- components/SearchBar.vue -->
<template>
  <div class="search-bar">
    <input type="text" v-model="query" placeholder="Search for an album..." @input="onSearch">
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.query);
    }
  }
};
</script>

<style scoped>
.search-bar {
  margin: 20px 0;
  text-align: center;
}

.search-bar input {
  padding: 10px;
  font-size: 16px;
  width: 80%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>