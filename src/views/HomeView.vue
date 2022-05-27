<script setup>
import { reactive } from 'vue';
import CategorySlider from '../components/HomeComponents/CategorySlider.vue';
import ItemsInOffer from '../components/HomeComponents/ItemsInOffer.vue';
import Poster from '../components/HomeComponents/Poster.vue';
import MostSoldItems from '../components/HomeComponents/MostSoldItems.vue';
import { Items } from '../assets/data/Items';

const state = reactive({
  items: Items
});

</script>
<template>

  <div>
    <CategorySlider />

    <ItemsInOffer :items="state.items" />

    <Poster />

    <MostSoldItems :items="state.items" />
  </div>

</template>
<style>
</style>
