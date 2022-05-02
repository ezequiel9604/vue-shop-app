<script setup>
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const props = defineProps({
    title: String,
    price: Number,
    images: Array,
    descount: Number
});

const selectedImage = ref(0);

const calculateDescountPrice = computed(() => {
    return props.price - props.price * (props.descount / 100);
});


</script>

<template>

    <div class="column-large-samples">
        <div class="descount">
            {{ props.descount}}%
        </div>
        <RouterLink to="/itemDetails" class="column-large-samples-img">
            <img 
                @mouseenter="selectedImage=1" 
                @mouseleave="selectedImage=0" 
                :src="props.images[selectedImage]" 
                alt="" />
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