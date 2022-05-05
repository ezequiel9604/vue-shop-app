<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const props = defineProps({
    characteristics: Array,
    descount: Number,
    images: Array,
    title: String,
    price: Number,
    stock: Number
});

const calculateDescount = (price, descount) => {
    return price - (price * (descount/100));
}

</script>
<template>

    <div class="row-medium-samples">
        <div class="row-medium-samples-checkbox">
            <input type="checkbox" />
        </div>
        <RouterLink to="" class="row-medium-samples-image">
            <div class="descount">{{ props.descount }}%</div>
            <img :src="props.images[0]" alt="" />
        </RouterLink>
        <div class="row-medium-samples-details">
            <h5>{{ props.title }}.</h5>
            <div class="row-medium-samples-details-specifications">
                <p><strong>Size: </strong>17" Pulgadas,</p>
                <p><strong>Capacity: </strong>4GB, </p>
                <p><strong>Color: </strong><mark></mark> </p>
            </div>
            <div class="row-medium-samples-details-price">
                <span>${{ calculateDescount(props.price, props.descount) }}</span>
                <span>${{ props.price }}</span>
            </div>
            <div class="row-medium-samples-details-amount">
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                    <label>Only {{ props.stock }} available</label>
                </div>
                <button><i class="bi bi-trash"></i></button>
            </div>
        </div>
    </div>

</template>
<style>

.row-medium-samples{
    width: 95%;
    margin: 20px auto;
    padding-bottom: 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    position: relative;
}
.row-medium-samples-checkbox{
    width: 5%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}
.row-medium-samples-checkbox input{
    width: 80%;
    height: 15px;
}
.row-medium-samples-image .descount{
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
.row-medium-samples-image{
    border: 1px solid #dddddd;
    width: 20%;
    height: 150px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.row-medium-samples-image img{
    width: 80%;
    height: 80%;
    object-fit: contain;
}
.row-medium-samples-details{
    width: 72%;
    box-sizing: border-box;
}
.row-medium-samples-details h5{
    width: 95%;
    box-sizing: border-box;
    margin-bottom: 10px;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    line-height: 18px;
}
.row-medium-samples-details-specifications{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 10px;
    display: flex;
}
.row-medium-samples-details-specifications p{
    margin-right: 10px;
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    color: #333333;
}
.row-medium-samples-details-price{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.row-medium-samples-details-price span{
    display: inline-block;
    width: fit-content;
    font-family: "raleway-regular", sans-serif;
}
.row-medium-samples-details-price span:nth-child(1){
    font-size: 17px;
    font-weight: bold;
    color: #333333;
    margin-right: 10px;
}
.row-medium-samples-details-price span:nth-child(2){
    font-size: 14px;
    font-weight: bold;
    color: #999999;
    text-decoration: line-through;
}
.row-medium-samples-details-amount{
    width: 95%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.row-medium-samples-details-amount div{
    width: 32%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.row-medium-samples-details-amount div label{
    display: inline-block;
    font-family: "raleway-semibold", sans-serif;
    font-size: 12px;
    font-style: italic;
    color: tomato;
    margin-left: 5%;
}
.row-medium-samples-details-amount div button{
    width: 20px;
    height: 20px;

    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;

    border-radius: 50%;
    border: 1px solid #dddddd;
    background-color: #dddddd;
}
.row-medium-samples-details-amount div span{
    font-size: 14px;
    padding: 0 10px;
    font-family: "raleway-semibold", sans-serif;
    color: #333333;
}
.row-medium-samples-details-amount > button{
    border: 0;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    font-size: 18px;
}
    
@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///               row medium samples               /// */ 
    /* ////////////////////////////////////////////////////// */
    .row-medium-samples{
        width: 90%;
        margin: 20px auto;
        padding-bottom: 10px;
    }
    .row-medium-samples-checkbox{
        width: 5%;
    }
    .row-medium-samples-checkbox input{
        width: 80%;
        height: 15px;
    }
    .row-medium-samples-image .descount{
        font-size: 12px;
        padding: 6px 2px;
        top: -5px;
        left: -10px;
    }
    .row-medium-samples-image{
        width: 20%;
        height: 120px;
    }
    .row-medium-samples-image img{
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
    .row-medium-samples-details{
        width: 72%;
    }
    .row-medium-samples-details h5{
        margin-bottom: 10px;
        font-size: 13px;
        line-height: 16px;
    }
    .row-medium-samples-details-specifications{
        margin-bottom: 10px;
    }
    .row-medium-samples-details-specifications p{
        margin-right: 10px;
        font-size: 11px;
    }
    .row-medium-samples-details-price{
        margin-bottom: 10px;
    }
    .row-medium-samples-details-price span:nth-child(1){
        font-size: 16px;
        margin-right: 10px;
    }
    .row-medium-samples-details-price span:nth-child(2){
        font-size: 13px;
    }
    .row-medium-samples-details-amount div button{
        width: 20px;
        height: 20px;
        font-size: 14px;
    }
    .row-medium-samples-details-amount div span{
        font-size: 14px;
        padding: 0 10px;
    }
    .row-medium-samples-details-amount div label{
        font-size: 11px;
    }
    .row-medium-samples-details-amount > button{
        font-size: 16px;
    }
        
}

@media screen and (max-width: 414px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///               row medium samples               /// */ 
    /* ////////////////////////////////////////////////////// */
    .row-medium-samples{
        width: 100%;
        margin: 20px auto;
        padding-bottom: 10px;
    }
    .row-medium-samples-checkbox{
        width: 4%;
    }
    .row-medium-samples-checkbox input{
        width: 100%;
        height: 12px;
    }
    .row-medium-samples-image .descount{
        font-size: 11px;
        padding: 6px 2px;
        top: -5px;
        left: -10px;
    }
    .row-medium-samples-image{
        width: 32%;
        height: 120px;
    }
    .row-medium-samples-image img{
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
    .row-medium-samples-details{
        width: 60%;
    }
    .row-medium-samples-details h5{
        margin-bottom: 5px;
        font-size: 12px;
        line-height: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
    .row-medium-samples-details-specifications{
        margin-bottom: 5px;
    }
    .row-medium-samples-details-specifications p{
        margin-right: 10px;
        font-size: 11px;
    }
    .row-medium-samples-details-price{
        margin-bottom: 5px;
    }
    .row-medium-samples-details-price span:nth-child(1){
        font-size: 14px;
        margin-right: 10px;
    }
    .row-medium-samples-details-price span:nth-child(2){
        font-size: 12px;
    }
    .row-medium-samples-details-amount div button{
        width: 20px;
        height: 20px;
        font-size: 14px;
    }
    .row-medium-samples-details-amount div span{
        font-size: 13px;
        padding: 0 10px;
    }
    .row-medium-samples-details-amount div label{
        font-size: 10px;
    }
    .row-medium-samples-details-amount > button{
        font-size: 14px;
    }
}

</style>