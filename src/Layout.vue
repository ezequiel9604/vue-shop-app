<script setup>
import { RouterView } from 'vue-router';
import { reactive, onMounted } from 'vue';
import PromoBannerView from './views/PromoBannerView.vue';
import HeaderView from './views/HeaderView.vue';
import HeaderHiddenNavView from './views/HeaderHiddenNavView.vue';
import FooterView from './views/FooterView.vue';
import { GetAll } from './services/Item';
import { GetLoggedClient } from './services/Client';

const state = reactive({
  items: [],
  client: null
});

onMounted(async () => {
  state.items = await GetAll();
  state.client = GetLoggedClient();
});

</script>
<template>

    <div v-if="state.client">

        <HeaderHiddenNavView :client="state.client.user" />

        <PromoBannerView />
        
        <HeaderView :client="state.client.user" />

        <main>
            <RouterView :items="state.items" :client="state.client.user" />
        </main>

        <FooterView />

    </div>

</template>
<style>
</style>
