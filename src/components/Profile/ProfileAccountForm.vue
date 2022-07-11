<script setup>
import { reactive } from 'vue';
import { SubmitAccountInfo, SubmitDeleteAccount } from '../../services/Client';

const props = defineProps({
  clientId: String,
  email: String
});

const state = reactive({
  email: props.email,
  password: 'password123',
  repeatedPassword: 'password123'
});

const handleSubmitForm = async () => {
  await SubmitAccountInfo(props.clientId, state.email, state.password);
};

const handleDeleteAccount = async () => {
  // add confirm code
  const res = await SubmitDeleteAccount(state.email);
  //console.log(res);
};

</script>
<template>

    <div class="right-my-profile-content-form-accountInfo-content">

        <div class="right-my-profile-content-form-single-box">
            <h6>Email address:</h6>
            <input type="text" v-model="state.email" />
        </div>
        <div class="right-my-profile-content-form-single-box">
            <h6>Password:</h6>
            <input type="password" v-model="state.password" />
        </div>
        <div class="right-my-profile-content-form-single-box">
            <h6>Repeat password:</h6>
            <input type="password" v-model="state.repeatedPassword" />
        </div>
        <div class="right-my-profile-content-form-button-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam neque vero sequi culpa nulla quis magnam sunt voluptatibus perspiciatis,
                ex rem error omnis ea? Quisquam itaque impedit facilis! Commodi, facere.</p>

            <button @click="handleSubmitForm">Save changes</button>
        </div>
        <div class="right-my-profile-content-form-inverse-button-box">
            
            <button @click="handleDeleteAccount">Delete account</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam neque vero sequi culpa nulla quis magnam sunt voluptatibus perspiciatis,
                ex rem error.</p>
        </div>
    </div>

</template>
<style>
</style>
