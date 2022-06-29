<script setup>
import { reactive, computed, onMounted } from 'vue';
import OrderSample from '../components/Order/OrderSample.vue';
import OrderFilterBar from '../components/Order/OrderFilterBar.vue';
import Pagination from '../components/SearchResults/Pagination.vue';
import { GetOrdersByClientId, GetOrders, GetOrdersFilterByAll , GetSetsOfItems } from '../services/Order';

const props = defineProps({
    client: Object,
    items: Array
});

const state = reactive({
    orders: [],
    orderStatus: "All",
    orderNumber: "",
    orderDate: "",
    selectedSet: 1
});

onMounted( async () => {

    //state.orders = await GetOrdersByClientId(props.client.id);
    state.orders = GetOrders(props.client.id);
});

const changeOrderNumber = (value) => {
    state.orderNumber= value.toUpperCase();
}
const changeOrderStatus = (value) => {
    state.orderStatus= value;
}
const changeFilterSState = (type, value) => {
    state.selectedSet = value;
}

const getFilteredClientsOrders = computed(() => {
    return GetOrdersFilterByAll(state.orders, props.items, 
        state.orderStatus, state.orderNumber);
});

const getOrdersSets = computed(() => {
    return GetSetsOfItems(getFilteredClientsOrders.value, 3);
});


</script>
<template>

    <div class="sections">

        <div class="sections-headers">
            <h2>My orders</h2>
        </div>

        <div class="myorder-content">

            <OrderFilterBar 
                :orderstatus="state.orderStatus"
                :ordernumber="state.orderNumber"
                :orderdate="state.orderDate"
                :onchangeordernumber="changeOrderNumber"
                :onchangeorderstatus="changeOrderStatus"
                />

            <div class="myorder-content-samples">

                <div class="myorder-content-samples-header">
                    <label>Item</label>
                    <label>Condition</label>
                    <label>Status</label>
                    <label>Subtotal</label>
                </div>

                <div class="myorder-content-samples-content">

                    <div v-if="state.orders.length">

                        <OrderSample v-for="ord in getFilteredClientsOrders.slice((state.selectedSet * 3)-3,state.selectedSet*3)" 
                            :orderNumber="ord.id"
                            :deliveredDate="ord.deliveredDate"
                            :shippingCost="ord.shippingCost"
                            :purchases="ord.purchases"
                            :orderDate="ord.orderDate"
                            :status="ord.status"
                            :total="ord.total"
                            :key="ord.id"
                            />

                    </div>

                </div>

            </div>

            <Pagination
                :sets="getOrdersSets"
                :selectedset="state.selectedSet" 
                :onChangeFilterSState="changeFilterSState" />

        </div>


    </div>

</template>
<style>

.myorder-content{
    width: 80%;
    box-sizing: border-box;
    margin: 60px auto;
}

.myorder-content-samples{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 60px;

}
.myorder-content-samples-header{
    width: 100%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px;
    background-color: #f1f1f1;
}
.myorder-content-samples-header label{
    margin: 12px 0;
    font-family: "raleway-regular", sans-serif;
    font-size: 15px;
    color: #333333;
}
.myorder-content-samples-header label:nth-child(1){
    width: 40%;
}

.myorder-content-samples-content{
    width: 100%;
    box-sizing: border-box;
    margin: 10px auto;
}

@media screen and (max-width: 834px) {

    .myorder-content{
        width: 90%;
        margin: 40px auto;
    }

    .myorder-content-samples{
        margin-bottom: 10px;
    }
    .myorder-content-samples-header label{
        margin: 10px 0;
        font-size: 13px;
    }
    .myorder-content-samples-header label:nth-child(1){
        width: 40%;
    }
}

@media screen and (max-width: 414px) {

    .myorder-content{
        width: 90%;
        margin: 20px auto;
    }

    .myorder-content-samples{
        margin-bottom: 10px;
    }

    .myorder-content-samples-header{
        display: none;
    }

}

</style>