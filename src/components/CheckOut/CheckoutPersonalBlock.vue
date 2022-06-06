<script setup>
import CheckoutBlockContent from './CheckoutBlockContent.vue';

const props = defineProps({
    name: String,
    email: String,
    phone: String,
    address: String,
    note: String
});

</script>
<template>

    <CheckoutBlockContent title="Personal Information" :class="'personal'">
            <div>
                <p><strong>Name: </strong> {{ props.name }}</p>
                <p><strong>Email: </strong> {{ props.email }}</p>
                <p><strong>Phone number: </strong> {{ props.phone }}</p>
                <p><strong>Address: </strong> {{ props.address }}</p>
                <p><strong>Note: </strong> {{ props.note }}.</p>
            </div>
            <div>
                <button type="button" class="open-modal-wind-btn">+ add another phone</button>
                <button type="button" class="open-modal-wind-btn">+ add new address</button>
                <button type="button" class="open-modal-wind-btn">+ add a note</button>
            </div>
    </CheckoutBlockContent>

</template>
<style>


/* ////////////////////////////////////////////////////// */
/* ///        checkout content blocks personal        /// */ 
/* ////////////////////////////////////////////////////// */
.checkout-content-left-blocks-rows-personal{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.checkout-content-left-blocks-rows-personal div{
    box-sizing: border-box;
}
.checkout-content-left-blocks-rows-personal div:first-child{
    width: 70%;
}
.checkout-content-left-blocks-rows-personal div:last-child{
    width: 28%;
}
.checkout-content-left-blocks-rows-personal div p{
    width: fit-content;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
    line-height: 18px;
    margin-bottom: 10px;
}
.checkout-content-left-blocks-rows-personal div p strong{
    font-family: "raleway-semibold", sans-serif;
}
.checkout-content-left-blocks-rows-personal div button{
    display: block;
    width: fit-content;
    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #0099ff;
    line-height: 18px;
    margin-bottom: 10px;
    border: none;
    background-color: transparent;
}

@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///        checkout content blocks personal        /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows-personal div:first-child{
        width: 70%;
    }
    .checkout-content-left-blocks-rows-personal div p{
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 8px;
    }
    .checkout-content-left-blocks-rows-personal div p strong{
        font-family: "raleway-semibold", sans-serif;
    }
    .checkout-content-left-blocks-rows-personal div:last-child{
        width: 28%;
    }
    .checkout-content-left-blocks-rows-personal div a{
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 20px;
    }

}

@media screen and (max-width: 414px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///        checkout content blocks personal        /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows-personal{
        display: block;
    }
    .checkout-content-left-blocks-rows-personal div:first-child{
        width: 100%;
    }
    .checkout-content-left-blocks-rows-personal div p{
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 8px;
    }
    .checkout-content-left-blocks-rows-personal div:last-child{
        width: 100%;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
    }
    .checkout-content-left-blocks-rows-personal div button{
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 0px;
    }

}

</style>