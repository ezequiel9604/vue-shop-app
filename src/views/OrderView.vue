<script setup>
import OrderSample from '../components/OrderComponents/OrderSample.vue';
import PaginationVue from '../components/SearchResultsComponents/Pagination.vue';
import Orders from '../assets/data/Orders';

</script>
<template>

    <div class="sections">

        <div class="sections-headers">
            <h2>My orders</h2>
        </div>

        <div class="myorder-content">

            <div class="myorder-content-filter">
                <div>
                    <label>Order number:</label>
                    <input type="text" placeholder="ORD-025456813" />
                    <button>Search</button>
                </div>

                <div>
                    <label>Status:</label>
                    <select>
                        <option value="received">Received</option>
                        <option value="gettingout">Getting out</option>
                        <option value="onitsway">On its way</option>
                        <option value="canceled">Canceled</option>
                    </select>
                </div>
                <div>
                    <label>Order date:</label>
                    <input type="date" />
                </div>
            </div>

            <div class="myorder-content-samples">

                <div class="myorder-content-samples-header">
                    <label>Item</label>
                    <label>Condition</label>
                    <label>Status</label>
                    <label>Subtotal</label>
                </div>

                <div class="myorder-content-samples-content">

                    <OrderSample v-for="o in Orders" 
                        :orderNumber="o.orderNumber"
                        :deliveredDate="o.deliveredDate"
                        :shippingCost="o.shippingCost"
                        :orderDate="o.orderDate"
                        :total="o.total"
                        :items="o.items"
                        :key="o.id"/>

                </div>

            </div>

            <PaginationVue :sets="3" />

        </div>


    </div>

</template>
<style>

.myorder-content{
    width: 80%;
    box-sizing: border-box;
    margin: 60px auto;
}

/* ////////////////////////////////////////////////////// */
/* ///              myorder content filter            /// */ 
/* ////////////////////////////////////////////////////// */
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

/* ////////////////////////////////////////////////////// */
/* ///              myorder content samples           /// */ 
/* ////////////////////////////////////////////////////// */
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

/* ////////////////////////////////////////////////////// */
/* ///         myorder content samples content        /// */ 
/* ////////////////////////////////////////////////////// */
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
    
    /* ////////////////////////////////////////////////////// */
    /* ///              myorder content filter            /// */ 
    /* ////////////////////////////////////////////////////// */
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
  
    /* ////////////////////////////////////////////////////// */
    /* ///              myorder content samples           /// */ 
    /* ////////////////////////////////////////////////////// */
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

    /* ////////////////////////////////////////////////////// */
    /* ///              myorder content filter            /// */ 
    /* ////////////////////////////////////////////////////// */
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

    /* ////////////////////////////////////////////////////// */
    /* ///              myorder content samples           /// */ 
    /* ////////////////////////////////////////////////////// */
    .myorder-content-samples{
        margin-bottom: 10px;
    }
    .myorder-content-samples-header{
        display: none;
    }

}

</style>