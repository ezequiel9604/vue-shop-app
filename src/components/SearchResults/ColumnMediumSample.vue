<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { formatedNumber, calculateDescountPrice } from '../../services/Item';

const props = defineProps({
  id: String,
  descount: Number,
  images: Array,
  title: String,
  price: Number
});

const state = reactive({
  image: ''
});

import('../../assets/imgs/samples/' + props.images[0].path)
  .then((value) => {
    state.image = value.default;
  })
  .catch((error) => {
    //console.log('Not able to locate the image!');
  });

</script>
<template>

    <div class="column-medium-samples">
        <div class="descount">{{ props.descount }}%
        </div>
        <RouterLink :to="'/itemDetails?itemId='+props.id">
            <img :src="state.image" alt="" />
        </RouterLink>
        <h3>{{ props.title }}</h3>
        <h4>
            <span>${{ formatedNumber(calculateDescountPrice(props.price, props.descount)) }}</span>
            <span>${{ formatedNumber(props.price) }}</span>
        </h4>
    </div>

</template>
<style>

.column-medium-samples{
    width: 160px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #ffffff;
    
    position: relative;
    z-index: 0;
}
.column-medium-samples .descount{
    width: fit-content;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    background-color: tomato;
    border-radius: 50%;
    padding: 8px 4px;

    position: absolute;
    top: -5px;
    left: -5px;
}
.column-medium-samples a{
    border: 1px solid #dddddd;
    background-color: #ffffff;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}
.column-medium-samples a img{
    width: 80%;
    height: 80%;
    object-fit:contain;
}
.column-medium-samples h3{
    width: 90%;
    margin: 8px auto;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;

    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #333333;
    line-height: 16px;
}
.column-medium-samples h4{
    width: 80%;
    margin: 5px auto;
    box-sizing: border-box;

    font-family: "raleway-semibold", sans-serif;
}
.column-medium-samples h4 span:nth-child(1){
    display: inline-block;
    font-size: 16px;
    color: #333333;
    margin-right: 20px;
}
.column-medium-samples h4 span:nth-child(2){
    display: inline-block;
    font-size: 13px;
    color: #999999;
    text-decoration: line-through;
}

@media screen and (max-width: 834px) {
    
    .column-medium-samples:last-child{
        display: none;
    }
    .column-medium-samples{
        width: 140px;
    }
    .column-medium-samples .descount{
        font-size: 12px;
        padding: 6px 2px;
    }
    .column-medium-samples a{
        width: 100%;
        height: 100px;
    }
    .column-medium-samples h3{
        display: none;
    }
    .column-medium-samples h4{
        width: 85%;
        margin: 5px auto;
    }
    .column-medium-samples h4 span:nth-child(1){
        font-size: 14px;
        margin-right: 20px;
    }
    .column-medium-samples h4 span:nth-child(2){
        font-size: 12px;
    }

}

@media screen and (max-width: 414px) {
    
    .column-medium-samples:nth-child(3){
        display: none;
    }
    .column-medium-samples{
        width: 120px;
    }
    .column-medium-samples .descount{
        font-size: 12px;
        padding: 6px 2px;
    }
    .column-medium-samples a{
        width: 100%;
        height: 80px;
    }
    .column-medium-samples h4 span:nth-child(1){
        font-size: 13px;
        margin-right: 20px;
    }
    .column-medium-samples h4 span:nth-child(2){
        font-size: 11px;
    }

}

</style>
