import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../Layout.vue';
import HomeView from '../views/HomeView.vue';
import SearchResultsView from '../views/SearchResultsView.vue';
import ItemDetailsView from '../views/ItemDetailsView.vue';
import ShoppingCartView from '../views/ShoppingCartView.vue';
import ProfileView from '../views/ProfileView.vue';
import WishListView from '../views/WishListView.vue';
import OrderView from '../views/OrderView.vue';
import OrderDetailsView from '../views/OrderDetailsView.vue';
import CheckOutView from '../views/CheckOutView.vue';
import ChatCenterView from '../views/ChatCenter.vue';
import SignUpView from '../views/SignUpView.vue';
import LogInView from '../views/LogInView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [{ path: "", component: HomeView }]
    },
    {
      path: '/searchResults',
      name: 'searchresults',
      component: Layout,
      children: [{ path: "", component: SearchResultsView }]
    },
    {
      path: '/itemDetails',
      name: 'itemDetails',
      component: Layout,
      children: [{ path: "", component: ItemDetailsView }]
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: Layout,
      children: [{ path: "", component: ShoppingCartView }]
    },
    {
      path: '/myProfile',
      name: 'myProfile',
      component: Layout,
      children: [{ path: "", component: ProfileView }]
    },
    {
      path: '/wishList',
      name: 'wishList',
      component: Layout,
      children: [{ path: "", component: WishListView }]
    },
    {
      path: '/myOrders',
      name: 'myOrders',
      component: Layout,
      children: [{ path: "", component: OrderView }]
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: Layout,
      children: [{ path: "", component: OrderDetailsView }]
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Layout,
      children: [{ path: "", component: CheckOutView }]
    },
    {
      path: '/chatCenter',
      name: 'chatCenter',
      component: Layout,
      children: [{ path: "", component: ChatCenterView }]
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView,
    }

  ]
})

export default router
