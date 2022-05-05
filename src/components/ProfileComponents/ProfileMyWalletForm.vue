<script setup>

</script>
<template>
    <div>
        <div class="payment-credit-card-content">

            <div class="payment-credit-card-content-front">
                <input type="text" placeholder="0000-0000-0000-0000" readonly />
                <input type="text" placeholder="SARAH SMITH DOE" readonly />
                <input type="text" placeholder="00/0000" readonly />
            </div>
            <div class="payment-credit-card-content-back">
                <article></article>
                <article></article>

                <input type="text" placeholder="000" readonly />
            </div>

        </div>
        <div class="right-my-profile-content-form-myWallet-content">

            <div class="right-my-profile-content-form-single-box">
                <h6>Credit card number:</h6>
                <input type="text" />
            </div>
            <div class="right-my-profile-content-form-single-box">
                <h6>Credit card owner number:</h6>
                <input type="text" />
            </div>
            <div class="right-my-profile-content-form-single-box">
                <h6>Experation date:</h6>
                <input type="text" />
            </div>
            <div class="right-my-profile-content-form-single-box">
                <h6>Security code:</h6>
                <input type="text" />
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

/* ////////////////////////////////////////////////////// */
/* ///             payment credit card content        /// */
/* ////////////////////////////////////////////////////// */
.payment-credit-card-content {
    width: 90%;
    margin: 10px 0;
    margin-bottom: 40px;
}

@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///             payment credit card content        /// */
    /* ////////////////////////////////////////////////////// */
    .payment-credit-card-content {
        width: 90%;
        margin: 10px auto;
        margin-bottom: 30px;
    }

}

@media screen and (max-width: 414px) {
    
    

}


</style>