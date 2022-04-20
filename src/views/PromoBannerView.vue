<script setup>

import { ref, onMounted } from 'vue';

const promotionSlider = ref(null);


onMounted(() => {

    setInterval(function(){

        let scroll_position = promotionSlider.value.offsetWidth;
        
        if(promotionSlider.value.scrollLeft == 0){
            promotionSlider.value.scrollTo(scroll_position, 0);
        } 
        else if(promotionSlider.value.scrollLeft == scroll_position){
            promotionSlider.value.scrollTo(scroll_position*2, 0);
        } else{
            promotionSlider.value.style.scrollBehavior = "initial";
            promotionSlider.value.scrollTo(0, 0);
            promotionSlider.value.style.scrollBehavior = "smooth";
        }
    
    }, 5000);

});

</script>
<template>
    <div class="promotion-banner">
        <div class="promotion-slider" ref="promotionSlider">
            <div class="promotion-slides">
                1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus beatae quaerat exercitationem.
            </div>
            <div class="promotion-slides">
                2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus beatae quaerat exercitationem.
            </div>
            <div class="promotion-slides">
                3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus beatae quaerat exercitationem.
            </div>
        </div>
    </div>
</template>
<style>


.promotion-banner{
    width: 100%;
    box-sizing: border-box;
    background-color: #333333;
    overflow:hidden;
}

.promotion-slider{
    width: 95%;
    box-sizing: border-box;
    margin: 10px auto;

    scroll-behavior: smooth;
    scrollbar-width: none;
    overflow-x: auto;

    display: flex;
    flex-wrap: nowrap;
    background-color: transparent;
}
.promotion-slider::-webkit-scrollbar{
	display: none;
}

.promotion-slides{
    width: 100%;
    box-sizing: border-box;

    flex-shrink: 0;
    text-align: center;

    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    background-color: transparent;
}

@media screen and (max-width: 834px) {

    .promotion-slides{
        font-size: 14px;
        line-height: 20px;
    }
}

@media screen and (max-width: 414px) {

    .promotion-slides{
        font-size: 12px;
    }
}


</style>