<script setup>
import { ref } from 'vue';
import LeftProfileContentSidebar from '../components/Profile/LeftProfileContentSidebar.vue';
import RightProfileContentSidebar from '../components/Profile/RightProfileContentSidebar.vue';
import ProfilePersonalForm from '../components/Profile/ProfilePersonalForm.vue';
import ProfileAccountForm from '../components/Profile/ProfileAccountForm.vue';
import ProfileMyWalletForm from '../components/Profile/ProfileMyWalletForm.vue';

const props = defineProps({ client: Object });

const selectedProfileForm = ref(0);

const changeSelectedProfileForm = (value) => {
  selectedProfileForm.value = value;
};

</script>
<template>

    <div class="sections">

        <div class="my-profile-content">

            <div class="left-my-profile-content">

                <LeftProfileContentSidebar 
                    :clientId="props.client.id"
                    :appearance="props.client.appearance"
                    :onChangeSelectedProfileForm="changeSelectedProfileForm" />

            </div>

            <div class="right-my-profile-content">

                <RightProfileContentSidebar :onChangeSelectedProfileForm="changeSelectedProfileForm" />

                <div v-if="selectedProfileForm === 0" class="right-my-profile-content-form">
                    <ProfilePersonalForm 
                        :clientId="props.client.id"
                        :firstname="props.client.firstName"
                        :lastname="props.client.lastName"
                        :image="props.client.imagePath" 
                        :firstphone="props.client.phoneDtos[0]? props.client.phoneDtos[0].phoneNumber:''"
                        :secondphone="props.client.phoneDtos[1]? props.client.phoneDtos[1].phoneNumber:''"
                        :dateofbirth="new Date(props.client.yearOfBirth, props.client.monthOfBirth,
                            props.client.dayOfBirth)" 
                        :genre="props.client.genre"
                        :address="props.client.addressDtos[0]? props.client.addressDtos[0]:{}" 
                        />
                </div>

                <div v-else-if="selectedProfileForm === 1" class="right-my-profile-content-form-accountInfo">
                    <ProfileAccountForm 
                        :clientId="props.client.id"
                        :email="props.client.email" 
                        />
                </div>

                <div v-else-if="selectedProfileForm === 2" class="right-my-profile-content-form-myWallet">
                    <ProfileMyWalletForm
                        :clientId="props.client.id"
                        :creditCardNumber="props.client.wallets[0].creditCardNumber"
                        :creditCardOwner="props.client.wallets[0].creditCardOwner"
                        :expirationDate="props.client.wallets[0].expirationDate"
                        :securityCode="props.client.wallets[0].securityCode" 
                        />
                </div>

            </div>

        </div>

    </div>

</template>
<style>
.my-profile-content {
    width: 80%;
    box-sizing: border-box;
    margin: 60px auto;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.left-my-profile-content {
    width: 27%;
    box-sizing: border-box;
}

.right-my-profile-content {
    width: 68%;
    box-sizing: border-box;
}

.right-my-profile-content-form,
.right-my-profile-content-form-accountInfo,
.right-my-profile-content-form-myWallet {
    width: 100%;
    box-sizing: border-box;
}

.right-my-profile-content-form-content,
.right-my-profile-content-form-accountInfo-content,
.right-my-profile-content-form-myWallet-content {
    width: 90%;
    box-sizing: border-box;
}

.right-my-profile-content-form-single-box,
.right-my-profile-content-form-double-box,
.right-my-profile-content-form-triple-box,
.right-my-profile-content-form-mix-box,
.right-my-profile-content-form-button-box {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 30px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.right-my-profile-content-form-single-box h6,
.right-my-profile-content-form-double-box h6,
.right-my-profile-content-form-triple-box h6,
.right-my-profile-content-form-mix-box h6,
.right-my-profile-content-form-radio-box h6 {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    color: #333333;
}

.right-my-profile-content-form-single-box input,
.right-my-profile-content-form-double-box input,
.right-my-profile-content-form-triple-box select,
.right-my-profile-content-form-mix-box select,
.right-my-profile-content-form-mix-box input {
    display: block;
    margin-top: 10px;
    box-sizing: border-box;
    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;

    padding: 4px 10px;
    border: 1px solid #f3f3f3;
    background-color: #f3f3f3;
    border-radius: 4px;
}

.right-my-profile-content-form-single-box input {
    width: 100%;
}
.right-my-profile-content-form-double-box input {
    width: 49%;
}
.right-my-profile-content-form-triple-box select {
    width: 32%;
}
.right-my-profile-content-form-mix-box select {
    width: 38%;
}
.right-my-profile-content-form-radio-box label {
    width: fit-content;
    display: inline-flex;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
    margin-top: 10px;
    margin-right: 4%;
}

.right-my-profile-content-form-button-box {
    display: block;
    margin-top: 40px;
}

.right-my-profile-content-form-button-box p {
    width: 70%;
    box-sizing: border-box;

    text-align: justify;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #333333;
    line-height: 16px;
}

.right-my-profile-content-form-button-box button {
    width: fit-content;
    display: flex;
    box-sizing: border-box;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 20px;
    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    color: #333333;

    cursor: pointer;
    border: 1px solid #dddddd;
    border-radius: 6px;
    background-color: #f3f3f3;
}

.right-my-profile-content-form-inverse-button-box {
    display: block;
    margin-top: 100px;
    position: relative;
}

.right-my-profile-content-form-inverse-button-box p {
    direction: rtl;
    width: 70%;
    box-sizing: border-box;

    margin-left: auto;
    margin-right: 0;

    text-align: justify;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #333333;
    line-height: 16px;
}

.right-my-profile-content-form-inverse-button-box button {
    width: fit-content;
    display: flex;
    box-sizing: border-box;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 20px;
    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    color: tomato;

    cursor: pointer;
    border: 1px solid tomato;
    border-radius: 6px;
    background-color: #f3f3f3f3;
}

@media screen and (max-width: 834px) {

    .left-my-profile-content {
        display: none;
    }

    .right-my-profile-content {
        width: 100%;
    }

    .right-my-profile-content-form-single-box h6,
    .right-my-profile-content-form-double-box h6,
    .right-my-profile-content-form-triple-box h6,
    .right-my-profile-content-form-mix-box h6,
    .right-my-profile-content-form-radio-box h6 {
        font-size: 14px;
    }

    .right-my-profile-content-form-single-box input,
    .right-my-profile-content-form-double-box input,
    .right-my-profile-content-form-triple-box select,
    .right-my-profile-content-form-mix-box select,
    .right-my-profile-content-form-mix-box input {
        margin-top: 10px;
        font-size: 14px;

        padding: 4px 10px;
    }

    .right-my-profile-content-form-single-box input {
        width: 100%;
    }

    .right-my-profile-content-form-double-box input {
        width: 49%;
    }

    .right-my-profile-content-form-triple-box select {
        width: 32%;
    }

    .right-my-profile-content-form-mix-box select {
        width: 38%;
    }

    .right-my-profile-content-form-radio-box label {
        font-size: 14px;
    }

    .right-my-profile-content-form-button-box {
        margin-top: 30px;
    }

    .right-my-profile-content-form-button-box p {
        width: 70%;
        font-size: 12px;
        line-height: 16px;
    }

    .right-my-profile-content-form-button-box button {
        margin-top: 10px;
        font-size: 14px;
        padding: 6px 10px;
    }

    .right-my-profile-content-form-inverse-button-box {
        margin-top: 80px;
    }

    .right-my-profile-content-form-inverse-button-box p {
        direction: rtl;
        width: 70%;
        font-size: 12px;
        line-height: 16px;
    }

    .right-my-profile-content-form-inverse-button-box button {
        margin-bottom: 10px;
        padding: 6px 10px;
        font-size: 14px;
    }

}

@media screen and (max-width: 414px) {

    .right-my-profile-content-form-content,
    .right-my-profile-content-form-accountInfo-content,
    .right-my-profile-content-form-myWallet-content {
        width: 95%;
        margin: 0 auto;
    }

    .right-my-profile-content-form-single-box,
    .right-my-profile-content-form-double-box,
    .right-my-profile-content-form-triple-box,
    .right-my-profile-content-form-mix-box,
    .right-my-profile-content-form-button-box {
        margin-bottom: 20px;
    }

    .right-my-profile-content-form-single-box h6,
    .right-my-profile-content-form-double-box h6,
    .right-my-profile-content-form-triple-box h6,
    .right-my-profile-content-form-mix-box h6,
    .right-my-profile-content-form-radio-box h6 {
        font-size: 13px;
    }

    .right-my-profile-content-form-single-box input,
    .right-my-profile-content-form-double-box input,
    .right-my-profile-content-form-triple-box select,
    .right-my-profile-content-form-mix-box select,
    .right-my-profile-content-form-mix-box input {
        margin-top: 10px;
        font-size: 12px;
        padding: 4px 10px;
    }

    .right-my-profile-content-form-single-box input {
        width: 100%;
    }

    .right-my-profile-content-form-double-box input {
        width: 49%;
    }

    .right-my-profile-content-form-triple-box select {
        width: 32%;
    }

    .right-my-profile-content-form-mix-box select {
        width: 38%;
    }

    .right-my-profile-content-form-radio-box label {
        font-size: 13px;
    }

    .right-my-profile-content-form-button-box {
        margin-top: 30px;
    }

    .right-my-profile-content-form-button-box p {
        width: 99%;
        font-size: 11px;
        line-height: 14px;
    }

    .right-my-profile-content-form-button-box button {
        margin-top: 10px;
        font-size: 13px;
        padding: 4px 10px;
    }

    .right-my-profile-content-form-inverse-button-box {
        margin-top: 60px;
    }

    .right-my-profile-content-form-inverse-button-box p {
        width: 99%;
        font-size: 11px;
        line-height: 14px;
    }

    .right-my-profile-content-form-inverse-button-box button {
        margin-bottom: 10px;
        padding: 4px 10px;
        font-size: 13px;
    }

}
</style>
