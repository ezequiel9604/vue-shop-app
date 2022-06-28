<script setup>
import { reactive } from 'vue';
import { SubmitAppearence } from '../../services/Client';

const props = defineProps({
    clientId: String,
    appearance: String,
    onChangeSelectedProfileForm: Function
});

const state = reactive({
    appearance: props.appearance
})

const changeAppearance = async () => {

    if(state.appearance == "light"){
        state.appearance = "dark";
        await SubmitAppearence(state.appearance);
    }
    else{
        state.appearance = "light";
        await SubmitAppearence(state.appearance);
    }
}

</script>
<template>

    <ul class="left-my-profile-content-sidebar">
        <button @click="() => onChangeSelectedProfileForm(0)" class="left-my-profile-content-sidebar-links">
            <p><i class="bi bi-person"></i><strong>Personal Information</strong></p>
            <p><i class="bi bi-chevron-right"></i></p>
        </button>
        <button @click="() => onChangeSelectedProfileForm(1)" class="left-my-profile-content-sidebar-links">
            <p><i class="bi bi-info-circle"></i><strong>Account Information</strong></p>
            <p><i class="bi bi-chevron-right"></i></p>
        </button>
        <button @click="() => onChangeSelectedProfileForm(2)" class="left-my-profile-content-sidebar-links">
            <p><i class="bi bi-credit-card"></i><strong>My Wallet</strong></p>
            <p><i class="bi bi-chevron-right"></i></p>
        </button>
        <li class="left-my-profile-content-sidebar-links">
            <p><i class="bi bi-palette"></i><strong>Appearance</strong></p>
            <p>
                <label class="left-my-profile-content-sidebar-toggle">
                    <input type="checkbox" @change="changeAppearance" :checked="props.appearance == 'dark'" />
                    <span class="left-my-profile-content-sidebar-toggle-slider"></span>
                </label>
            </p>
        </li>
    </ul>

</template>
<style>

.left-my-profile-content-sidebar{
    border: 1px solid #dddddd;
    width: 100%;
    box-sizing: border-box;
    padding: 4px 0;
    background-color: #ffffff;
    border-radius: 6px;
}
.left-my-profile-content-sidebar-links{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: #ffffff;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #dddddd;
}
.left-my-profile-content-sidebar-links:last-child{
    border-bottom-color:transparent;
}

.left-my-profile-content-sidebar-links p{
    width: fit-content;
    box-sizing: border-box;
    padding: 14px 10px;
}
.left-my-profile-content-sidebar-links p i{
    font-size: 18px;
    color: #333333;
    margin-right: 10px;
}
.left-my-profile-content-sidebar-links p strong{
    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
}

.left-my-profile-content-sidebar-toggle{
    box-sizing: border-box;
    display: inline-block;
    width: 60px;
    height: 25px;
    padding: 4px;

    position: relative;

    border: none;
    background-color: #dddddd;
    border-radius: 25px;
    cursor: pointer;
}
.left-my-profile-content-sidebar-toggle input{
    opacity: 0;
    width: 0;
    height: 0;
}
.left-my-profile-content-sidebar-toggle-slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #dddddd;
    border-radius: 25px;
    -webkit-transition: .4s;
    transition: .4s;
}
.left-my-profile-content-sidebar-toggle-slider::before{
    position: absolute;
    content: "";
    width: 40%;
    height: 68%;
    top: 4px;
    left: 6px;
    background-color: #ffffff;
    border-radius: 25px;
    -webkit-transition: .4s;
    transition: .4s;
}
.left-my-profile-content-sidebar-toggle input:checked +
.left-my-profile-content-sidebar-toggle-slider{
    background-color: #0099ff;
}
.left-my-profile-content-sidebar-toggle input:checked +
.left-my-profile-content-sidebar-toggle-slider:before{
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
}

</style>