<script setup>
import { reactive } from 'vue';
import { submitWalletInformation } from '../../services/Client';

const props = defineProps({
    clientId: String,
    creditCardNumber: String,
    creditCardOwner: String,
    expirationDate: String,
    securityCode: String
});

const state = reactive({
    ccnumber: props.creditCardNumber,
    ccowner: props.creditCardOwner,
    expdate: props.expirationDate,
    cvv: props.securityCode 
});

const handleSubmitForm = () => {
    submitWalletInformation(props.clientId, state.ccnumber, state.ccowner, 
        state.expdate, state.cvv);
}

</script>
<template>
    <div>
        <div class="payment-credit-card-content">

            <div class="payment-credit-card-content-front">
                <input type="text" placeholder="0000-0000-0000-0000" :value="state.ccnumber" readonly />
                <input type="text" placeholder="SARAH SMITH DOE" :value="state.ccowner" readonly />
                <input type="text" placeholder="00/0000" :value="state.expdate" readonly />
            </div>
            <div class="payment-credit-card-content-back">
                <article></article>
                <article></article>
                <input type="text" placeholder="000" :value="state.cvv" readonly />
            </div>

        </div>
        <div class="right-my-profile-content-form-myWallet-content">

            <div class="right-my-profile-content-form-single-box">
                <h6>Credit card number:</h6>
                <input type="text" v-model="state.ccnumber" />
            </div>
            <div class="right-my-profile-content-form-single-box">
                <h6>Credit card owner number:</h6>
                <input type="text" v-model="state.ccowner" />
            </div>
            <div class="right-my-profile-content-form-single-box">
                <h6>Experation date:</h6>
                <input type="text" v-model="state.expdate" />
            </div>
            <div class="right-my-profile-content-form-single-box">
                <h6>Security code:</h6>
                <input type="text" v-model="state.cvv" />
            </div>
            <div class="right-my-profile-content-form-button-box">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam neque vero sequi culpa nulla quis magnam sunt voluptatibus perspiciatis,
                    ex rem error omnis ea? Quisquam itaque impedit facilis! Commodi, facere.</p>

                <button>Save changes</button>

            </div>
        </div>
    </div>
</template>
<style>

.payment-credit-card-content {
    width: 90%;
    margin: 10px 0;
    margin-bottom: 40px;
}

@media screen and (max-width: 834px) {
    
    .payment-credit-card-content {
        width: 90%;
        margin: 10px auto;
        margin-bottom: 30px;
    }

}

</style>