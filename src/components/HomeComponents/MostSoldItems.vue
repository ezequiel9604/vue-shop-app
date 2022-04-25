<script setup>
import { ref, onMounted } from 'vue';
import ColumnLargeSample from './ColumnLargeSample.vue';

const props = defineProps({ items : Array });

const slider = ref(null);
const sliderCounter = ref(0);
const sets = [0, 3];

const getMostSoldItems = (number) => {
    const arr = [...props.items.slice(number, number + 3)];
    return arr;
}


const handleLeftSliderButton = () => {
    if (sliderCounter.value == 1) {
        sliderCounter.value--;
        slider.value.scrollTo(slider.value.offsetWidth * sliderCounter.value, 0);
    } 
}

const handleRightSliderButton = () => {
    if (sliderCounter.value == 0) {
        sliderCounter.value++;
        slider.value.scrollTo(slider.value.offsetWidth * sliderCounter.value, 0);
    }
}


</script>
<template>

    <div class="most-sold-items">

        <h2 class="most-sold-items-subtitles">Most sold items</h2>

        <div class="most-sold-items-content">

            <button @click="handleLeftSliderButton" class="category-slider-button category-slider-left-button">
                <i class="bi bi-chevron-left"></i>
            </button>
            <button @click="handleRightSliderButton" class="category-slider-button category-slider-right-button">
                <i class="bi bi-chevron-right"></i>
            </button>

            <div class="most-sold-items-content-slider" ref="slider">

                <div v-for="s in sets" class="most-sold-items-content-slider-slides" :key="s">

                    <ColumnLargeSample v-for="i in getMostSoldItems(s)" :title="i.title" :price="i.price"
                        :images="i.images" :descount="i.descount" :key="i.id" />

                </div>


            </div>

        </div>

    </div>

</template>
<style>
.most-sold-items {
    width: 100%;
    box-sizing: border-box;
}

.most-sold-items-subtitles {
    width: 85%;
    margin: 10px auto;
    margin-top: 30px;

    text-align: center;
    font-family: "raleway-semibold", sans-serif;
    font-size: 18px;
    color: #333333;
}

/* ////////////////////////////////////////////////////// */
/* ///             most sold items content            /// */
/* ////////////////////////////////////////////////////// */
.most-sold-items-content {
    width: 100%;
    margin: 20px auto;
    box-sizing: border-box;

    position: relative;
    background-color: #ffffff;
}

/* ////////////////////////////////////////////////////// */
/* ///     most sold items content slider button      /// */
/* ////////////////////////////////////////////////////// */
.category-slider-button {
    width: fit-content;
    background-color: transparent;
    border: 0;
    padding: 0;

    position: absolute;
    top: 40%;
    z-index: 10;
}

.category-slider-button i {
    font-size: 40px;
    color: #333333;
}

.category-slider-button:nth-child(1) {
    left: 3%;
}

.category-slider-button:nth-child(2) {
    right: 3%;
}

/* ////////////////////////////////////////////////////// */
/* ///         most sold items content slider         /// */
/* ////////////////////////////////////////////////////// */
.most-sold-items-content-slider {
    width: 85%;
    margin: 0 auto;
    box-sizing: border-box;

    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
}

.most-sold-items-content-slider::-webkit-scrollbar {
    display: none;
}

.most-sold-items-content-slider-slides {
    background-color: transparent;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;

    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 834px) {

    .most-sold-items-subtitles {
        width: 85%;
        font-size: 16px;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///     most sold items content slider button      /// */
    /* ////////////////////////////////////////////////////// */
    .category-slider-button i {
        font-size: 30px;
        color: #333333;
    }

    .category-slider-button:nth-child(1) {
        left: 4%;
    }

    .category-slider-button:nth-child(2) {
        right: 4%;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///         most sold items content slider         /// */
    /* ////////////////////////////////////////////////////// */
    .most-sold-items-content-slider {
        width: 90%;
        margin: 0 auto;
    }

    .most-sold-items-content-slider-slides {
        justify-content: space-around;
    }

}

@media screen and (max-width: 414px) {

    .category-slider-button i {
        font-size: 25px;
    }

    .category-slider-button:nth-child(1) {
        left: 2%;
    }

    .category-slider-button:nth-child(2) {
        right: 2%;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///         most sold items content slider         /// */
    /* ////////////////////////////////////////////////////// */
    .most-sold-items-content-slider {
        width: 90%;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///         most sold items content slider         /// */
    /* ////////////////////////////////////////////////////// */
    .most-sold-items-content-slider-slides {
        justify-content: space-around;
        align-items: center;
    }

    .most-sold-items-content-slider-slides .column-large-samples:nth-child(2) {
        display: none;
    }

}
</style>