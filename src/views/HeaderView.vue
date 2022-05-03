<script setup>
import { RouterLink } from 'vue-router';
import HeaderTop from '../components/HeaderComponents/HeaderTop.vue';
import HeaderBottom from '../components/HeaderComponents/HeaderBottom.vue';

const props = defineProps({
    onChangeHeaderHiddenNavStatus: Function
});

</script>
<template>

    <header class="main-header">
        <div class="main-header-content">
            <HeaderTop />
            <HeaderBottom 
                :onChangeHeaderHiddenNavStatus="onChangeHeaderHiddenNavStatus" />
        </div>
    </header>

</template>

<style>

.main-header {
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    z-index: 0;
}

.main-header-content {
    width: 95%;
    box-sizing: border-box;
    margin: 0px auto;
}
</style>