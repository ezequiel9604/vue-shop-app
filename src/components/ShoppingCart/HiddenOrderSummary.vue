<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="hidden-order-summary">
        <div>
            <p><label>Amount:</label> <label>(2) Items</label></p>
        </div>
        <div>
            <p><label>Subtotal:</label> <label>$3,400.00</label></p>
            <p><strong>Total: </strong> <strong> $3,400.00</strong></p>
            <RouterLink to="" class="hidden-order-summary-creditcard-btn">Purchase (2)</RouterLink>
        </div>
    </div>
</template>
<style>
</style>