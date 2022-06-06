<script setup>
import { ref } from 'vue';

const props = defineProps({
    images: Array
});

const selectedImg = ref(0);

const changeSeletedImg = (number) => {
    selectedImg.value = number;
}

</script>
<template>

    <div class="top-item-details-images">

        <div class="top-item-details-main-image">
            <button class="add-to-list-button">
                <i class="bi bi-heart"></i>
            </button>
            <img :src="props.images[selectedImg]" alt="" />
        </div>

        <div class="top-item-details-min-images">

            <figure v-for="n in 5" :key="n">
                <img :src="props.images[n-1]" 
                    v-if="(n-1) === selectedImg" 
                    id="item-details-min-img-active" 
                    @click="() => changeSeletedImg(n-1)"
                    alt="" />
                <img v-else :src="props.images[n-1]"
                    @click="() => changeSeletedImg(n-1)" 
                    alt="" />
            </figure>


        </div>

    </div>

</template>
<style>

.top-item-details-images{
    width: 49%;
    box-sizing: border-box;
}
.top-item-details-main-image{
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    border-radius: 6px;
    position: relative;
}
.top-item-details-main-image img{
    width: 100%;
    height: 380px;
    object-fit: contain;
}
.top-item-details-main-image button{
    width: fit-content;
    box-sizing: border-box;
    border: 1px solid transparent;
    background-color: transparent;
    border-radius: 50%;
    font-size: 22px;
    color: #333333;

    position: absolute;
    top: 2%;
    left: 2%;
    display: none; /* this will change */
}
.top-item-details-min-images{
    width: 98%;
    box-sizing: border-box;
    margin: 15px auto;

    display: flex;
    justify-content: space-around;
}
.top-item-details-min-images figure {
    display: block;
    width: 15%;
    height: 50px;
    cursor: pointer;
}
.top-item-details-min-images figure img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: 2px solid #dddddd;
    border-radius: 4px;
    transition: 0.4s;
}
.top-item-details-min-images img:hover{
    border-color: tomato;
}

img#item-details-min-img-active{
    border-color: tomato;
}

@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///             top item details images            /// */ 
    /* ////////////////////////////////////////////////////// */
    .top-item-details-images{
        width: 49%;
    }
    .top-item-details-main-image img{
        height: 300px;
    }
    .top-item-details-main-image button{
        display: block;
    }
    .top-item-details-min-images{
        width: 98%;
        margin: 15px auto;
    }
    .top-item-details-min-images figure {
        width: 15%;
        height: 40px;
    }
}

@media screen and (max-width: 414px) {
 
    /* ////////////////////////////////////////////////////// */
    /* ///            top item details images            /// */ 
    /* ////////////////////////////////////////////////////// */
    .top-item-details-images{
        width: 95%;
        margin: 0 auto;
    }
    .top-item-details-main-image img{
        height: 250px;
    }
    .top-item-details-main-image button{
        font-size: 20px;
        top: 5%;
    }
    .top-item-details-min-images{
        width: 98%;
        margin: 10px auto;
    }
    .top-item-details-min-images figure{
        width: 15%;
        height: 35px;
    }

}

</style>