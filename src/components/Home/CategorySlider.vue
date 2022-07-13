<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Slides from './Slides.vue';

const departments = [
  { title: 'Clothing', color: 'gainsboro' },
  { title: 'Accessories', color: 'red' },
  { title: 'Shoes', color: 'green' },
  { title: 'Offices', color: 'blue' },
  { title: 'Home', color: 'purple' },
  { title: 'Technology', color: 'brown' }
];

const sliderTimer = ref(null);
const categorySlider = ref(null);
const sliderCounter = ref(0);

onMounted(() => {
  sliderTimer.value = setInterval(() => {
    if (categorySlider.value.scrollLeft === 0) {
      categorySlider.value.style.scrollBehavior = 'smooth';
      categorySlider.value.scrollTo(categorySlider.value.offsetWidth, 0);
      sliderCounter.value = 1;
    }
    else if (categorySlider.value.scrollLeft === categorySlider.value.offsetWidth) {
      categorySlider.value.scrollTo(categorySlider.value.offsetWidth * 2, 0);
      sliderCounter.value = 2;
    }
    else if (categorySlider.value.scrollLeft === (categorySlider.value.offsetWidth * 2)) {
      categorySlider.value.scrollTo(categorySlider.value.offsetWidth * 3, 0);
      sliderCounter.value = 3;
    }
    else if (categorySlider.value.scrollLeft === (categorySlider.value.offsetWidth * 3)) {
      categorySlider.value.scrollTo(categorySlider.value.offsetWidth * 4, 0);
      sliderCounter.value = 4;
    }
    else if (categorySlider.value.scrollLeft === (categorySlider.value.offsetWidth * 4)) {
      categorySlider.value.scrollTo(categorySlider.value.offsetWidth * 5, 0);
      sliderCounter.value = 5;
    }
    else {
      categorySlider.value.style.scrollBehavior = 'initial';
      categorySlider.value.scrollTo(0, 0);
    }
  }, 5000);
});

onUnmounted(() => {
  clearInterval(sliderTimer.value);
});

const handleLeftSliderButton = () => {
  if (categorySlider.value.scrollLeft > 0) {
    clearInterval(sliderTimer.value);
    categorySlider.value.style.scrollBehavior = 'smooth';
    sliderCounter.value--;
    categorySlider.value.scrollTo(categorySlider.value.offsetWidth * sliderCounter.value, 0);
  }
};

const handleRightSliderButton = () => {
  if (categorySlider.value.scrollLeft < (categorySlider.value.scrollWidth - categorySlider.value.offsetWidth)) {
    clearInterval(sliderTimer.value);
    categorySlider.value.style.scrollBehavior = 'smooth';
    sliderCounter.value++;
    categorySlider.value.scrollTo(categorySlider.value.offsetWidth * sliderCounter.value, 0);
  }
};

</script>
<template>

    <div class="category-slider-content">

        <button @click="handleLeftSliderButton" 
            class="category-slider-button category-slider-left-button" 
            ref="sliderLeftButton">
            <i class="bi bi-chevron-left"></i>
        </button>
        <button @click="handleRightSliderButton" 
            class="category-slider-button category-slider-right-button" 
            ref="sliderRightButton">
            <i class="bi bi-chevron-right"></i>
        </button>

        <div class="category-slider" ref="categorySlider" >

            <Slides v-for="d in departments" 
                :title="d.title" 
                :color="d.color" 
                :key="d.title" />

        </div>

    </div>

</template>
<style>

.category-slider-content{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;

    position: relative;
    z-index: 0;
}

.category-slider-button{
    background-color: transparent;
    border: 0;
    width: fit-content;
    padding: 0;

    position: absolute;
    top: 40%;
    z-index: 5;
}
.category-slider-button i{
    font-size: 50px;
    color: #ffffff;
}
.category-slider-button:nth-child(1){
    left: 3%;
}
.category-slider-button:nth-child(2){
    right: 3%;
}

.category-slider{
    width: 100%;
    height: fit-content;
    box-sizing: border-box;

    display: flex;
    scroll-behavior:smooth;
    scrollbar-width: none;
    overflow-x: auto;
}
.category-slider::-webkit-scrollbar{
    display: none;
}

@media screen and (max-width:834px) {

    .category-slider-button i{
        font-size: 40px;
    } 
}

@media screen and (max-width: 414px) {

    .category-slider-button i{
        font-size: 30px;
    }
    .category-slider-button:nth-child(1){
        left: 5%;
    }
    .category-slider-button:nth-child(2){
        right: 5%;
    }
}

</style>
