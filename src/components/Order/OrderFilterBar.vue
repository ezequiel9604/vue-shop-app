<script setup>
import { reactive } from 'vue';
import { status } from '../../assets/data/DummyData';

const props = defineProps({
    orderstatus: String,
    ordernumber: String,
    orderdate: String,
    onchangeordernumber: Function,
    onchangeorderstatus: Function,
})

const state = reactive({
    orderStatus: props.orderstatus,
    orderNumber: props.ordernumber,
    orderDate: props.orderdate,
})

const changeOrderNumberState = () => {
    props.onchangeordernumber(state.orderNumber)
}

const changeOrderStatus = (e) => {
    props.onchangeorderstatus(e.target.value);
}

</script>
<template>
    <div class="myorder-content-filter">
        <div>
            <label>Order number:</label>
            <input type="text" v-model="state.orderNumber" placeholder="ORD-025456813" />
            <button @click="changeOrderNumberState">Search</button>
        </div>

        <div>
            <label>Status:</label>
            <select @change="changeOrderStatus">
                <option v-for="s in status" :selected="s == status.orderStatus" :value="s" :key="s">{{ s }}</option>
            </select>
        </div>
        <div>
            <label>Order date:</label>
            <input type="date" v-model="state.orderDate" />
        </div>
    </div>
</template>
<style>

.myorder-content-filter{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.myorder-content-filter div{
    width: fit-content;
    box-sizing: border-box;
    position: relative;
}
.myorder-content-filter div label{
    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
    margin-right: 5px;
}
.myorder-content-filter div input,
.myorder-content-filter div select{
    box-sizing: border-box;
    border: 1px solid #dddddd;
    border-radius: 6px;
    margin-right: 5px;

    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
    padding: 4px 8px;
}
.myorder-content-filter div button{
    padding: 4px 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    font-family: "raleway-regular", sans-serif;
    font-size: 15px;
    color: #333333;
    background-color: #f1f1f1;
    border: 1px solid #dddddd;
}

@media screen and (max-width: 834px) {
    
    .myorder-content-filter{
        margin-bottom: 15px;
    }
    .myorder-content-filter div label{
        font-size: 13px;
    }
    .myorder-content-filter div input,
    .myorder-content-filter div select{
        font-size: 13px;
        padding: 4px 6px;
    }
    .myorder-content-filter div button{
        padding: 4px 8px;
        font-size: 13px;
    }
}

@media screen and (max-width: 414px) {
    
    .myorder-content-filter{
        margin-bottom: 15px;
        flex-wrap: wrap;
    }
    .myorder-content-filter div:nth-child(1){
        width: 100%;
        margin-bottom: 10px;
    }
    .myorder-content-filter div:nth-child(1) input{
        width: 58%;
    }
    .myorder-content-filter div label{
        font-size: 11px;
    }
    .myorder-content-filter div input,
    .myorder-content-filter div select{
        font-size: 11px;
        padding: 2px 4px;
    }
    .myorder-content-filter div button{
        padding: 2px 14px;
        font-size: 11px;
    }
}

</style>