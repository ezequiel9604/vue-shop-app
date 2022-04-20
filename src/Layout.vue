<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import PromoBannerView from "./views/PromoBannerView.vue";
import HeaderView from "./views/HeaderView.vue";
import HeaderHiddenNav from "./views/HeaderHiddenNav.vue";

const isHeaderHiddenNavOpen = ref(false);

const changeHeaderHiddenNavStatus = () => {
    isHeaderHiddenNavOpen.value = !isHeaderHiddenNavOpen.value;
}

</script>

<template>

    <HeaderHiddenNav 
        :onHeaderHiddenNavStatus="isHeaderHiddenNavOpen"
        :onChangeHeaderHiddenNavStatus="changeHeaderHiddenNavStatus" />

    <PromoBannerView />

    <HeaderView :onChangeHeaderHiddenNavStatus="changeHeaderHiddenNavStatus" />

    <main>
        <RouterView />
    </main>


</template>

<style>
</style>