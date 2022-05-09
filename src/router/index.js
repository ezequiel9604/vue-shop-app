import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchResultsView from '../views/SearchResultsView.vue';
import ItemDetailsView from '../views/ItemDetailsView.vue';
import ShoppingCartView from '../views/ShoppingCartView.vue';
import ProfileView from '../views/ProfileView.vue';
import WishListView from '../views/WishListView.vue';
import OrderView from '../views/OrderView.vue';


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
      component: ItemDetailsView
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCartView
    },
    {
      path: '/myProfile',
      name: 'myProfile',
      component: ProfileView
    },
    {
      path: '/wishList',
      name: 'wishList',
      component: WishListView
    },
    {
      path: '/myOrders',
      name: 'myOrders',
      component: OrderView
    }

  ]
})

export default router
