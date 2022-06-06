<script setup>
import { reactive } from 'vue';
import CategorySlider from '../components/Home/CategorySlider.vue';
import ItemsInOffer from '../components/Home/ItemsInOffer.vue';
import Poster from '../components/Home/Poster.vue';
import MostSoldItems from '../components/Home/MostSoldItems.vue';

const props = defineProps({ items: Array });

</script>
<template>

  <div>
    <CategorySlider />

    <ItemsInOffer :items="props.items" />

    <Poster />

    <MostSoldItems :items="props.items" />
  </div>

</template>
<style>
</style>
