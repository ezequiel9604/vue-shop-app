<script setup>
import { RouterView } from "vue-router";
import { reactive, onMounted } from "vue";
import PromoBannerView from "./views/PromoBannerView.vue";
import HeaderView from "./views/HeaderView.vue";
import HeaderHiddenNavView from "./views/HeaderHiddenNavView.vue";
import FooterView from "./views/FooterView.vue";

import Clients from "./assets/data/Clients";


const state = reactive({
    client: JSON.parse(localStorage.getItem("loggedClient")),
    isHeaderHiddenNavOpen: false
})

onMounted(()=>{

    //localStorage.setItem("loggedClient", JSON.stringify(Clients[0]));

});

const changeHeaderHiddenNavStatus = () => {
    state.isHeaderHiddenNavOpen = !state.isHeaderHiddenNavOpen;
}

</script>
<template>

    <div>
        <HeaderHiddenNavView :onHeaderHiddenNavStatus="state.isHeaderHiddenNavOpen"
        :onChangeHeaderHiddenNavStatus="changeHeaderHiddenNavStatus" :client="state.client" />

        <PromoBannerView />
        <HeaderView :onChangeHeaderHiddenNavStatus="changeHeaderHiddenNavStatus" :client="state.client" />

        <main>
            <RouterView />
        </main>

        <FooterView />
    </div>

</template>
<style>
</style>