<script setup>

import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const props = defineProps({
    descount: Number,
    images: Array,
    title: String,
    price: Number,
    quality: Number
});

const selectedImage = ref(0);

const calculateDescountPrice = computed(() => {
    return props.price - props.price * (props.descount / 100);
});

</script>
<template>
 
    <div class="row-large-samples">
        <div class="descount">{{ props.descount }}%</div>
        <RouterLink to="" class="row-large-samples-image">
            <img @mouseenter="selectedImage=1" 
                @mouseleave="selectedImage=0" 
                :src="props.images[selectedImage]" alt="" />
        </RouterLink>
        <div class="row-large-samples-details">
            <h5>{{ props.title }}</h5>
            <div class="row-large-samples-details-price">
                <span>${{ calculateDescountPrice }}</span>
                <span>${{ props.price }}</span>
            </div>
            <div class="row-large-samples-details-quality">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                - 
                <span>{{ props.quality }}</span>
            </div>
            <div class="row-large-samples-details-action">
                <button class="row-large-samples-details-action-buy-btn">Buy now</button>
                <button class="row-large-samples-details-action-add-btn row-large-samples-details-action-selected-btn">Add to list</button>
                <button class="row-large-samples-details-action-add-icon-btn row-large-samples-details-action-add-icon-selected-btn">
                    <i class="bi bi-heart-fill"></i>
                    <!-- <i class="bi bi-heart"></i> -->
                </button>
            </div>
        </div>
        
    </div>

</template>
<style>

</style>