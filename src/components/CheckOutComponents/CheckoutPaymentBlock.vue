<script setup>
import CheckoutBlockContent from './CheckoutBlockContent.vue';

const props = defineProps({
    creditCardNumber: String,
    creditCardOwner: String,
    expirationDate: String,
    securityCode: String
});

</script>
<template>

    <CheckoutBlockContent title="Payment Method" :class="'payment'">

        <div class="checkout-content-left-blocks-rows-payment-method-btn">
            <p>Credit card</p>
            <label class="checkout-content-left-blocks-rows-payment-toggle">
                <input type="checkbox" />
                <span class="checkout-content-left-blocks-rows-payment-slider"></span>
            </label>
            <p>Paypal</p>
        </div>

        <div class="payment-credit-card-content">
            <div class="payment-credit-card-content-front">
                <input type="text" placeholder="0000-0000-0000-0000" :value="props.creditCardNumber" />
                <input type="text" placeholder="JOHN SMITH DOE" :value="props.creditCardOwner" />
                <input type="text" placeholder="00/0000" :value="props.expirationDate" />
            </div>
            <div class="payment-credit-card-content-back">
                <article></article>
                <article></article>
                <input type="text" placeholder="000" :value="props.securityCode" />
            </div>
        </div>

    </CheckoutBlockContent>

</template>
<style>

/* ////////////////////////////////////////////////////// */
/* ///        checkout content blocks payment         /// */ 
/* ////////////////////////////////////////////////////// */
.checkout-content-left-blocks-rows-payment-method-btn{
    width: fit-content;
    box-sizing: border-box;
    margin: 20px auto;

    display: flex;
    justify-content: center;
    align-items: center;
}
.checkout-content-left-blocks-rows-payment-method-btn p{
    width: fit-content;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
}
.checkout-content-left-blocks-rows-payment-toggle {
    position: relative;
    width: 60px;
    height: 30px;
    margin: 0 20px;
}
.checkout-content-left-blocks-rows-payment-toggle input { 
    opacity: 0;
    width: 0;
    height: 0;
}
.checkout-content-left-blocks-rows-payment-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #dddddd;
    border-radius: 34px;

    -webkit-transition: .4s;
    -ms-transition: .4s;
    transition: .4s;
}
.checkout-content-left-blocks-rows-payment-slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;

    -webkit-transition: .4s;
    -ms-transition: .4s;
    transition: .4s;
}
.checkout-content-left-blocks-rows-payment-toggle input:checked + 
.checkout-content-left-blocks-rows-payment-slider {
    background-color: #2196F3;
}
.checkout-content-left-blocks-rows-payment-toggle input:checked + 
.checkout-content-left-blocks-rows-payment-slider:before {
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
}

@media screen and (max-width: 834px) {
    
     /* ////////////////////////////////////////////////////// */
    /* ///        checkout content blocks payment         /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows-payment-method-btn p{
        font-size: 14px;
    }
    .checkout-content-left-blocks-rows-payment-toggle {
        width: 55px;
        height: 25px;
        margin: 0 20px;
    }
    .checkout-content-left-blocks-rows-payment-slider:before {
        height: 18px;
        width: 18px;
        left: 6px;
        bottom: 4px;
    }
    .checkout-content-left-blocks-rows-payment-toggle input:checked + 
    .checkout-content-left-blocks-rows-payment-slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

}

@media screen and (max-width: 414px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///        checkout content blocks payment         /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows-payment-method-btn p{
        font-size: 12px;
    }
    .checkout-content-left-blocks-rows-payment-toggle {
        width: 40px;
        height: 22px;
    }
    .checkout-content-left-blocks-rows-payment-slider:before {
        height: 14px;
        width: 14px;
        left: 4px;
        bottom: 4px;
    } 
    .checkout-content-left-blocks-rows-payment-toggle input:checked + 
    .checkout-content-left-blocks-rows-payment-slider:before {
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
    }
    
}

</style>