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
});

const  changeAccordionPanelStatus = () => {
    isAccordionPanelOpen.value = !isAccordionPanelOpen.value;
}

</script>

<template>

    <button @click="changeAccordionPanelStatus" class="accordion-button">
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
.accordion-button i {
    font-size: 16px;
    color: #333333;
}
.accordion-button figure p{
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 0 10px;
}
.accordion-btn figure i {
    font-size: 16px;
    color: #333333;
}

/* ////////////////////////////////////////////////////// */
/* ///                 accordion panel                /// */ 
/* ////////////////////////////////////////////////////// */
.accordion-panel{
    width: 90%;
    box-sizing: border-box;
    max-height: 0;
    
    margin: 0px auto;
    margin-bottom: 10px;
    background-color: transparent;
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
        width: 80%;
    }

    .accordion-button i {
        font-size: 14px;
    }
    .accordion-button figure p{
        font-size: 12px;
        padding: 0 8px;
    }
    .accordion-btn figure i {
        font-size: 16px;
    }

}

</style>