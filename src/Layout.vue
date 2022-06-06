<script setup>
import { RouterView } from 'vue-router';
import { reactive, onMounted } from 'vue';
import PromoBannerView from './views/PromoBannerView.vue';
import HeaderView from './views/HeaderView.vue';
import HeaderHiddenNavView from './views/HeaderHiddenNavView.vue';
import FooterView from './views/FooterView.vue';
import { getLoggedClient } from './services/Client';
import { GetAllItems } from './services/Item';
//import Clients from './assets/data/Clients';


const state = reactive({
    items: GetAllItems(),
    client: getLoggedClient(),
    isHeaderHiddenNavOpen: false
})

onMounted(()=>{
    //localStorage.setItem("loggedClient", JSON.stringify(Clients[0]));
    //localStorage.removeItem("guestClient")
});

const changeHeaderHiddenNav = () => {
    state.isHeaderHiddenNavOpen = !state.isHeaderHiddenNavOpen;
}

</script>
<template>

    <div>
        <HeaderHiddenNavView 
            :client="state.client" 
            :onHeaderHiddenNavOpen="state.isHeaderHiddenNavOpen"
            :onChangeHeaderHiddenNav="changeHeaderHiddenNav" 
            />

        <PromoBannerView />
        <HeaderView 
            :client="state.client"
            :onChangeHeaderHiddenNav="changeHeaderHiddenNav" 
            />

        <main>
            <RouterView 
                :items="state.items" 
                :client="state.client" 
                />
        </main>

        <FooterView />

    </div>

</template>
<style>
</style>