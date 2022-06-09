<script setup>
import { RouterView } from 'vue-router';
import { reactive, onMounted } from 'vue';
import PromoBannerView from './views/PromoBannerView.vue';
import HeaderView from './views/HeaderView.vue';
import HeaderHiddenNavView from './views/HeaderHiddenNavView.vue';
import FooterView from './views/FooterView.vue';
import { getLoggedClient } from './services/Client';
//import { GetAllItems } from './services/Item';
//import Clients from './assets/data/Clients';

import { getAllItems } from './apis/Items';

const state = reactive({
    items: [],
    client: getLoggedClient(),
    isHeaderHiddenNavOpen: false
})

onMounted(async () => {
    //localStorage.setItem("loggedClient", JSON.stringify(Clients[0]));
    //localStorage.removeItem("guestClient")

    state.items = await getAllItems();
});

const changeHeaderHiddenNav = () => {
    state.isHeaderHiddenNavOpen = !state.isHeaderHiddenNavOpen;
}


</script>
<template>

    <div>
        <HeaderHiddenNavView 
            :client="state.client.user" 
            :onHeaderHiddenNavOpen="state.isHeaderHiddenNavOpen"
            :onChangeHeaderHiddenNav="changeHeaderHiddenNav" 
            />

        <PromoBannerView />
        <HeaderView 
            :client="state.client.user"
            :onChangeHeaderHiddenNav="changeHeaderHiddenNav" 
            />

        <main>
            <RouterView 
                :items="state.items" 
                :client="state.client.user" 
                />
        </main>

        <FooterView />

    </div>

</template>
<style>
</style>