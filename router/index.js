import { createRouter, createWebHistory } from 'vue-router';
import Albums from '@/views/Albums.vue';
import AlbumDetails from '@/views/AlbumDetails.vue';
import SearchResults from '@/views/SearchResults.vue';

const routes = [
  {
    path: '/',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/album/:id',
    name: 'AlbumDetails',
    component: AlbumDetails,
    props: true
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: SearchResults
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
