<script setup>
import OrderDetailsStatus from '../components/OrderDetailsComponents/OrderDetailsStatus.vue';
import RowMiniSample from '../components/OrderDetailsComponents/RowMiniSample.vue';
import OrderDetailsInformation from '../components/OrderDetailsComponents/OrderDetailsInformation.vue';
import Orders from '../assets/data/Orders';

</script>
<template>

    <div class="order-details">

        <div class="order-details-content">

            <OrderDetailsStatus />

            <div class="order-details-content-samples">

                <div class="order-details-content-samples-options">

                    <div>
                        <h4>Order number: <strong>ORD-025456813</strong></h4>
                    </div>
                    <div>
                        <button><i class="bi bi-receipt"></i>&nbsp;Download receipt</button>
                        <button id="cancel-order-btn">
                            Cancel order
                        </button>
                    </div>

                </div>

                <div class="order-details-content-samples-header">
                    <label>Item</label>
                    <label>Condition</label>
                    <label>Subtotal</label>
                </div>

                <div class="order-details-content-samples-content">

                    <RowMiniSample v-for="i in Orders[0].items"
                        :images="i.images"
                        :title="i.title"
                        :specifications="i.specifications"
                        :precio="i.precio"
                        :amount="i.amount"
                        :condition="i.condition"
                        :subtotal="i.subtotal" 
                        :key="i.id" />

                </div>

            </div>

            <OrderDetailsInformation 
                :name="Orders[0].client.name"
                :email="Orders[0].client.email"
                :address="Orders[0].client.address"
                :phone="Orders[0].client.phone"
                :shippingCost="Orders[0].shippingCost"
                :items="Orders[0].items" />

        </div>

    </div>

</template>
<style>


.order-details{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #ffffff;
    margin: 40px 0
}

.order-details-content{
    width: 80%;
    box-sizing: border-box;
    margin: 0px auto;
}

/* ////////////////////////////////////////////////////// */
/* ///          order details content samples         /// */ 
/* ////////////////////////////////////////////////////// */
.order-details-content-samples{
    width: 90%;
    box-sizing: border-box;
    margin: 0px auto;
    margin-bottom: 40px;
}
.order-details-content-samples-options{
    width: 100%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-details-content-samples-options > div{
    width: fit-content;
    box-sizing: border-box;
}
.order-details-content-samples-options > div:first-child h4{
    font-family: "raleway-regular", sans-serif;
    font-size: 20px;
    color: #333333;
}
.order-details-content-samples-options > div:first-child h4 strong{
    font-weight: bold;
}
.order-details-content-samples-options > div:last-child{
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-details-content-samples-options > div:last-child button{
    width: fit-content;
    border: 0;

    display: flex;
    background-color: transparent;
    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #0099ff;
    position: relative;
    z-index: 0;
}
@keyframes tooltip-animation {
    from {top: 50%;}
    to{top: 120%;}
}
.tooltip{
    display: none;
    border: 1px solid #cccccc;
    width: 200px;
    padding: 8px;

    background-color: #fafafa;
    border-radius: 6px;

    animation-name: tooltip-animation;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    position: absolute;
    top: 50%;
    right: -40%;
    z-index: 10px;
}
.tooltip p{
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #333333;
    line-height: 16px;
}
button#cancel-order-btn:hover .tooltip{
    display: block;
}

/* ////////////////////////////////////////////////////// */
/* ///      order details content samples header      /// */ 
/* ////////////////////////////////////////////////////// */
.order-details-content-samples-header{
    width: 100%;
    box-sizing: border-box;
    margin: 5px auto;
    background-color: #dddddd;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.order-details-content-samples-header label{
    display: block;
    box-sizing: border-box;
    margin: 8px 0;
    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
}
.order-details-content-samples-header label:nth-child(1){
    width: 44%;
    padding-left: 10%;
}
.order-details-content-samples-header label:nth-child(2),
.order-details-content-samples-header label:nth-child(3){
    width: 20%;
    text-align: center;
}

@media screen and (max-width: 834px) {

    .order-details-content{
        width: 95%;
        margin: 20px auto;
    }
    
    /* ////////////////////////////////////////////////////// */
    /* ///          order details content samples         /// */ 
    /* ////////////////////////////////////////////////////// */
    .order-details-content-samples{
        width: 100%;
        margin-bottom: 25px;
    }
    .order-details-content-samples-options > div:first-child h4{
        font-size: 16px;
    }
    .order-details-content-samples-options > div:last-child{
        width: 40%;
    }
    .order-details-content-samples-options > div:last-child button{
        font-size: 14px;
    }
    .tooltip{
        width: 200px;
        padding: 8px;
        top: 50%;
        right: -40%;
    }
    .tooltip p{
        font-size: 12px;
        line-height: 15px;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///      order details content samples header      /// */ 
    /* ////////////////////////////////////////////////////// */
    .order-details-content-samples-header{
        width: 100%;
        margin: 5px auto;
    }
    .order-details-content-samples-header label{
        margin: 5px 0;
        font-size: 14px;
    }
    .order-details-content-samples-header label:nth-child(1){
        width: 60%;
    }
    .order-details-content-samples-header label:nth-child(2),
    .order-details-content-samples-header label:nth-child(3){
        width: 15%;
    }
}

@media screen and (max-width: 414px) {
    
    .order-details-content{
        width: 94%;
        margin: 20px auto;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///          order details content samples         /// */ 
    /* ////////////////////////////////////////////////////// */
    .order-details-content-samples{
        width: 100%;
        margin-bottom: 25px;
    }
    .order-details-content-samples-options > div:first-child h4{
        font-size: 12px;
    }
    .order-details-content-samples-options > div:last-child{
        width: 50%;
    }
    .order-details-content-samples-options > div:last-child button{
        font-size: 10px;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///      order details content samples header      /// */ 
    /* ////////////////////////////////////////////////////// */
    .order-details-content-samples-header{
        width: 100%;
        margin: 5px auto;
    }
    .order-details-content-samples-header label{
        font-size: 13px;
    }
    .order-details-content-samples-header label:nth-child(1){
        width: 95%;
        text-align: center;
        padding-left: 0;
    }
    .order-details-content-samples-header label:nth-child(2),
    .order-details-content-samples-header label:nth-child(3){
        display: none;
        width: 0%;
    }

}

</style>