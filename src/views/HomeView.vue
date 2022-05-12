<script setup>
import { reactive } from 'vue';
import CategorySlider from '../components/HomeComponents/CategorySlider.vue';
import ItemsInOffer from '../components/HomeComponents/ItemsInOffer.vue';
import Poster from '../components/HomeComponents/Poster.vue';
import MostSoldItems from '../components/HomeComponents/MostSoldItems.vue';
import Items from '../assets/data/Items';

const items = reactive(Items);

</script>
<template>

  <CategorySlider />

  <ItemsInOffer :items="items" />

  <Poster />

  <MostSoldItems :items="items" />

</template>
<style>
</style>
