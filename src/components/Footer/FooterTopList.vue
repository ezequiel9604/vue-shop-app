<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    links: Array
});

</script>
<template>

    <ul>
        <h6>{{ props.title }}:</h6>
        <RouterLink v-for="link in props.links" to="" :key="link">
            {{ link }}
        </RouterLink>
    </ul>

</template>
<style></style>