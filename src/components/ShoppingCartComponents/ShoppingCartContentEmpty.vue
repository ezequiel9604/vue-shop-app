<script setup>
import { RouterLink } from 'vue-router';
import CartImage from '../../assets/imgs/samples/shopping_cart.png';
</script>
<template>

    <div class="shopping-cart-content-empty">
        <figure>
            <img :src="CartImage" alt="" />
        </figure>
        <h3>Shopping cart is empty!!!</h3>
        <RouterLink to="">
            <i class="fas fa-reply"></i> Find more offers and items.
        </RouterLink>
    </div>

</template>
<style>

.shopping-cart-content-empty{
    width: 90%;
    margin: 20px auto;
    box-sizing: border-box;
}
.shopping-cart-content-empty figure{
    width: 80%;
    height: 300px;
    margin: 0 auto;
    box-sizing: border-box;

    display:flex ;
    justify-content: center;
    align-items: center;
}
.shopping-cart-content-empty figure img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.shopping-cart-content-empty h3{
    width: 90%;
    margin: 20px auto;

    font-family: "raleway-semibold", sans-serif;
    font-size: 30px;
    color: #333333;
    text-align: center;
}
.shopping-cart-content-empty a{
    display: block;
    width: 90%;
    margin: 20px auto;

    font-family: "raleway-semibold", sans-serif;
    font-size: 18px;
    color: #0099ff;
    text-align: center;
}

@media screen and (max-width: 834px) {
    
    .shopping-cart-content-empty figure{
        width: 60%;
        height: 250px;
    }
    .shopping-cart-content-empty h3{
        width: 90%;
        margin: 20px auto;
        font-size: 26px;
    }
    .shopping-cart-content-empty a{
        width: 90%;
        margin: 20px auto;
        font-size: 16px;
    }

}

@media screen and (max-width: 414px) {
    
    .shopping-cart-content-empty{
        margin: 20px auto;
        margin-bottom: 40px;
    }
    .shopping-cart-content-empty figure{
        width: 70%;
        height: 150px;
    }
    .shopping-cart-content-empty h3{
        width: 90%;
        margin: 10px auto;
        font-size: 20px;
    }
    .shopping-cart-content-empty a{
        width: 90%;
        margin: 10px auto;
        font-size: 12px;
    }
    
}

</style>