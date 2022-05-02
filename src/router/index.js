import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchResultsView from "../views/SearchResultsView.vue";
import ItemDetails from "../views/ItemDetailsView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/searchResults',
      name: 'searchresults',
      component: SearchResultsView
    },
    {
      path: '/itemDetails',
      name: 'itemDetails',
      component: ItemDetails
    },

  ]
})

export default router
