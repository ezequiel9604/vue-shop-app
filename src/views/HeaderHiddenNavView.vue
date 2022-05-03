<script setup>
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';
import AccordionPanel from '../components/HeaderHiddenNavComponents/AccordionPanel.vue';

const props = defineProps({
    onHeaderHiddenNavStatus: Boolean,
    onChangeHeaderHiddenNavStatus: Function
});

const departments = [
    "clothing", "Accessories", "Shoes", "Offices", "Home", "Technology"
];

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
                    <p>Welcome to ShopApp</p>
                    <!-- <p>Welcome back <strong>John Doe</strong></p> -->
                    <div class="header-hidden-menu-content-bottom-accordion-panel-sign-btn">

                        <RouterLink to="" class="sign-btn">Log in</RouterLink>
                        <RouterLink to="" class="sign-btn">Sign up</RouterLink>
                        <!-- <RouterLink to="/signout" class="sign-btn sign-out-btn">Sign out</RouterLink> -->
                    </div>
                    <RouterLink to="" class="header-hidden-menu-content-bottom-accordion-panel-links">My Profile
                    </RouterLink>
                    <RouterLink to="" class="header-hidden-menu-content-bottom-accordion-panel-links">My Orders
                    </RouterLink>
                    <RouterLink to="" class="header-hidden-menu-content-bottom-accordion-panel-links">Help
                        Center</RouterLink>

                </AccordionPanel>

                <AccordionPanel title="English / Dollar" icon="bi-flag">
                    <div class="accordion-language">
                        <label>Choose language:</label>
                        <select>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                        </select>
                    </div>
                    <div class="accordion-language">
                        <label>Choose currancy:</label>
                        <select>
                            <option value="dollar">USA / Dollar</option>
                            <option value="dom">DOM / Pesos</option>
                        </select>
                    </div>
                    <div class="accordion-language">
                        <button>Save Changes</button>
                    </div>
                </AccordionPanel>

                <AccordionPanel title="Categories" icon="bi-list">

                    <RouterLink v-for="d in departments" :to="'/' + d.toLowerCase()" :key="d"
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
    display: none; /* this will change  */
}

/* ////////////////////////////////////////////////////// */
/* ///            header hidden menu content          /// */
/* ////////////////////////////////////////////////////// */
@keyframes header-hidden-menu-content-animation {
    from {left: -50%;}
    to {left: 0;}
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

/* ////////////////////////////////////////////////////// */
/* ///           header hidden menu content top       /// */
/* ////////////////////////////////////////////////////// */
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

/* ////////////////////////////////////////////////////// */
/* ///       header hidden menu content bottom        /// */
/* ////////////////////////////////////////////////////// */
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
        from {left: -75%;}
        to {left: 0;}
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