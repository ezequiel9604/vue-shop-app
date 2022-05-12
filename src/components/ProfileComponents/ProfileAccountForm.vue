<script setup>

const props = defineProps({
    email: String,
});

</script>
<template>

    <div class="right-my-profile-content-form-accountInfo-content">

        <div class="right-my-profile-content-form-single-box">
            <h6>Email address:</h6>
            <input type="text" :value="props.email" />
        </div>
        <div class="right-my-profile-content-form-single-box">
            <h6>Password:</h6>
            <input type="password" value="thisisapassword" />
        </div>
        <div class="right-my-profile-content-form-single-box">
            <h6>Repeat password:</h6>
            <input type="password" value="thisisapassword" />
        </div>
        <div class="right-my-profile-content-form-button-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam neque vero sequi culpa nulla quis magnam sunt voluptatibus perspiciatis,
                ex rem error omnis ea? Quisquam itaque impedit facilis! Commodi, facere.</p>

            <button>Save changes</button>
        </div>
        <div class="right-my-profile-content-form-inverse-button-box">
            <button>Delete account</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam neque vero sequi culpa nulla quis magnam sunt voluptatibus perspiciatis,
                ex rem error.</p>
        </div>
    </div>

</template>
<style>
</style>