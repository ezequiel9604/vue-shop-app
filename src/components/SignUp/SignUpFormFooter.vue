<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  title: String,
  link: String,
  desc: String
});

</script>
<template>
    
    <div class="signup-login-form-footer">
        <h6>{{ props.title }} 
        <RouterLink :to="'/'+link">{{ props.desc }}</RouterLink> now.</h6>
    </div>
    
</template>
<style>
</style>
