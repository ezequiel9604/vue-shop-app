<script setup>
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';
import AccordionPanel from '../components/HeaderHiddenNav/AccordionPanel.vue';
import { Departments, submitAllCharacteristics } from '../services/Client';

const props = defineProps({
    client: Object,
    onHeaderHiddenNavOpen: Boolean,
    onChangeHeaderHiddenNav: Function,
});

const state = reactive({
    isClientLoggedIn: props.client != null? true : false,
    language: (props.client != null)? props.client.characteristics.language : "english",
    currancy: (props.client != null)? props.client.characteristics.curranty : "dollar",
})


const changeLanguageInput = (ev) => {
    languageInput.value = ev.target.value;
}
const changeCurrancyInput = (ev) => {
    currancyInput.value = ev.target.value;
}

const handleSubmitForm = () => {
   submitAllCharacteristics(props.client.id, state.language, state.currancy);
}

</script>
<template>

    <div class="header-hidden-menu" :style="{ display: props.onHeaderHiddenNavStatus ? 'block' : 'none' }">

        <div class="header-hidden-menu-content">

            <div class="header-hidden-menu-content-top">
                <button @click="props.onChangeHeaderHiddenNavStatus">
                    <i class="bi bi-x"></i>
                </button>
            </div>

            <div class="header-hidden-menu-content-bottom">

                <AccordionPanel title="Account" icon="bi-person">
                    <p v-if="state.isClientLoggedIn">Welcome <strong>{{ props.client.name }}</strong></p>
                    <p v-else>Welcome to ShopApp</p>

                    <div v-if="state.isClientLoggedIn" class="main-header-content-top-dropdowns-content-sign-btns">
                        <RouterLink to="" class="sign-btn sign-out-btn">Sign out</RouterLink>
                    </div>
                    <div v-else class="main-header-content-top-dropdowns-content-sign-btns">
                        <RouterLink to="/login" class="sign-btn">Log in</RouterLink>
                        <RouterLink to="/signup" class="sign-btn">Sign up</RouterLink>
                    </div>
                    <RouterLink to="/myProfile" class="header-hidden-menu-content-bottom-accordion-panel-links">My
                        Profile</RouterLink>
                    <RouterLink to="/orders" class="header-hidden-menu-content-bottom-accordion-panel-links">My Orders
                    </RouterLink>
                    <RouterLink to="/chatCenter" class="header-hidden-menu-content-bottom-accordion-panel-links">Help
                        Center</RouterLink>

                </AccordionPanel>

                <AccordionPanel title="English / Dollar" icon="bi-flag">
                    <div class="selection-language">
                        <label>Choose language:</label>
                        <select @change="changeLanguageInput" v-if="state.language == 'english'">
                            <option value="english" selected>English</option>
                            <option value="spanish">Spanish</option>
                        </select>
                        <select @change="changeLanguageInput" v-else>
                            <option value="english">English</option>
                            <option value="spanish" selected>Spanish</option>
                        </select>
                    </div>

                    <div class="selection-language">
                        <label>Choose currancy:</label>
                        <select @change="changeCurrancyInput" v-if="state.currancy == 'dollar'">
                            <option value="dollar" selected>USA / Dollar</option>
                            <option value="pesos">DOM / Pesos</option>
                        </select>
                        <select @change="changeCurrancyInput" v-else>
                            <option value="dollar">USA / Dollar</option>
                            <option value="pesos" selected>DOM / Pesos</option>
                        </select>
                    </div>
                    <div class="accordion-language">
                        <button @click="handleSubmitForm">Save Changes</button>
                    </div>
                </AccordionPanel>

                <AccordionPanel title="Categories" icon="bi-list">

                    <RouterLink v-for="d in Departments" to="" :key="d"
                        class="header-hidden-menu-content-bottom-accordion-panel-links">{{ d }}</RouterLink>

                </AccordionPanel>

            </div>

        </div>

    </div>

</template>
<style>

.header-hidden-menu {
    width: 100%;
    height: 100%;
    position: fixed;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 80;
    display: none;
    /* this will change  */
}

@keyframes header-hidden-menu-content-animation {
    from {
        left: -50%;
    }

    to {
        left: 0;
    }
}

.header-hidden-menu-content {
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    background-color: #ffffff;

    overflow: hidden;
    position: relative;
    top: 0;
    left: -50%;
    z-index: 90;

    animation-name: header-hidden-menu-content-animation;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
}

.header-hidden-menu-content-top {
    width: 90%;
    box-sizing: border-box;
    margin: 20px auto;
    padding-bottom: 10px;

    display: flex;
    justify-content: right;
    border-bottom: 1px solid #dddddd;
}

.header-hidden-menu-content-top button {
    border: none;
    background-color: #ffffff;
    display: flex;
    justify-content: center;

    padding: 10px 13px;
    border-radius: 50%;
    font-size: 20px;
}

.header-hidden-menu-content-bottom {
    width: 90%;
    box-sizing: border-box;
    margin: 20px auto;
}

.accordion-panel p {
    width: 90%;
    box-sizing: border-box;
    margin: 20px auto;
    padding-left: 10px;
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    color: #333333;
}

.accordion-panel p strong {
    font-size: 14px;
    font-style: italic;
    color: #333333;
}

.header-hidden-menu-content-bottom-accordion-panel-sign-btn {
    width: 85%;
    margin: 15px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-hidden-menu-content-bottom-accordion-panel-sign-btn .sign-btn {
    border: 1px solid #dddddd;
    width: 45%;
    box-sizing: border-box;
    padding: 6px 0;

    text-align: center;
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    color: #333333;
    border-radius: 3px;
}

.header-hidden-menu-content-bottom-accordion-panel-sign-btn .sign-out-btn {
    border-color: #ff4d4d;
    background-color: #ff4d4d;
    color: #ffffff;
}

.header-hidden-menu-content-bottom-accordion-panel-links {
    width: 95%;
    margin: 0 auto;
    box-sizing: border-box;
    display: block;

    font-family: "raleway-medium", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 10px 0;
    padding-left: 20px;
    background-color: #fafafa;
}

.header-hidden-menu-content-bottom-accordion-panel-links:hover {
    background-color: #f1f1f1;
}

.accordion-language {
    width: 80%;
    box-sizing: border-box;
    margin: 15px auto;
}

.accordion-language label {
    display: block;
    margin-bottom: 5px;
    font-family: "raleway-medium", sans-serif;
    font-size: 12px;
    color: #333333;
}

.accordion-language select {
    border: 1px solid #dddddd;
    display: block;
    width: 100%;
    padding: 5px 0;
    font-family: "raleway-medium", sans-serif;
    font-size: 12px;
    color: #333333;
    border-radius: 2px;
}

.accordion-language button {
    width: 100%;
    padding: 5px 0;
    font-family: "raleway-medium", sans-serif;
    font-size: 12px;
    color: #333333;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    border-radius: 3px;
}

@media screen and (max-width: 834px) {

    .header-hidden-menu {
        display: flex;
    }
}

@media screen and (max-width: 414px) {

    @keyframes header-hidden-menu-content-animation {
        from {
            left: -75%;
        }

        to {
            left: 0;
        }
    }

    .header-hidden-menu-content {
        width: 75%;
        left: -75%;
    }

    .accordion-panel p {
        width: 90%;
        margin: 15x auto;
        padding-left: 10px;
        font-size: 12px;
    }

    .accordion-panel p strong {
        font-size: 12px;
    }

    .header-hidden-menu-content-bottom-accordion-panel-sign-btn .sign-btn {
        width: 45%;
        padding: 4px 0;
        font-size: 12px;
    }

    .header-hidden-menu-content-bottom-accordion-panel-links {
        width: 100%;
        font-size: 12px;
        padding: 10px 0;
        padding-left: 15px;
    }

    .accordion-language {
        width: 100%;
        margin: 10px auto;
    }

    .accordion-language label {
        margin-bottom: 5px;
        font-size: 12px;
    }

    .accordion-language select {
        padding: 5px 0;
        font-size: 11px;
    }

    .accordion-language button {
        padding: 5px 0;
        font-size: 11px;
    }

}

</style>