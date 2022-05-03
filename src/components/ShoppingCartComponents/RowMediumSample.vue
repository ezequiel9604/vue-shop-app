<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const props = defineProps({
    characteristics: Array,
    descount: Number,
    images: Array,
    title: String,
    price: Number,
    stock: Number
});

const calculateDescount = (price, descount) => {
    return price - (price * (descount/100));
}

</script>
<template>

    <div class="row-medium-samples">
        <div class="row-medium-samples-checkbox">
            <input type="checkbox" />
        </div>
        <RouterLink to="" class="row-medium-samples-image">
            <div class="descount">{{ props.descount }}%</div>
            <img :src="props.images[0]" alt="" />
        </RouterLink>
        <div class="row-medium-samples-details">
            <h5>{{ props.title }}.</h5>
            <div class="row-medium-samples-details-specifications">
                <p><strong>Size: </strong>17" Pulgadas,</p>
                <p><strong>Capacity: </strong>4GB, </p>
                <p><strong>Color: </strong><mark></mark> </p>
            </div>
            <div class="row-medium-samples-details-price">
                <span>${{ calculateDescount(props.price, props.descount) }}</span>
                <span>${{ props.price }}</span>
            </div>
            <div class="row-medium-samples-details-amount">
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                    <label>Only {{ props.stock }} available</label>
                </div>
                <button><i class="bi bi-trash"></i></button>
            </div>

        </div>

    </div>

</template>
<style>
</style>