<script setup>
import { RouterView } from "vue-router";
import PromoBannerView from "./views/PromoBannerView.vue";
import HeaderView from "./views/HeaderView.vue";
import HomeView from "./views/HomeView.vue";

</script>

<template>

    <PromoBannerView />
    <HeaderView />

    <main>
        <RouterView />
    </main>


</template>

<style></style>