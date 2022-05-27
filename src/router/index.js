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
      component: Layout,
      children: [{ path: "", component: HomeView }]
    },
    {
      path: '/searchResults',
      component: Layout,
      children: [{ path: "", component: SearchResultsView }]
    },
    {
      path: '/itemDetails',
      component: Layout,
      children: [{ path: "", component: ItemDetailsView }]
    },
    {
      path: '/shoppingCart',
      component: Layout,
      children: [{ path: "", component: ShoppingCartView }]
    },
    {
      path: '/myProfile',
      component: Layout,
      children: [{ path: "", component: ProfileView }]
    },
    {
      path: '/wishList',
      component: Layout,
      children: [{ path: "", component: WishListView }]
    },
    {
      path: '/orders',
      component: Layout,
      children: [{ path: "", component: OrderView }]
    },
    {
      path: '/orders/orderDetails',
      component: Layout,
      children: [{ path: "", component: OrderDetailsView }]
    },
    {
      path: '/checkout',
      component: Layout,
      children: [{ path: "", component: CheckOutView }]
    },
    {
      path: '/chatCenter',
      component: Layout,
      children: [{ path: "", component: ChatCenterView }]
    },
    {
      path: '/signup',
      component: SignUpView,
    },
    {
      path: '/login',
      component: LogInView,
    }
  ]
});

router.beforeEach((to, from, next) => {
  
  const isClientLoggedIn = (JSON.parse(localStorage.getItem("loggedClient")) != null)? true:false; 
  
  if(isClientLoggedIn == false && to.path == "/myProfile"){
    next({ path : "/login" });
  }
  else if(isClientLoggedIn == false && to.path == "/orders"){
    next({ path: "/login"});
  }
  else{
    next();
  }

})

export default router
