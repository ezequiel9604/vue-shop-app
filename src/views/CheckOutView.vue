<script setup>
import { RouterLink } from 'vue-router';
import CheckoutPersonalBlock from '../components/CheckOutComponents/CheckoutPersonalBlock.vue';
import CheckoutPaymentBlock from '../components/CheckOutComponents/CheckoutPaymentBlock.vue';
import CheckoutShipmentBlock from '../components/CheckOutComponents/CheckoutShipmentBlock.vue';
import OrderSummaryRightSidebar from '../components/CheckOutComponents/OrderSummaryRightSidebar.vue';
import Clients from '../assets/data/Clients';


</script>
<template>

    <div class="sections">

        <div class="sections-headers">
            <h2>Checkout your order</h2>
        </div>

        <div class="checkout-content">

            <div class="checkout-content-left">

                <div class="checkout-content-left-blocks">

                    <CheckoutPersonalBlock 
                        :name="Clients[0].name" 
                        :email="Clients[0].email"
                        :phone="Clients[0].phone"
                        :address="Clients[0].address"
                        :note="Clients[0].note" 
                        />

                    <CheckoutPaymentBlock 
                        :creditCardNumber="Clients[0].wallets[0].creditCardNumber"
                        :creditCardOwner="Clients[0].wallets[0].creditCardOwner"
                        :expirationDate="Clients[0].wallets[0].expirationDate"
                        :securityCode="Clients[0].wallets[0].securityCode" 
                        />

                    <CheckoutShipmentBlock />

                    <div class="checkout-content-left-blocks-rows 
                    checkout-content-left-blocks-rows-hidden-order-summary">

                        <div class="checkout-content-left-blocks-rows-header">
                            <h5>Order Summary:</h5>
                        </div>

                        <div class="checkout-content-left-blocks-rows-content hidden-order-summary">

                            <div>
                                <p><label>Amount:</label> <label>(2) Items</label></p>
                            </div>
                            <div>
                                <p><label>Subtotal:</label> <label>$3,400.00</label></p>
                                <p><label>Shipment:</label> <label>$150.00</label></p>
                                <p><strong>Total:</strong> <strong> $3,400.00</strong></p>
                                <RouterLink to="" class="hidden-order-summary-creditcard-btn">Checkout</RouterLink>
                                <RouterLink to="" class="hidden-order-summary-paypal-btn">Paypal</RouterLink>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <OrderSummaryRightSidebar>

                <div><label>Amount:</label> <label>(2) Items</label></div>
                <div><label>Subtotal:</label> <label>$3,400.00</label></div>
                <div><label>Shipment:</label> <label>$150.00</label></div>
                <div><label>Descount:</label> <label>$100.00</label></div>
                <div class="total"><strong>Total:</strong> <strong>$3,400.00</strong></div>

                <RouterLink to="" class="order-summary-right-sidebar-creditcar-btn" >Checkout</RouterLink>
                <RouterLink to="" class="order-summary-right-sidebar-paypal-btn" >Paypal</RouterLink>

                <address>Al hacer clic en "Realizar pago", confirmo que he leído y acepto los
                    <RouterLink to="">Términos y Condiciones</RouterLink>.
                </address>

            </OrderSummaryRightSidebar>

        </div>

    </div>

</template>
<style>

.checkout-content{
    width: 80%;
    box-sizing: border-box;
    margin: 40px auto;

    display: flex;
    justify-content: space-between;
    align-self: flex-start;
}

/* ////////////////////////////////////////////////////// */
/* ///             checkout content left              /// */ 
/* ////////////////////////////////////////////////////// */
.checkout-content-left{
    width: 72%;
    box-sizing: border-box;
}
.checkout-content-left-blocks{
    width: 100%;
    box-sizing: border-box;
}

/* ////////////////////////////////////////////////////// */
/* ///          checkout content blocks order         /// */ 
/* ////////////////////////////////////////////////////// */
.checkout-content-left-blocks-rows-hidden-order-summary{
    display: none; /* this will change */
}

@media screen and (max-width: 834px) {

    .checkout-content{
        width: 85%;
        margin: 20px auto;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///             checkout content left              /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left{
        width: 100%;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///          checkout content blocks order         /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows-hidden-order-summary{
        display: block; /* this will change*/
    }

}

@media screen and (max-width: 414px) {
    
    .checkout-content{
        margin: 15px auto;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///             checkout content left              /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left{
        width: 100%;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///          checkout content blocks order         /// */ 
    /* ////////////////////////////////////////////////////// */
    .checkout-content-left-blocks-rows-hidden-order-summary{
        display: block; /* this will change*/
    }
}

</style>