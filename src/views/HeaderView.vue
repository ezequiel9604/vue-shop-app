<script setup>
import HeaderTop from '../components/Header/HeaderTop.vue';
import HeaderBottom from '../components/Header/HeaderBottom.vue';

const props = defineProps({ client: Object });

</script>
<template>

    <header class="main-header">

        <div class="main-header-content">

            <HeaderTop :client="props.client" />
            
            <HeaderBottom :client="props.client" />

        </div>
        
    </header>

</template>
<style>

.main-header {
    width: 100%;
    box-sizing: border-box;
    background-color: #fafafa;
    border-bottom: 1px solid #dddddd;
    border-top: 1px solid #dddddd;
    z-index: 60;
}

.main-header-content {
    width: 95%;
    box-sizing: border-box;
    margin: 0px auto;
}

</style>
