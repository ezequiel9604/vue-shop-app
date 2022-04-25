<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    color: String
});

</script>

<template>

    <div class="category-slides" :style="{ backgroundColor : props.color }">
        <div class="category-slides-links-content">
            <RouterLink to="/clothing" class="category-slides-content-links">
                {{ "Buy "+props.title }}
            </RouterLink>
            <span class="category-slides-content-bkg"></span>
        </div>
    </div>

</template>

<style>


/* ////////////////////////////////////////////////////// */
/* ///               category slides                  /// */ 
/* ////////////////////////////////////////////////////// */
.category-slides{
    width: 100%;
    height: 450px;
    box-sizing: border-box;
    flex-shrink: 0;

    position: relative;
}

/* ////////////////////////////////////////////////////// */
/* ///            category slides links               /// */ 
/* ////////////////////////////////////////////////////// */
.category-slides-links-content{
    width: 160px;
    height: 50px;
    box-sizing: border-box;

    background-color: #333333;
    border-radius: 4px;

    overflow: hidden;

    position: absolute;
    bottom: 10%;
    left: 10%;
    z-index: 10;
}
.category-slides-content-links{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    color: #ffffff;

    background-color: transparent;
    z-index: 12;
    transition: color 0.2s ease-in-out;
}
.category-slides-content-bkg{
    display: block;
    width: 0%;
    height: 100%;

    background-color: #ffffff;

    position:absolute;
    top: 0;
    left: 0;
    z-index: -5;
    transition: width 0.2s ease-in-out;
}
.category-slides-links-content:hover  .category-slides-content-bkg{
    width: 100%;
}
.category-slides-links-content:hover .category-slides-content-links{
    color: #333333;
}

@media screen and (max-width:834px) {

    .category-slides{
        height: 280px;
    }

    .category-slides-links-content{
        width: 140px;
        height: 40px;
        bottom: 15%;
        left: 15%;
    }
    .category-slides-content-links{
        font-size: 14px;
    }

}

@media screen and (max-width: 414px) {

    .category-slides{
        height: 200px;
    }
    
    .category-slides-links-content{
        width: 100px;
        height: 30px;
        bottom: 10%;
        left: 36%;
    }
    .category-slides-content-links{
        font-size: 12px;
    }

}

</style>