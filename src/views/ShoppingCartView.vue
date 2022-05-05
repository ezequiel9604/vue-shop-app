<script setup>
import { RouterLink } from 'vue-router';
import RowMediumSample from '../components/ShoppingCartComponents/RowMediumSample.vue';
import ColumnMediumSample from '../components/SearchResultsComponents/ColumnMediumSample.vue';
import OrderSummaryRightSidebar from '../components/ShoppingCartComponents/OrderSummaryRightSidebar.vue';
import HiddenOrderSummary from '../components/ShoppingCartComponents/HiddenOrderSummary.vue';
import ShoppingCartContentEmpty from '../components/ShoppingCartComponents/ShoppingCartContentEmpty.vue';
import Items from '../assets/data/Items';


</script>
<template>
    
    <div class="sections">

        <div class="sections-headers">
            <h2>Shopping cart</h2>
        </div>

        <div class="shopping-cart-content">

            <div class="shopping-cart-content-left">

                <div class="shopping-cart-content-checkall">
                    <label for="selectallitems">
                        <input type="checkbox" id="selectallitems" />
                        Select all items.
                    </label>
                </div>

                <div v-if="Items.length > 0" class="shopping-cart-content-samples">

                    <RowMediumSample v-for="i in Items.slice(0,3)" 
                        :title="i.title"
                        :price="i.price"
                        :descount="i.descount"
                        :stock="i.stock"
                        :images="i.images"  
                        :key="i.id" />

                </div>

                <div v-else class="shopping-cart-content-samples">

                    <ShoppingCartContentEmpty />

                </div>

                <HiddenOrderSummary />

                <div class="shopping-cart-content-banner">
                    <!-- here goes banner -->
                </div>

                <div class="shopping-cart-content-recommendation">

                    <ColumnMediumSample v-for="i in Items.slice(0,3)"
                        :title="i.title"
                        :price="i.price"
                        :images="i.images"
                        :descount="i.descount" 
                        :key="i.id" />

                </div>       

            </div>

            <OrderSummaryRightSidebar />

        </div>

    </div>

</template>
<style>

.shopping-cart-content{
    width: 90%;
    box-sizing: border-box;
    margin: 40px auto;

    display: flex;
    justify-content: space-between;
    align-self: flex-start;
}

/* ////////////////////////////////////////////////////// */
/* ///          shopping cart content left            /// */ 
/* ////////////////////////////////////////////////////// */
.shopping-cart-content-left{
    width: 72%;
    box-sizing: border-box;
}

/* ////////////////////////////////////////////////////// */
/* ///         shopping cart content checkall         /// */ 
/* ////////////////////////////////////////////////////// */
.shopping-cart-content-checkall{
    width: 95%;
    margin: 0 auto;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 15px;
}
.shopping-cart-content-checkall input{
    width: 20px;
    height: 20px;
    cursor: pointer;
}
.shopping-cart-content-checkall label{
    width: fit-content;
    margin-left: 10px;

    font-family: "raleway-semibold", sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #333333;
}

.shopping-cart-content-samples{
    width: 100%;
    box-sizing: border-box;
}

/* ////////////////////////////////////////////////////// */
/* ///          shopping cart content banner          /// */ 
/* ////////////////////////////////////////////////////// */
.shopping-cart-content-banner{
    width: 90%;
    margin: 40px auto;
    height: 100px;
    box-sizing: border-box;
    background-color: #dddddd;
    border-radius: 6px;
}

/* ////////////////////////////////////////////////////// */
/* ///      shopping cart content recommendation      /// */ 
/* ////////////////////////////////////////////////////// */
.shopping-cart-content-recommendation{
    width: 85%;
    box-sizing: border-box;
    margin: 20px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 834px) {
    
    .shopping-cart-content{
        width: 90%;
        margin: 20px auto;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///            column medium samples               /// */ 
    /* ////////////////////////////////////////////////////// */
    .column-medium-samples:last-child{
        display: block;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///          shopping cart content left            /// */ 
    /* ////////////////////////////////////////////////////// */
    .shopping-cart-content-left{
        width: 100%;
        box-sizing: border-box;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///         shopping cart content checkall         /// */ 
    /* ////////////////////////////////////////////////////// */
    .shopping-cart-content-checkall{
        margin: 10px auto;
        border-bottom: 1px solid transparent;
        padding-bottom: 15px;
    }
    .shopping-cart-content-checkall input{
        width: 15px;
        height: 15px;
    }
    .shopping-cart-content-checkall label{
        font-size: 14px;
    }
  
    /* ////////////////////////////////////////////////////// */
    /* ///          shopping cart content banner          /// */ 
    /* ////////////////////////////////////////////////////// */
    .shopping-cart-content-banner{
        width: 90%;
        margin: 10px auto;
        height: 80px;
        box-sizing: border-box;
        background-color: #dddddd;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///      shopping cart content recommendation      /// */ 
    /* ////////////////////////////////////////////////////// */
    .shopping-cart-content-recommendation{
        width: 85%;
        margin: 20px auto;
    }

}

@media screen and (max-width: 414px) {
    
    .shopping-cart-content{
        width: 90%;
        margin: 10px auto;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///            column medium samples               /// */ 
    /* ////////////////////////////////////////////////////// */
    .column-medium-samples:last-child{
        display: none;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///         shopping cart content checkall         /// */ 
    /* ////////////////////////////////////////////////////// */
    .shopping-cart-content-checkall{
        margin: 5px auto;
        padding-bottom: 15px;
    }
    .shopping-cart-content-checkall input{
        width: 12px;
        height: 12px;
    }
    .shopping-cart-content-checkall label{
        font-size: 12px;
    }
        
    /* ////////////////////////////////////////////////////// */
    /* ///          shopping cart content banner          /// */ 
    /* ////////////////////////////////////////////////////// */
    .shopping-cart-content-banner{
        width: 90%;
        height: 60px;
        margin: 20px auto;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///      shopping cart content recommendation      /// */ 
    /* ////////////////////////////////////////////////////// */
    .shopping-cart-content-recommendation{
        width: 90%;
        margin: 10px auto;
        justify-content: space-around;
    }

}

</style>