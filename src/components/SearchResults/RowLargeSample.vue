<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { formatedNumber, calculateDescountPrice } from '../../services/Item';

const props = defineProps({
  id: String,
  descount: Number,
  images: Array,
  title: String,
  price: Number,
  quality: Number
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
 
    <div class="row-large-samples">
        <div v-if="props.descount > 0" class="descount">{{ props.descount }}%</div>
        <RouterLink :to="'/itemDetails?itemId='+props.id" class="row-large-samples-image">
            <img :src="state.image" alt="" />
        </RouterLink>
        <div class="row-large-samples-details">
            <h5>{{ props.title }}</h5>
            <div v-if="props.descount > 0" class="row-large-samples-details-price">
                <span>${{ formatedNumber(calculateDescountPrice(props.price, props.descount)) }}</span>
                <span>${{ formatedNumber(props.price) }}</span>
            </div>
            <div v-else class="row-large-samples-details-price">
                <span>${{ formatedNumber(props.price) }}</span>
            </div>
            <div class="row-large-samples-details-quality">
                <i v-for="n in 5" :class="n <= props.quality? 'bi bi-star-fill':'bi bi-star'" :key="n"></i>
            </div>
            <div class="row-large-samples-details-action">
                <button class="row-large-samples-details-action-buy-btn">Buy now</button>
                <button class="row-large-samples-details-action-add-btn row-large-samples-details-action-selected-btn">Add to list</button>
                <button class="row-large-samples-details-action-add-icon-btn row-large-samples-details-action-add-icon-selected-btn">
                    <!-- <i class="bi bi-heart-fill"></i> -->
                    <i class="bi bi-heart"></i>
                </button>
            </div>
        </div>
        
    </div>

</template>
<style>

.row-large-samples{
    width: 95%;
    margin: 20px auto;
    box-sizing: border-box;
    padding-bottom:15px ;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.row-large-samples .descount{
    width: fit-content;
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    color: #ffffff;
    background-color: red;
    border-radius: 50%;
    padding: 8px 4px;

    position: absolute;
    top: -5px;
    left: -10px;
    z-index: 10;
}
.row-large-samples-image{
    border: 1px solid #dddddd;
    width: 20%;
    height: 150px;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

@keyframes row-large-samples-image-animation-hover {
    from {width: 80%;height: 80%;}
    to{width: 100%;height: 100%;}
}
@keyframes row-large-samples-image-animation-nothover {
    from {width: 100%;height: 100%;}
    to{width: 80%;height: 80%;}
}
.row-large-samples-image img{
    width: 80%;
    height: 80%;
    object-fit: contain;
}
.row-large-samples-image img:hover {
    animation-name: row-large-samples-image-animation-hover;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}
.row-large-samples-image img:not(:hover){
    animation-name: row-large-samples-image-animation-nothover;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}
.row-large-samples-details{
    width: 77%;
    box-sizing: border-box;
}
.row-large-samples-details h5{
    width: 95%;
    box-sizing: border-box;
    margin-top: 5px;
    margin-bottom: 15px;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    line-height: 18px;
}
.row-large-samples-details-price{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 15px;
}
.row-large-samples-details-price span{
    display: inline-block;
    width: fit-content;
    font-family: "raleway-regular", sans-serif;
}
.row-large-samples-details-price span:nth-child(1){
    font-size: 17px;
    font-weight: bold;
    color: #333333;
    margin-right: 10px;
}
.row-large-samples-details-price span:nth-child(2){
    font-size: 14px;
    font-weight: bold;
    color: #999999;
    text-decoration: line-through;
}
.row-large-samples-details-quality{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 15px;
}
.row-large-samples-details-quality i{
    display: inline-block;
    font-size: 14px;
    color: #333333;
    margin-right: 4px;
    cursor: default;
}
.row-large-samples-details-quality span{
    display: inline-block;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: #333333;
    margin-left: 4px;
}
.row-large-samples-details-action{
    width: 95%;
    box-sizing: border-box;

    display: flex;
    align-items: center;
}
.row-large-samples-details-action-buy-btn,
.row-large-samples-details-action-add-btn{
    border: 1px solid #dddddd;
    padding: 4px 15px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    font-family: "raleway-regular", sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: #333333;
    background-color: #ffffff;
    border-radius: 4px;
    transition: box-shadow 0.3s ease-in-out;
}
.row-large-samples-details-action-buy-btn:hover,
.row-large-samples-details-action-add-btn:hover{
    box-shadow: 0px 0px 5px #e6e6e6;
}
.row-large-samples-details-action-add-icon-btn{
    border: 0;
    display: none; /* this will change*/
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    margin-left: 20px;
    font-size: 18px;
}

.row-large-samples-details-action-selected-btn{
    border: 1px solid tomato;
    background-color: #ff8080;
    color: #ffffff;
}
.row-large-samples-details-action-add-icon-selected-btn{
    color: tomato;
    background-color: #ff8080;
}

@media screen and (max-width: 834px) {
    
    .row-large-samples{
        width: 90%;
        margin: 20px auto;
        padding-bottom:5px ;
    }
    .row-large-samples .descount{
        font-size: 13px;
        padding: 6px 2px;
    }
    .row-large-samples-image{
        width: 22%;
        height: 130px;
    }
    .row-large-samples-details{
        width: 76%;
    }
    .row-large-samples-details h5{
        margin-top: 0px;
        margin-bottom: 10px;
        font-size: 13px;
        line-height: 16px;
    }
    .row-large-samples-details-price{
        margin-bottom: 10px;
    }
    .row-large-samples-details-price span:nth-child(1){
        font-size: 14px;
        margin-right: 10px;
    }
    .row-large-samples-details-price span:nth-child(2){
        font-size: 12px;
    }
    .row-large-samples-details-quality{
        margin-bottom: 10px;
    }
    .row-large-samples-details-quality i{
        font-size: 13px;
        margin-right: 3px;
    }
    .row-large-samples-details-quality span{
        font-size: 12px;
        margin-left: 4px;
    }
    .row-large-samples-details-action-buy-btn,
    .row-large-samples-details-action-add-btn{
        padding: 4px 15px;
        margin-right: 20px;
        font-size: 13px;
    }
    .row-large-samples-details-action-add-icon-btn{
        border: 0;
        display: none; /* this will change*/
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        margin-left: 20px;
        font-size: 18px;
    }
}

@media screen and (max-width: 414px) {
    
    .row-large-samples{
        width: 90%;
        margin: 20px auto;
        padding-bottom:5px ;
    }
    .row-large-samples .descount{
        font-size: 12px;
        padding: 6px 2px;
    }
    .row-large-samples-image{
        width: 38%;
        height: 120px;
    }
    .row-large-samples-details{
        width: 58%;
    }
    .row-large-samples-details h5{
        width: 100%;
        margin-bottom: 5px;
        font-size: 12px;
        line-height: 16px;

        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
    .row-large-samples-details-price{
        margin-bottom: 5px;
    }
    .row-large-samples-details-price span:nth-child(1){
        font-size: 13px;
        margin-right: 15px;
    }
    .row-large-samples-details-price span:nth-child(2){
        font-size: 11px;
    }
    .row-large-samples-details-quality{
        margin-bottom: 5px;
    }
    .row-large-samples-details-quality i{
        font-size: 12px;
        margin-right: 2px;
    }
    .row-large-samples-details-quality span{
        font-size: 11px;
        margin-left: 2px;
    }
    .row-large-samples-details-action-buy-btn,
    .row-large-samples-details-action-add-btn{
        padding: 4px 15px;
        margin-right: 0px;
        font-size: 12px;
    }
    .row-large-samples-details-action-add-btn{
        display: none;
    }
    .row-large-samples-details-action-add-icon-btn{
        display: flex; /* this will change*/
        margin-left: 40%;
        font-size: 16px;
    }
}

</style>
