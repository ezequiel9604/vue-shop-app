<script setup>
import { reactive, computed } from 'vue';
import OrderSample from '../components/OrderComponents/OrderSample.vue';
import OrderFilterBar from '../components/OrderComponents/OrderFilterBar.vue';
import Pagination from '../components/SearchResultsComponents/Pagination.vue';
import { Orders, Purchases } from '../assets/data/Orders';
import { Items } from '../assets/data/Items';

const props = defineProps({clientid: String});

const state = reactive({
    orderNumber: "",
    orderDate: "",
    orderStatus: "All",

    selectedSet: 1
});

const changeOrderNumber = (value) => {
    state.orderNumber= value.toUpperCase();
    console.log(state.orderNumber)
}

const changeOrderStatus = (value) => {
    state.orderStatus= value;
}

const changeSelectedSet = (value) => {
    state.selectedSet = value;
}

const getClientsOrders = computed(() => {

    // returns all orders made by this client
    let ords = Orders.filter((current) => {
        if(current.clientId == props.clientid){
            return current;
        }
    })

    // adds an array field called 'purchases'
    ords.forEach((current) => {
        current['purchases'] = [];
    })

    // fill the array 'purchases' with objects that contains 'id', 'amount', 'condition', 'item'
    ords.forEach((current) => {  
        for (let i = 0; i < Purchases.length; i++) {     
            if(Purchases[i].orderId == current.id){
                let item;
                Items.forEach((element) => {
                    if(element.id == Purchases[i].itemId)
                        item = element;
                });

                current.purchases.push({
                    id: Purchases[i].id,
                    amount: Purchases[i].amount,
                    condition: Purchases[i].condition,
                    item: item
                });
            }    
        }
    });

    // filter orders by order number
    if(state.orderNumber != ""){
        ords = [...ords.filter((current) => {
            if(current.id == state.orderNumber)
                return current;    
        })];
    }

    // filter orders by order status
    if(state.orderStatus != "All"){
        ords = [...ords.filter((current) => {
            if(current.status == state.orderStatus)
                return current;    
        })]; 
    }

    return ords;
});

const getOrdersSets = computed(() => {
    let sets = getClientsOrders.value.length / 3;

    if(sets < 1)
        return 1;

    if(sets > parseInt(sets))
        return parseInt(sets) + 1;
    
    return parseInt(sets);
});


</script>
<template>

    <div class="sections">

        <div class="sections-headers">
            <h2>My orders</h2>
        </div>

        <div class="myorder-content">

            <!-- filter bar -->
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

                    <OrderSample v-for="ord in getClientsOrders.slice((state.selectedSet * 3)-3,state.selectedSet*3)" 
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

            <Pagination
                :sets="getOrdersSets"
                :selectedset="state.selectedSet" 
                :onchangeselectedset="changeSelectedSet" />

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