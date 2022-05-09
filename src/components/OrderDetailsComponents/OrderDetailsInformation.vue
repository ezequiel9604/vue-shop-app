<script setup>

const props = defineProps({
    name: String,
    email: String,
    phone: String,
    address: String,
    items: Array,
    shippingCost: Number
});

const calculateSubtotalAllItems = (items) => {
    let sum = 0;
    items.forEach(element => {
        sum+= element.subtotal;
    });
    return sum;
}

</script>
<template>

    <div class="order-details-content-information">

        <div>
            <h4>Shipping to:</h4>

            <p>{{ props.name }}</p>
            <p>{{ props.address}}</p>
            <p>{{ props.phone }}</p>
            <p>{{ props.email }}</p>
        </div>
        <div>
            <h4>Order details:</h4>

            <article>
                <span>Amount: {{ props.items.length}} items</span>
                <span>Subtotal: ${{ calculateSubtotalAllItems(props.items) }}</span>
            </article>
            <article>
                <span>shipment: ${{ props.shippingCost }}</span>
            </article>
            <article>
                <span>descount: $0.00</span>
            </article>
            <article>
                <span>Total: ${{ calculateSubtotalAllItems(props.items) + props.shippingCost }}</span>
            </article>

        </div>

    </div>

</template>
<style>


/* ////////////////////////////////////////////////////// */
/* ///        order details content information       /// */ 
/* ////////////////////////////////////////////////////// */
.order-details-content-information{
    width: 90%;
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: 20px;

    display: flex;
    justify-content: space-around;
}
.order-details-content-information div{
    width: 45%;
    box-sizing: border-box;
}
.order-details-content-information div h4{
    text-align: center;
    margin-bottom: 40px;
    font-family: "raleway-semibold", sans-serif;
    font-size: 18px;
    color: #333333;
}
.order-details-content-information div p{
    width: fit-content;
    margin-bottom: 25px;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333; 
}
.order-details-content-information div article{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.order-details-content-information div article span{
    display: inline-block;
    margin-bottom: 25px;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333; 
}
.order-details-content-information div article:nth-child(2){
    justify-content: space-between;
}
.order-details-content-information div article:nth-child(3){
    justify-content: right;
}
.order-details-content-information div article:nth-child(4){
    justify-content:right;
}
.order-details-content-information div article:nth-child(5){
    justify-content: right;
    border-top: 1px solid #dddddd;
    padding-top: 10px;
}
.order-details-content-information div article:nth-child(5) span{
    font-family: "raleway-semibold", sans-serif;
    font-size: 18px;
}

@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///        order details content information       /// */ 
    /* ////////////////////////////////////////////////////// */
    .order-details-content-information{
        width: 100%;
        margin-bottom: 10px;
    }
    .order-details-content-information div{
        width: 45%;
    }
    .order-details-content-information div h4{
        margin-bottom: 25px;
        font-size: 16px;
    }
    .order-details-content-information div p{
        margin-bottom: 15px;
        font-size: 14px;
    }
    .order-details-content-information div article span{
        margin-bottom: 20px;
        font-size: 14px;
    }
    .order-details-content-information div article:nth-child(5){
        padding-top: 10px;
    }
    .order-details-content-information div article:nth-child(5) span{
        font-size: 16px;
    }

}

@media screen and (max-width: 414px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///        order details content information       /// */ 
    /* ////////////////////////////////////////////////////// */
    .order-details-content-information{
        margin-bottom: 8px;
        display: block;
        overflow: hidden;
    }
    .order-details-content-information div{
        width: 90%;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    .order-details-content-information div h4{
        margin-bottom: 25px;
        font-size: 14px;
    }
    .order-details-content-information div p{
        margin: 0px auto;
        margin-bottom: 15px;
        font-size: 12px;
    }
    .order-details-content-information div article span{
        margin-bottom: 15px;
        font-size: 13px;
    }
    .order-details-content-information div article:nth-child(2),
    .order-details-content-information div article:nth-child(3),
    .order-details-content-information div article:nth-child(4),
    .order-details-content-information div article:nth-child(5){
        width: 90%;
        margin: 0px auto;
    }
    .order-details-content-information div article:nth-child(5){
        padding-top: 8px;
    }
    .order-details-content-information div article:nth-child(5) span{
        font-size: 14px;
    }

}

</style>