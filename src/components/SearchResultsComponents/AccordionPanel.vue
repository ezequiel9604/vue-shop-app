<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    title: String,
    icon: String
});

const isAccordionPanelOpen = ref(false);

const getAccordionPanelStatus = computed(() => {

    if (isAccordionPanelOpen.value)
        return "accordion-panel accordion-panel-open";

    return "accordion-panel";
})

const  changeAccordionPanelStatus = () => {
    isAccordionPanelOpen.value = !isAccordionPanelOpen.value;
}

</script>

<template>

    <button @click="changeAccordionPanelStatus" 
        class="header-hidden-menu-content-bottom-accordion-btn">
        <figure>
            <i :class="'bi ' + props.icon"></i>
            <p>{{ props.title }}</p>
        </figure>
        <i class="bi bi-caret-down-fill"></i>
    </button>
    <div :class="getAccordionPanelStatus" >
        <slot></slot>
    </div>

</template>

<style>

/* ////////////////////////////////////////////////////// */
/* ///                  accordion button              /// */ 
/* ////////////////////////////////////////////////////// */
.accordion-button{
    border: 1px solid #ffffff;
    background-color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.accordion-button figure{
    width: fit-content;
    display: flex;
    align-items: center;
}
.accordion-button figure p{
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 0 10px;
}

/* ////////////////////////////////////////////////////// */
/* ///                 accordion panel                /// */ 
/* ////////////////////////////////////////////////////// */
.accordion-panel{
    width: 80%;
    max-height: 0;
    
    margin: 10px auto;
    background-color: transparent;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    overflow: hidden;

    transition: max-height 0.3s ease-in-out;
}

.accordion-panel-open{
    max-height: 350px;
}

@media screen and (max-width: 414px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///                 accordion panel                /// */ 
    /* ////////////////////////////////////////////////////// */
    .accordion-panel{
        width: 70%;
    }

}

</style>