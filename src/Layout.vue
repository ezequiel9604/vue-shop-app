<script setup>
import { RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import PromoBannerView from "./views/PromoBannerView.vue";
import HeaderView from "./views/HeaderView.vue";
import HeaderHiddenNavView from "./views/HeaderHiddenNavView.vue";
import FooterView from "./views/FooterView.vue";

import Clients from "./assets/data/Clients";

const isHeaderHiddenNavOpen = ref(false);

const changeHeaderHiddenNavStatus = () => {
    isHeaderHiddenNavOpen.value = !isHeaderHiddenNavOpen.value;
}

const client = ref(Clients[0]);


</script>
<template>

    <HeaderHiddenNavView :onHeaderHiddenNavStatus="isHeaderHiddenNavOpen"
        :onChangeHeaderHiddenNavStatus="changeHeaderHiddenNavStatus" :client="client" />

    <PromoBannerView />

    <HeaderView :onChangeHeaderHiddenNavStatus="changeHeaderHiddenNavStatus" :client="client" />

    <main>
        <RouterView />
    </main>

    <FooterView />

</template>
<style>
</style>