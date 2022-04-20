<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    title: String,
    icon: String
});

const IsAccordionPanelOpen = ref(false);



const GetAccordionPanelStatus = computed(() => {

    if (IsAccordionPanelOpen.value)
        return "header-hidden-menu-content-bottom-accordion-panel accordion-panel-open";

    return "header-hidden-menu-content-bottom-accordion-panel";
})

const  ChangeAccordionPanelStatus = () => {
    IsAccordionPanelOpen.value = !IsAccordionPanelOpen.value;
}

</script>

<template>

    <button @click="ChangeAccordionPanelStatus" 
        class="header-hidden-menu-content-bottom-accordion-btn">
        <figure>
            <i :class="'bi ' + props.icon"></i>
            <p>{{ props.title }}</p>
        </figure>
        <i class="bi bi-caret-down-fill"></i>
    </button>
    <div :class="GetAccordionPanelStatus">
        <slot></slot>
    </div>

</template>

<style>
.header-hidden-menu-content-bottom-accordion-btn {
    border: 1px solid #ffffff;
    background-color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-hidden-menu-content-bottom-accordion-btn figure {
    width: fit-content;
    display: flex;
    align-items: center;
}

.header-hidden-menu-content-bottom-accordion-btn figure i {
    font-size: 16px;
    color: #333333;
}

.header-hidden-menu-content-bottom-accordion-btn figure p {
    font-family: "raleway-semibold", sans-serif;
    font-size: 12px;
    color: #333333;
    padding: 0 10px;
}

.header-hidden-menu-content-bottom-accordion-panel {
    width: 100%;
    box-sizing: border-box;
    max-height: 0;

    margin: 0px auto;
    margin-bottom: 10px;
    background-color: transparent;
    overflow: hidden;

    transition: max-height 0.3s ease-in-out;
}

.accordion-panel-open {
    max-height: 200px;
}
</style>