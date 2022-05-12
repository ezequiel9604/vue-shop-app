<script setup>

const props = defineProps({
    sets: Number
});

</script>
<template>

    <div class="pagination">

        <div class="pagination-content">
            <button>Previous</button>    
            <button v-for="set in sets" :key="set">{{ set }}</button>
            <button>Next</button>
        </div>

    </div>

</template>
<style></style>