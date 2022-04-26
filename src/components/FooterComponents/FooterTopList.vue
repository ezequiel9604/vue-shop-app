<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    links: Array
});

</script>
<template>

    <ul>
        <h6>{{ title }}:</h6>
        <RouterLink v-for="link in links" to="" :key="link">
            {{ link }}
        </RouterLink>
    </ul>

</template>
<style>


</style>