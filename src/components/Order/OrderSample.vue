<script setup>
import { RouterLink } from 'vue-router';
import OrderMiniSample from './OrderMiniSample.vue';
import { formatedNumber } from '../../services/Item';

const props = defineProps({
  orderNumber: String,
  deliveredDate: String,
  shippingCost: Number,
  orderDate: String,
  total: Number,
  purchases: Array,
  status: String
});

</script>
<template>

    <div class="myorder-samples">

        <div class="myorder-samples-header">
            <div>
                <p><strong>Order number:</strong> {{ props.orderNumber }}</p>
            </div>
            <div>
                <p><strong>Delivered date:</strong> {{ props.deliveredDate }}</p>
            </div>
            <div>
                <p><strong>Shipping cost:</strong> ${{ formatedNumber(props.shippingCost)}}</p>
            </div>
            <div>
                <p><strong>Order date:</strong> {{ props.orderDate }}</p>
            </div>
            <div>
                <RouterLink :to="'/orders/orderDetails?orderNumber='+props.orderNumber">See details order</RouterLink>
            </div>
            <div>
                <p class="total"><strong>Total:</strong> ${{ formatedNumber(props.total) }}</p>
            </div>
        </div>

        <OrderMiniSample v-for="p in props.purchases" 
            :id="p.item.id"
            :image="p.item.imageDtos[0].path"
            :title="p.item.title"
            :price="p.subitem.price" 
            :descount="p.subitem.descount"
            :amount="p.amount"
            :condition="p.condition"
            :status="props.status"
            :key="p.id"
            />

    </div>

</template>
<style>

.myorder-samples{
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
}
.myorder-samples-header{
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #f1f1f1;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.myorder-samples-header div{
    width: 28%;
    margin: 8px 0;
    box-sizing: border-box;
}
.myorder-samples-header div p, 
.myorder-samples-header div a{
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
}
.myorder-samples-header div p strong{
    font-family: "raleway-semibold", sans-serif;
    font-size: 15px;
} 
.myorder-samples-header div .total{
    font-family: "raleway-semibold", sans-serif;
    color: tomato;
}
.myorder-samples-header div a{
    color: #0099ff;
}

@media screen and (max-width: 834px) {
    
    .myorder-samples{
        margin-bottom: 15px;
    }
    .myorder-samples-header{
        padding: 8px 0;
    }
    .myorder-samples-header div{
        width: 28%;
        margin: 5px 0;
    }
    .myorder-samples-header div p, 
    .myorder-samples-header div a{
        font-size: 12px;
    }
    .myorder-samples-header div p strong{
        font-size: 13px;
    } 
}

@media screen and (max-width: 414px) {
    
    .myorder-samples{
        margin-bottom: 15px;
    }
    .myorder-samples-header{
        padding: 8px 0;
    }
    .myorder-samples-header div{
        width: 47%;
        margin: 5px 0;
    }
    .myorder-samples-header div p, 
    .myorder-samples-header div a{
        font-size: 11px;
    }
    .myorder-samples-header div p strong{
        font-size: 12px;
    } 
}

</style>
