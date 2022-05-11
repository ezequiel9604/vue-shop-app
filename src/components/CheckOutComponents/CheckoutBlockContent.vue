<script setup>

const props = defineProps({
    title: String,
    class: String
});

</script>
<template>
    
    <div class="checkout-content-left-blocks-rows">

        <div class="checkout-content-left-blocks-rows-header">
            <h5>{{ props.title }}:</h5>
        </div>

        <div :class="`checkout-content-left-blocks-rows-content 
            checkout-content-left-blocks-rows-`+props.class">

            <slot>

            </slot>

        </div>

    </div>

</template>
<style>

/* ////////////////////////////////////////////////////// */
/* ///             checkout content blocks            /// */ 
/* ////////////////////////////////////////////////////// */
.checkout-content-left-blocks-rows{
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
    overflow: hidden;
}

.checkout-content-left-blocks-rows-header{
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #dddddd;
}

.checkout-content-left-blocks-rows-header h5{
    width: fit-content;
    font-family: "raleway-semibold", sans-serif;
    font-size: 20px;
    color: #333333;
    padding-bottom: 10px;
}

.checkout-content-left-blocks-rows-content{
    width: 98%;
    margin: 20px auto;
    box-sizing: border-box;
}


@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///             checkout content blocks            /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows{
        width: 100%;
        margin-bottom: 10px;
    }
    
    .checkout-content-left-blocks-rows-header h5{
        font-size: 16px;
        padding-bottom: 8px;
    }

    .checkout-content-left-blocks-rows-content{
        width: 96%;
        margin: 15px auto;
    }

}

@media screen and (max-width: 414px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///             checkout content blocks            /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows{
        margin-bottom: 10px;
    }
    
    .checkout-content-left-blocks-rows-header h5{
        font-size: 14px;
    }

    .checkout-content-left-blocks-rows-content{
        width: 96%;
        margin: 10px auto;
    }

}

</style>