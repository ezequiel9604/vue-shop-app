<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { formatedNumber, calculateDescountPrice } from '../../services/Item';

const props = defineProps({
  id: String,
  title: String,
  price: Number,
  images: Array,
  descount: Number
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

    <div class="column-large-samples">
        <div class="descount">
            {{ props.descount}}%
        </div>
        <RouterLink :to="'/itemDetails?itemId='+props.id" class="column-large-samples-img">
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

.column-large-samples{
    width: 250px;
    box-sizing: border-box;
    background-color: #ffffff;
    
    position: relative;
    margin: 20px 5%;

    z-index: 0;
}
.column-large-samples .descount{
    background-color: red;

    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    color: #ffffff;

    padding: 8px 4px;

    border-radius: 50%;
    cursor: default;
    position: absolute;
    top: -5%;
    left: -5%;
    z-index: 10;
}
.column-large-samples-img{
    border: 1px solid #dddddd;
    background-color: #ffffff;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
}

@keyframes column-large-samples-a-img-hover {
    from {width: 80%;height: 80%;}
    to{width: 100%;height: 100%;}
}
@keyframes column-large-samples-a-img-nothover {
    from {width: 100%;height: 100%;}
    to{width: 80%;height: 80%;}
}
.column-large-samples-img img{
    width: 80%;
    height: 80%;
    object-fit:contain;
}

.column-large-samples-img img:hover {
    animation-name: column-large-samples-a-img-hover;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
.column-large-samples-img img:not(:hover){
    animation-name: column-large-samples-a-img-nothover;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

.column-large-samples h3{
    width: 90%;
    margin: 10px auto;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;

    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    color: #333333;
    line-height: 18px;
}
.column-large-samples h4{
    width: 80%;
    margin: 10px auto;
    box-sizing: border-box;

    font-family: "raleway-semibold", sans-serif;
}
.column-large-samples h4 span:nth-child(1){
    display: inline-block;
    font-size: 18px;
    color: #333333;
    margin-right: 20px;
}
.column-large-samples h4 span:nth-child(2){
    display: inline-block;
    font-size: 16px;
    color: #999999;
    text-decoration: line-through;
}
.items-in-offer-see-more-button{
    width: fit-content;
    margin: 10px auto;
    margin-bottom: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    padding: 6px 14px;
    color: #333333;

    background-color: #fafafa;
    border: 1px solid #dddddd;
    border-radius: 4px;
}

@media screen and (max-width: 834px) {
    
    .column-large-samples{
        width: 200px;
        margin: 20px 40px;
    }
    .column-large-samples .descount{
        font-size: 14px;
        padding: 6px 2px;
    }
    .column-large-samples-img{
        width: 100%;
        height: 140px;
    }
    .column-large-samples-img img{
        width: 80%;
        height: 80%;
    }
    .column-large-samples h3{
        width: 90%;
        margin: 8px auto;
        font-size: 13px;
        line-height: 16px;
    }
    .column-large-samples h4{
        width: 85%;
        margin: 8px auto;
    }
    .column-large-samples h4 span:nth-child(1){
        font-size: 16px;
        margin-right: 10%;
    }
    .column-large-samples h4 span:nth-child(2){
        font-size: 14px;
    }

    .items-in-offer-see-more-button{
        margin: 10px auto;
        margin-bottom: 30px;
        font-size: 14px;
        padding: 6px 14px;
    }
}

@media screen and (max-width: 414px) {
    
    .column-large-samples{
        width: 120px;
        margin: 20px 10px;
    }
    .column-large-samples .descount{
        font-size: 12px;
        padding: 4px 2px;
    }
    .column-large-samples-img{
        width: 100%;
        height: 100px;
    }
    .column-large-samples-img img{
        width: 80%;
        height: 80%;
    }
    .column-large-samples h3{
        display: none;
    }
    .column-large-samples h4{
        width: 95%;
        margin: 5px auto;
    }
    .column-large-samples h4 span:nth-child(1){
        font-size: 14px;
        margin-right: 15%;
    }
    .column-large-samples h4 span:nth-child(2){
        font-size: 13px;
    }   
}

</style>
