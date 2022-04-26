<script setup>

import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const props = defineProps({
    descount: Number,
    images: Array,
    title: String,
    price: Number,
});

const selectedImage = ref(0);

const calculateDescountPrice = computed(() => {
    return props.price - props.price * (props.descount / 100);
});


</script>
<template>

    <div class="column-medium-samples">
        <div class="descount">{{ props.descount }}%
        </div>
        <RouterLink to="">
            <img :src="props.images[0]" alt="" />
        </RouterLink>
        <h3>{{ props.title }}</h3>
        <h4>
            <span>${{ calculateDescountPrice }}</span>
            <span>${{ props.price }}</span>
        </h4>
    </div>

</template>
<style>

</style>