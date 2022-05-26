<script setup>
import { RouterLink } from 'vue-router';
import HeaderTop from '../components/HeaderComponents/HeaderTop.vue';
import HeaderBottom from '../components/HeaderComponents/HeaderBottom.vue';

const props = defineProps({
    client: Object,
    onChangeHeaderHiddenNavStatus: Function,
});

</script>
<template>

    <header class="main-header">
        <div class="main-header-content">
            <HeaderTop 
                v-if="props.client != null"
                :clientId="props.client.id"
                :firstName="props.client.firstname"
                :lastName="props.client.lastname" 
                :currancy="props.client.characteristics.currancy"
                :language="props.client.characteristics.language"
                />

            <HeaderTop 
                v-else
                :clientId="props.client.id"
                :currancy="props.client.characteristics.currancy"
                :language="props.client.characteristics.language"
                />

            <HeaderBottom 
                :clientId="props.client.id"
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
    border-top: 1px solid #dddddd;
    z-index: 60;
}

.main-header-content {
    width: 95%;
    box-sizing: border-box;
    margin: 0px auto;
}

</style>