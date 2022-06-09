<script setup>
import { RouterLink } from 'vue-router';
import HeaderTop from '../components/Header/HeaderTop.vue';
import HeaderBottom from '../components/Header/HeaderBottom.vue';

const props = defineProps({
    client: Object,
    onChangeHeaderHiddenNav: Function,
});

</script>
<template>

    <header class="main-header">
        <div class="main-header-content">
            <HeaderTop 
                v-if="props.client != null"
                :clientId="props.client.id"
                :firstName="props.client.firstName"
                :lastName="props.client.lastName" 
                :email="props.client.email"
                :currancy="props.client.currancy"
                :language="props.client.language"
                />

            <HeaderTop 
                v-else
                :clientId="props.client.id"
                :currancy="props.client.currancy"
                :language="props.client.language"
                />

            <HeaderBottom 
                :clientId="props.client.id"
                :onChangeHeaderHiddenNav="onChangeHeaderHiddenNav" />
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