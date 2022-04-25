<script setup>
import { reactive } from 'vue';
import CategorySlider from '../components/HomeComponents/CategorySlider.vue';
import ItemsInOffer from '../components/HomeComponents/ItemsInOffer.vue';
import MostSoldItems from '../components/HomeComponents/MostSoldItems.vue';

const items = reactive([
    { 
        id: 1,
        title: `1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: ["http://localhost:3000/src/assets/imgs/samples/tablet.png", 
                "http://localhost:3000/src/assets/imgs/samples/tablet-2.png"],
        descount: 25
    },
    { 
        id: 2,
        title: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: ["http://localhost:3000/src/assets/imgs/samples/tablet.png", 
                "http://localhost:3000/src/assets/imgs/samples/tablet-2.png"],
        descount: 25
    },
    { 
        id: 3,
        title: `3Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: ["http://localhost:3000/src/assets/imgs/samples/tablet.png", 
                "http://localhost:3000/src/assets/imgs/samples/tablet-2.png"],
        descount: 25
    },
    { 
        id: 4,
        title: `4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: ["http://localhost:3000/src/assets/imgs/samples/tablet.png", 
                "http://localhost:3000/src/assets/imgs/samples/tablet-2.png"],
        descount: 25
    },
    { 
        id: 5,
        title: `5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: ["http://localhost:3000/src/assets/imgs/samples/tablet.png", 
                "http://localhost:3000/src/assets/imgs/samples/tablet-2.png"],
        descount: 25
    },
    { 
        id: 6,
        title: `6 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: ["http://localhost:3000/src/assets/imgs/samples/tablet.png", 
                "http://localhost:3000/src/assets/imgs/samples/tablet-2.png"],
        descount: 25
    },
    { 
        id: 7,
        title: `7 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: ["http://localhost:3000/src/assets/imgs/samples/tablet.png", 
                "http://localhost:3000/src/assets/imgs/samples/tablet-2.png"],
        descount: 0
    },
]);


</script>

<template>

  <div>
    
    <CategorySlider />

    <ItemsInOffer :items="items" />

    <MostSoldItems :items="items" />

  </div>

</template>
<style>


</style>
