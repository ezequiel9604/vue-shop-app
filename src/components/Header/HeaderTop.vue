<script setup>
import { computed, reactive } from 'vue';
import { Logout, SubmitCharacteristics, Languages, Currancies, formatedLanguageCurrancy } from '../../services/Client';

const props = defineProps({ client: Object });

const state = reactive({
  language: props.client.language,
  currancy: props.client.currancy
});

const isClientLoggedIn = computed(() => {
  return props.client.id !== '00000';
});

const handleSubmitForm = async () => {
  await SubmitCharacteristics(
    props.client.id, state.language, state.currancy);
};

const handleLogout = async () => {
  await Logout(props.client.email);
};

</script>
<template>
    
    <div class="main-header-content-top">

        <div class="main-header-content-top-dropdowns">

            <li class="main-header-content-top-dropdowns-links language-link">
                <i class="bi bi-flag"></i>
                <p>{{formatedLanguageCurrancy(props.client.language, props.client.currancy)}}</p>

                <i class="bi bi-caret-down-fill"></i>

                <div class="main-header-content-top-dropdowns-content">

                    <div class="selection-language">
                        <label>Choose language:</label>
                        <select v-model="state.language" >
                            <option v-for="l in Languages" :selected="l == props.client.language" 
                                :key="l">{{ l }}</option>
                        </select>
                    </div>

                    <div class="selection-language">
                        <label>Choose currancy:</label>
                        <select v-model="state.currancy">
                            <option v-for="c in Currancies" :selected="c == props.client.currancy" 
                                :key="c">{{ c }}</option>
                        </select>
                    </div>

                    <div class="selection-language">
                        <button @click="handleSubmitForm">Save Changes</button>
                    </div>
                </div>

            </li>

            <li class="main-header-content-top-dropdowns-links account-link">
                <i class="bi bi-person"></i>
                <p>Account</p>
                <i class="bi bi-caret-down-fill"></i>

                <div class="main-header-content-top-dropdowns-content">
                    
                    <p v-if="isClientLoggedIn">Welcome 
                        <strong>{{ props.client.firstName+" "+props.client.lastName }}</strong></p>
                    <p v-else>Welcome to ShopApp</p>
                    
                    <div v-if="isClientLoggedIn" class="main-header-content-top-dropdowns-content-sign-btns">
                        <button @click="handleLogout" class="sign-btn sign-out-btn">Sign out</button>
                    </div>
                    <div v-else class="main-header-content-top-dropdowns-content-sign-btns">                      
                        <RouterLink to="/login" class="sign-btn">Log in</RouterLink>
                        <RouterLink to="/signup" class="sign-btn">Sign up</RouterLink>
                    </div>
                    
                    <RouterLink to="/myProfile" 
                        class="main-header-content-top-dropdowns-content-option-links">My profile</RouterLink>
                    <RouterLink to="/orders" 
                        class="main-header-content-top-dropdowns-content-option-links">My orders</RouterLink>
                    <RouterLink to="/chatCenter" 
                        class="main-header-content-top-dropdowns-content-option-links">Chat center</RouterLink>

                </div>
            </li>

        </div>
    </div>

</template>
<style>

.main-header-content-top {
    width: 95%;
    box-sizing: border-box;
    margin: 10px auto;

    display: flex;
    justify-content: right;
    align-items: right;
}

.main-header-content-top-dropdowns {
    width: fit-content;
    box-sizing: border-box;

    display: flex;
    align-items: center;
}

.account-link {
    border-left: 1px solid #dddddd;
}

.main-header-content-top-dropdowns-links {
    width: fit-content;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 5px;

    position: relative;
    cursor: default;
}

.main-header-content-top-dropdowns-links>i {
    font-size: 14px;
    padding: 0px 8px;
}

.main-header-content-top-dropdowns-links>p {
    font-family: "raleway-semibold", sans-serif;
    font-size: 13px;
}

.main-header-content-top-dropdowns-links:hover {
    box-shadow: 0px 1px 4px #dddddd;
    border-left: none;
}

.main-header-content-top-dropdowns-links:hover .main-header-content-top-dropdowns-content {
    display: block;
}

@keyframes main-header-content-top-dropdowns-content-animation {
    from {top: 140%; opacity: 0;}
    to {top: 100%;opacity: 1;}
}

.main-header-content-top-dropdowns-content {
    width: 220px;
    box-sizing: border-box;

    position: absolute;
    top: 140%;
    right: 0px;
    display: none;

    background-color: #ffffff;
    box-shadow: 0px 1px 4px #dddddd;
    opacity: 0;

    animation-name: main-header-content-top-dropdowns-content-animation;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    z-index: 10;
}

.bridge {
    width: 52%;
    height: 5px;
    background-color: #ffffff;

    position: absolute;
    top: -2%;
    right: 0;
}

.main-header-content-top-dropdowns-content p {
    width: 90%;
    box-sizing: border-box;
    margin: 0px auto;
    margin-top: 20px;
    font-family: "raleway-semibold", sans-serif;
    font-size: 12px;
    color: #666;
}

.main-header-content-top-dropdowns-content p strong {
    font-size: 14px;
    font-style: italic;
    color: #333333;
}

.selection-language{
    width: 85%;
    box-sizing: border-box;
    margin: 15px auto;
}
.selection-language label{
    display: block;
    margin-bottom: 5px;
    font-family: "raleway-regular", sans-serif;
    font-size: 12px;
    color: #333333;
}
.selection-language select{
    border: 1px solid #dddddd ;
    display: block;
    width: 100%;
    padding: 5px 0;
    font-family: "raleway-regular", sans-serif;
    font-size: 12px;
    color: #333333;
    border-radius: 4px;
}
.selection-language button{
    width: 100%;
    padding: 5px 0;
    font-family: "raleway-regular", sans-serif;
    font-size: 12px;
    color: #333333;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    border-radius: 4px;
}

.main-header-content-top-dropdowns-content-sign-btns {
    width: 85%;
    box-sizing: border-box;
    margin: 15px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main-header-content-top-dropdowns-content-sign-btns .sign-btn {
    border: 1px solid #dddddd;
    width: 45%;
    box-sizing: border-box;
    padding: 6px 0;

    text-align: center;
    font-family: "raleway-semibold", sans-serif;
    font-size: 12px;
    color: #333333;
    border-radius: 4px;
}

.main-header-content-top-dropdowns-content-sign-btns .sign-out-btn {
    border-color: #ff4d4d;
    background-color: #ff4d4d;
    color: #ffffff;
}

.main-header-content-top-dropdowns-content-option-links {
    width: 100%;
    box-sizing: border-box;
    display: block;

    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #333333;
    padding: 10px 0;
    padding-left: 20px;
    background-color: #fafafa;
}

.main-header-content-top-dropdowns-content-option-links:hover {
    background-color: #f1f1f1;
}

@media screen and (max-width: 834px) {

    .main-header-content-top {
        display: none;
    }

}

</style>
