<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>

    <div class="order-summary-right-sidebar">
        <h4>Order summary:</h4>
        <div><label>Amount:</label> <label>(3) Items</label></div>
        <div><label>Subtotal:</label> <label>$3,400.00</label></div>
        <div class="total"><strong>Total:</strong> <strong>$3,400.00</strong></div>
        <RouterLink to="" class="order-summary-right-sidebar-creditcar-btn">Purchase (3)</RouterLink>
    </div>

</template>
<style>
</style>
