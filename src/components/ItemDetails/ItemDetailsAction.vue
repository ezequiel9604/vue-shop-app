<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>

    <div class="top-item-details-details-action">

        <div>
            <RouterLink to="" class="top-item-details-details-action-buynow-button">Buy now</RouterLink>
            <span class="top-item-details-details-action-tooltip">
                Select one of available options of this product.
            </span>
        </div>
        <div>
            <button class="top-item-details-details-action-addtocart-button
                top-item-details-details-action-addtocart-button-active">
                <!-- Added to cart -->
                Add to cart
            </button>
            <span class="top-item-details-details-action-tooltip">
                Select one of available options of this product.
            </span>
        </div>
        <div>
            <button class="top-item-details-details-action-addtolist-button
                top-item-details-details-action-addtolist-button-active">
                <!-- <i class="bi bi-heart-fill"></i>-->
                <i class="bi bi-heart"></i>
            </button>
        </div>

    </div>

</template>
<style>

.top-item-details-details-action{
    width: 60%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.top-item-details-details-action > div{
    width: fit-content;
    box-sizing: border-box;

    position: relative;
}
.top-item-details-details-action-buynow-button{
    display: flex;
    width: fit-content;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #ffffff;
    padding: 8px 16px;

    background-color: tomato;
    border-radius: 4px;
    border: 1px solid tomato;
}
.top-item-details-details-action-addtocart-button{
    display: flex;
    width: fit-content;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
    padding: 8px 16px;

    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid tomato;
    transition: 0.4s;
}

.top-item-details-details-action-addtolist-button{
    width: fit-content;
    box-sizing: border-box;
    padding: 0;
    display: flex;

    font-size: 22px;
    color: #333333;

    border: 0;
    background-color: transparent;
}

@keyframes details-action-tooltip-animation {
    from{ transform: scale(0);}
    to{transform: scale(1);}
}
.top-item-details-details-action-tooltip{
    border: 1px solid;
    display: block;
    width: 300px;
    box-sizing: border-box;

    position: absolute;
    top: 115%;
    left: -10%;

    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #333333;
    line-height: 18px;

    padding: 6px 8px;

    background-color: #ffffff;
    border: 1px solid tomato;
    border-radius: 4px;
    z-index: 10;

    transform: scale(0);

    animation-duration: 0.2s;
    animation-fill-mode: forwards;
}
.top-item-details-details-action-buynow-button:hover + 
.top-item-details-details-action-tooltip{
    animation-name: details-action-tooltip-animation;
}
.top-item-details-details-action-addtocart-button:hover + 
.top-item-details-details-action-tooltip{
    animation-name: details-action-tooltip-animation;
}

@media screen and (max-width: 834px) {
    
    .top-item-details-details-action{
        width: 70%;
    } 

    .top-item-details-details-action-buynow-button{
        font-size: 14px;
        padding: 6px 14px;
    }
    .top-item-details-details-action-addtocart-button{
        font-size: 14px;
        padding: 6px 14px;
    }
    .top-item-details-details-action-addtolist-button{
        display: none;
    }

    .top-item-details-details-action-tooltip{
        width: 260px;
        top: 110%;
        left: -10%;

        font-size: 11px;
        padding: 4px 8px;
    }
}

@media screen and (max-width: 414px) {
    
    .top-item-details-details-action{
        width: 70%;
        margin: 10px auto;
    }
    .top-item-details-details-action-buynow-button{
        font-size: 14px;
        padding: 6px 14px;
    }
    .top-item-details-details-action-addtocart-button{
        font-size: 12px;
        padding: 6px 10px;
    }
    .top-item-details-details-action-tooltip{
        width: 260px;
        top: 110%;
        left: -10%;

        font-size: 10px;
        padding: 2px 6px;
    }

}

</style>
