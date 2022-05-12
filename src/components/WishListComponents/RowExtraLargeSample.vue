<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    images: Array,
    descount: Number,
    quality: Number,
    price: Number,
    stock: Number,
});

const calculateDescount = (price, descount) => {
    return price - (price * (descount/100));
}

</script>
<template>

    <div class="row-extra-large-samples">
        <RouterLink to="" class="row-extra-large-samples-image">
            <div class="descount">{{ props.descount }}%</div>
            <img :src="props.images[0]" alt="" />
        </RouterLink>
        <div class="row-extra-large-samples-details">
            <h5>{{ props.title }}</h5>
            <div class="row-extra-large-samples-details-quality">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                -
                <span>{{ props.quality }}</span>
            </div>
            <div class="row-extra-large-samples-added-date">
                <label>Item added on February 7 2022</label>
            </div>
            <div class="row-extra-large-samples-details-price">
                <span>${{ calculateDescount(props.price, props.descount) }}</span>
                <span>${{ props.price }}</span>
            </div>
            <div class="row-extra-large-samples-details-actions">
                <button>Buy now</button>
                <button>Add to cart</button>
                <label>Only {{ props.stock }} available</label>
                <button><i class="bi bi-trash"></i></button>
            </div>
            <div class="row-extra-large-samples-details-amount">
                <div>
                    <label>Only {{ props.stock }} available</label>
                </div>
                <button><i class="bi bi-trash"></i></button>
            </div>

        </div>
        <div class="row-extra-large-samples-actions">
            <label>Item added on February 7 2022</label>
            <button>Buy now</button>
            <button>Add to cart</button>
        </div>
    </div>

</template>
<style>

.row-extra-large-samples{
    width: 95%;
    margin: 20px auto;
    box-sizing: border-box;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.row-extra-large-samples-image .descount{
    width: fit-content;
    font-family: "raleway-semibold", sans-serif;
    font-size: 13px;
    color: #ffffff;
    background-color: red;
    border-radius: 50%;
    padding: 6px 2px;

    position: absolute;
    top: -5px;
    left: -10px;
}
.row-extra-large-samples-image{
    border: 1px solid #dddddd;
    width: 20%;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    position: relative;
}
.row-extra-large-samples-image img{
    width: 80%;
    height: 80%;
    object-fit: contain;
}
.row-extra-large-samples-details{
    width: 53%;
    box-sizing: border-box;
}
.row-extra-large-samples-details h5{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    line-height: 18px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2; 
    -webkit-box-orient: vertical;
}
.row-extra-large-samples-details-quality{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 15px;
}
.row-extra-large-samples-details-quality i{
    display: inline-block;
    font-size: 14px;
    color: #333333;
    margin-right: 4px;
}
.row-extra-large-samples-details-quality span{
    display: inline-block;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: #333333;
    margin-left: 4px;
}
.row-extra-large-samples-added-date{
    display: none; /* this will change */
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.row-extra-large-samples-added-date label{
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    font-style: italic;
    color: #333333;
}
.row-extra-large-samples-details-price{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.row-extra-large-samples-details-price span{
    display: inline-block;
    width: fit-content;
    font-family: "raleway-regular", sans-serif;
}
.row-extra-large-samples-details-price span:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    margin-right: 10px;
}
.row-extra-large-samples-details-price span:nth-child(2){
    font-size: 14px;
    font-weight: bold;
    color: #999999;
    text-decoration: line-through;
}
.row-extra-large-samples-details-actions{
    width: 95%;
    box-sizing: border-box;

    display: none; /*this will change*/
    align-items: center;
}
.row-extra-large-samples-details-actions button:nth-child(1),
.row-extra-large-samples-details-actions button:nth-child(2){
    border: 1px solid #ddd;
    padding: 4px 15px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;
    font-family: "raleway-regular", sans-serif;
    font-size: 15px;
    font-weight: bold;
    background-color: #ffffff;
}
.row-extra-large-samples-details-actions button:nth-child(4){
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    font-size: 18px;
}
.row-extra-large-samples-details-actions label{
    font-family: "raleway-semibold", sans-serif;
    font-size: 12px;
    font-style: italic;
    color: tomato;
    margin-right: 10px;

}
.row-extra-large-samples-details-amount{
    width: 95%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.row-extra-large-samples-details-amount div{
    width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.row-extra-large-samples-details-amount div label{
    font-family: "raleway-semibold", sans-serif;
    font-size: 12px;
    font-style: italic;
    color: tomato;
}
.row-extra-large-samples-details-amount > button{
    border: 0;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    font-size: 18px;
}
.row-extra-large-samples-actions{
    width: 25%;
    box-sizing: border-box;
}
.row-extra-large-samples-actions label{
    display: block;
    width: fit-content;
    margin: 10px auto;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
}
.row-extra-large-samples-actions button{
    border: 1px solid #dddddd;
    width: 90%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    padding: 4px 15px;
    font-family: "raleway-regular", sans-serif;
    font-size: 15px;
    font-weight: bold;
    background-color: #ffffff;
    transition: box-shadow 0.3s ease-in-out;
}
.row-extra-large-samples-actions button:hover,
.row-extra-large-samples-actions button:focus{
    box-shadow: 0px 0px 5px #e6e6e6;
}

@media screen and (max-width: 834px) {
    
    .row-extra-large-samples{
        width: 100%;
        margin: 20px auto;
        padding-bottom: 10px;
    }
    .row-extra-large-samples-image .descount{
        font-size: 12px;
        padding: 6px 2px;
        top: -5px;
        left: -10px;
    }
    .row-extra-large-samples-image{
        width: 20%;
        height: 120px;
    }
    .row-extra-large-samples-details{
        width: 52%;
        box-sizing: border-box;
    }
    .row-extra-large-samples-details h5{
        margin-bottom: 10px;
        font-size: 13px;
        line-height: 16px;
    }
    .row-extra-large-samples-details-quality{
        margin-bottom: 10px;
    }
    .row-extra-large-samples-details-quality i{
        font-size: 13px;
        margin-right: 4px;
    }
    .row-extra-large-samples-details-quality span{
        font-size: 12px;
        margin-left: 4px;
    }
    .row-extra-large-samples-added-date{
        margin-bottom: 10px;
    }
    .row-extra-large-samples-added-date label{
        font-family: "raleway-regular", sans-serif;
        font-size: 13px;
        font-style: italic;
        color: #333333;
    }
    .row-extra-large-samples-details-price{
        margin-bottom: 10px;
    }
    .row-extra-large-samples-details-price span:nth-child(1){
        font-size: 16px;
        margin-right: 10px;
    }
    .row-extra-large-samples-details-price span:nth-child(2){
        font-size: 12px;
    }
    .row-extra-large-samples-details-actions{
        width: 95%;
        box-sizing: border-box;

        display: none; /*this will change*/
        align-items: center;
    }
    .row-extra-large-samples-details-actions button:nth-child(1),
    .row-extra-large-samples-details-actions button:nth-child(2){
        border: 1px solid #ddd;
        padding: 4px 15px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 3px;
        font-family: "raleway-regular", sans-serif;
        font-size: 15px;
        font-weight: bold;
        background-color: #ffffff;
    }
    .row-extra-large-samples-details-actions button:nth-child(4){
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #ffffff;
        font-size: 18px;
    }
    .row-extra-large-samples-details-actions label{
        font-family: "raleway-semibold", sans-serif;
        font-size: 12px;
        font-style: italic;
        color: tomato;
        margin-right: 10px;
    }
    .row-extra-large-samples-details-amount{
        width: 95%;
    }
    .row-extra-large-samples-details-amount div label{
        font-size: 11px;
    }
    .row-extra-large-samples-details-amount > button{
        font-size: 16px;
    }
    .row-extra-large-samples-actions{
        width: 25%;
    }
    .row-extra-large-samples-actions label{
        margin: 10px auto;
        font-size: 12px;
    }
    .row-extra-large-samples-actions button{
        width: 90%;
        margin: 20px auto;
        padding: 4px 0;
        font-size: 12px;
    }
}

@media screen and (max-width: 414px) {

    .row-extra-large-samples{
        width: 100%;
        margin: 20px auto;
        padding-bottom: 10px;
    }
    .row-extra-large-samples-image .descount{
        font-size: 12px;
        padding: 6px 2px;
        top: -5px;
        left: -10px;
    }
    .row-extra-large-samples-image{
        width: 35%;
        height: 125px;
    }
    .row-extra-large-samples-details{
        width: 63%;
    }
    .row-extra-large-samples-details h5{
        margin-bottom: 0px;
        font-size: 13px;
        line-height: 16px;
    }
    .row-extra-large-samples-details-quality{
        display: none;
    }
    .row-extra-large-samples-added-date{
        display: block;
        margin-bottom: 5px;
    }
    .row-extra-large-samples-added-date label{
        font-size: 11px;
    }
    .row-extra-large-samples-details-price{
        margin-bottom: 5px;
    }
    .row-extra-large-samples-details-price span:nth-child(1){
        font-size: 14px;
        margin-right: 10px;
    }
    .row-extra-large-samples-details-price span:nth-child(2){
        font-size: 11px;
    }
    .row-extra-large-samples-details-actions{
        width: 95%;
        display: flex; 
        flex-wrap: wrap;
    }
    .row-extra-large-samples-details-actions button:nth-child(1),
    .row-extra-large-samples-details-actions button:nth-child(2){
        padding: 4px 8px;
        margin-right: 10px;
        font-size: 12px;
    }
    .row-extra-large-samples-details-actions button:nth-child(4){
        margin-top: 10px;
        font-size: 14px;
    }
    .row-extra-large-samples-details-actions label{
        font-size: 10px;
        margin-right: 50%;
        margin-top: 10px;
    }
    .row-extra-large-samples-details-amount{display: none;}
    .row-extra-large-samples-actions{display: none;}
}

</style>