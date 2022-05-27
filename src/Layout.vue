<script setup>
import { RouterView } from "vue-router";
import { reactive, onMounted } from "vue";
import PromoBannerView from "./views/PromoBannerView.vue";
import HeaderView from "./views/HeaderView.vue";
import HeaderHiddenNavView from "./views/HeaderHiddenNavView.vue";
import FooterView from "./views/FooterView.vue";
import Clients from "./assets/data/Clients";


const getCurrentClient = () => {

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        return JSON.parse(localStorage.getItem("loggedClient"));
    }
    else if(JSON.parse(localStorage.getItem("guestClient"))){
        return JSON.parse(localStorage.getItem("guestClient"));
    }
    else{
        localStorage.setItem("guestClient", JSON.stringify({   
            id: "00000",
            characteristics:{
                language: "SPANISH",
                appearance: "light",
                currancy: "USA / DOLLARS"
            }
        }));

        return JSON.parse(localStorage.getItem("guestClient"));
    }

}

const state = reactive({
    client: getCurrentClient(),
    isHeaderHiddenNavOpen: false
})


onMounted(()=>{

    //localStorage.setItem("loggedClient", JSON.stringify(Clients[0]));

});

const changeHeaderHiddenNavStatus = () => {
    state.isHeaderHiddenNavOpen = !state.isHeaderHiddenNavOpen;
}

</script>
<template>

    <div>
        <HeaderHiddenNavView 
            :client="state.client" 
            :onHeaderHiddenNavStatus="state.isHeaderHiddenNavOpen"
            :onChangeHeaderHiddenNavStatus="changeHeaderHiddenNavStatus" 
            />

        <PromoBannerView />
        <HeaderView 
            :client="state.client"
            :onChangeHeaderHiddenNavStatus="changeHeaderHiddenNavStatus" 
            />

        <main>
            <RouterView :clientid="state.client.id" />
        </main>

        <FooterView />

    </div>

</template>
<style>
</style>