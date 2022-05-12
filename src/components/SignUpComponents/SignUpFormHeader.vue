<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String
});

</script>
<template>

    <div class="signup-login-form-header">
        <div class="signup-login-form-header-logo">
            <!-- <img src="" alt="" /> -->
            <RouterLink to="/">ShopApp</RouterLink>
        </div>

        <div class="signup-login-form-header-title">
            <h4>{{ props.title }}</h4>
        </div>
    </div>

</template>
<style>
</style>