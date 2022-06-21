<script setup>
import { RouterView } from 'vue-router';
import { reactive, onMounted } from 'vue';
import PromoBannerView from './views/PromoBannerView.vue';
import HeaderView from './views/HeaderView.vue';
import HeaderHiddenNavView from './views/HeaderHiddenNavView.vue';
import FooterView from './views/FooterView.vue';
import { getLoggedClient } from './services/Client';
import { getAllItems } from './apis/Items';

const state = reactive({
    items: [],
})

onMounted(async () => {
    state.items = await getAllItems();
});

</script>
<template>

    <div>
        <HeaderHiddenNavView />

        <PromoBannerView />
        
        <HeaderView />

        <main>
            <RouterView :items="state.items" />
        </main>

        <FooterView />

    </div>

</template>
<style>
</style>