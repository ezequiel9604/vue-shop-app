<script setup>
import CheckoutBlockContent from './CheckoutBlockContent.vue';

</script>
<template>

    <CheckoutBlockContent title="Payment Method" :class="'shipment'">

        <label class="checkout-content-left-blocks-rows-shipment-toggle">
            <input type="radio" name="shipment" checked />
            <p class="checkout-content-left-blocks-rows-shipment-slider">
                <strong>Regular</strong>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium, recusandae aperiam magnam facilis.
                </span>
            </p>
        </label>
        <label class="checkout-content-left-blocks-rows-shipment-toggle">
            <input type="radio" name="shipment" />
            <p class="checkout-content-left-blocks-rows-shipment-slider">
                <strong>Express</strong>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Praesentium, recusandae aperiam magnam facilis.
                </span>
            </p>
        </label>

    </CheckoutBlockContent>

</template>
<style>


/* ////////////////////////////////////////////////////// */
/* ///          checkout content blocks shipment      /// */ 
/* ////////////////////////////////////////////////////// */
.checkout-content-left-blocks-rows-shipment{
    width: 90%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
}
.checkout-content-left-blocks-rows-shipment-toggle{
    width: 50%;
    height: 110px;
    box-sizing: border-box;

    position: relative;
}
.checkout-content-left-blocks-rows-shipment-toggle input{
    opacity: 0;
    width: 0;
    height: 0;
}
.checkout-content-left-blocks-rows-shipment-toggle:first-child
.checkout-content-left-blocks-rows-shipment-slider{
    border-radius: 6px 0 0 6px;
}
.checkout-content-left-blocks-rows-shipment-toggle:last-child
.checkout-content-left-blocks-rows-shipment-slider{
    border-radius: 0 6px 6px 0;
}
.checkout-content-left-blocks-rows-shipment-slider{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    
    position: absolute;
    top: 0;
    left: 0; 
    color: #333333;
    cursor: pointer;
    border: 1px solid #dddddd;
    background-color: #f3f3f3;

    transition: 0.4s;
}
.checkout-content-left-blocks-rows-shipment-slider strong{
    display: block;
    width: fit-content;
    margin: 10px auto;
    box-sizing: border-box;

    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
}
.checkout-content-left-blocks-rows-shipment-slider span{
    display: block;
    width: 80%;
    margin: 10px auto;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    text-align: justify;
    line-height: 18px;
}
.checkout-content-left-blocks-rows-shipment-toggle input:checked + 
.checkout-content-left-blocks-rows-shipment-slider{
    border-color: #0099ff;
    background-color: #2196F3;
    color: #ffffff;
}

@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///          checkout content blocks shipment      /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows-shipment{
        width: 90%;
    }
    .checkout-content-left-blocks-rows-shipment-toggle{
        width: 50%;
        height: 100px;
    }
    .checkout-content-left-blocks-rows-shipment-slider strong{
        margin: 10px auto;
        font-size: 14px;
    }
    .checkout-content-left-blocks-rows-shipment-slider span{
        width: 75%;
        margin: 10px auto;
        font-size: 12px;
        line-height: 16px;
    }

}

@media screen and (max-width: 414px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///          checkout content blocks shipment      /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows-shipment{
        width: 90%;
    }
    .checkout-content-left-blocks-rows-shipment-toggle{
        width: 50%;
        height: 35px;
    }
    .checkout-content-left-blocks-rows-shipment-slider strong{
        margin: 10px auto;
        font-size: 13px;
    }
    .checkout-content-left-blocks-rows-shipment-slider span{
        display: none;
        width: 80%;
        margin: 10px auto;
        font-size: 10px;
        line-height: 16px;
    }

}

</style>