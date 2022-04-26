<script setup>

const props = defineProps(["image"]);

</script>
<template>

    <label class="filter-results-sidebar-brand-selection-toggle">
        <input type="checkbox" />
        <span :style="{ backgroundImage: 'url('+props.image+')'}"
            class="filter-results-sidebar-brand-selection-slider"></span>
    </label>

</template>
<style>


</style>