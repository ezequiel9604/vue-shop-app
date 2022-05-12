<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import ItemDetailsSelection from '../ItemDetailsComponents/ItemDetailsSelection.vue';
import ItemDetailsImages from '../ItemDetailsComponents/ItemDetailsImages.vue';
import ItemDetailsAction from '../ItemDetailsComponents/ItemDetailsAction.vue';
import ItemImage1 from '../../assets/imgs/samples/smart-tv-2.png';
import ItemImage2 from '../../assets/imgs/samples/smart-tv-3.png';

const images = ref([
    ItemImage1, ItemImage2, ItemImage1, ItemImage2, ItemImage1
]);

const color ={
    title:"Color",
    sets: ["Black","Purple","Red","Green"]
};

const size ={
    title:"Size",
    sets: ['17"','22"','24"','32"']
};

const capacity ={
    title:"Capacity",
    sets: ["4GB","6GB","8GB", "16GB"]
}

</script>
<template>

    <div class="top-item-details">

        <div class="top-item-details-content">

            <ItemDetailsImages :images="images" />

            <div class="top-item-details-details">

                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non accusantium vero sed, 
                    vitae qui aspernatur! Aliquid distinctio minus libero sint velit at nulla! 
                    Commodi labore, libero qui quo rem quia.</h3>

                <div class="top-item-details-details-price">
                    <span>$1,700.00</span>
                    <span>$1,550.00</span>
                </div>

                <div class="top-item-details-details-quality">
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <span>0.0</span>
                </div>

                <ItemDetailsSelection :title="color.title" :sets="color.sets" />

                <ItemDetailsSelection :title="size.title" :sets="size.sets" />

                <ItemDetailsSelection :title="capacity.title" :sets="capacity.sets" />

                <div class="top-item-details-details-amount">
                    <button>-</button> 
                    <span>1</span> 
                    <button>+</button>
                    <p>Quedan 6 disponible</p>
                </div>

                <ItemDetailsAction />

            </div>

        </div>

    </div>

</template>
<style>


.top-item-details{
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    overflow: hidden;
}
.top-item-details-content{
    width: 80%;
    box-sizing: border-box;
    margin: 40px auto;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

/* ////////////////////////////////////////////////////// */
/* ///            top item details details            /// */ 
/* ////////////////////////////////////////////////////// */
.top-item-details-details{
    width: 49%;
    box-sizing: border-box;
}
.top-item-details-details h3{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;

    text-align: justify;
    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    line-height: 22px;
    color: #333333;
}
.top-item-details-details-price{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 15px;
    font-family: "raleway-semibold", sans-serif;
}
.top-item-details-details-price span:nth-child(1){
    font-size: 20px;
    color: #333333;
}
.top-item-details-details-price span:nth-child(2){
    font-size: 16px;
    color: #cccccc;
    text-decoration: line-through;
    margin-left: 40px;
}
.top-item-details-details-quality{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 20px;
}
.top-item-details-details-quality i{
    font-size: 16px;
    margin-right: 5px;
}
.top-item-details-details-quality span{
    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    margin-right: 5px;
}

.top-item-details-details-amount{
    width: fit-content;
    box-sizing: border-box;
    margin-top: 25px;
    margin-bottom: 20px;
}
.top-item-details-details-amount button{
    width: 25px;
    height: 25px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dddddd;
    background-color: #dddddd;
    border-radius: 50%;
}
.top-item-details-details-amount span{
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    margin: 0 8px;
}
.top-item-details-details-amount p{
    display: inline-block;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    font-style: italic;
    color: tomato;
    margin-left: 10px;
}

@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///            top item details details            /// */ 
    /* ////////////////////////////////////////////////////// */
    .top-item-details-details{
        width: 49%;
    }
    .top-item-details-details h3{
        margin-bottom: 10px;
        font-family: "raleway-semibold", sans-serif;
        font-size: 13px;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
    .top-item-details-details-price{
        margin-bottom: 10px;
    }
    .top-item-details-details-price span:nth-child(1){
        font-size: 18px;
    }
    .top-item-details-details-price span:nth-child(2){
        font-size: 13px;
        margin-left: 25px;
    }

    .top-item-details-details-quality{
        margin-bottom: 10px;
    }
    .top-item-details-details-quality i{
        font-size: 14px;
        margin-right: 4px;
    }
    .top-item-details-details-quality span{
        font-size: 14px;
        margin-right: 4px;
    }
    
    .top-item-details-details-amount{
        margin: 20px 0;
    }
    .top-item-details-details-amount button{
        width: 20px;
        height: 20px;
        font-size: 14px;
    }
    .top-item-details-details-amount span{
        font-size: 13px;
    }
    .top-item-details-details-amount p{
        font-size: 12px;
        margin-left: 10px;
    }

}

@media screen and (max-width: 414px) {

    .top-item-details-content{
        width: 95%;
        margin: 30px auto;
        display: block;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///            top item details details            /// */ 
    /* ////////////////////////////////////////////////////// */
    .top-item-details-details{
        width: 95%;
        margin: 20px auto;
    }
    .top-item-details-details h3{
        margin-bottom: 8px;
        font-size: 12px;
        line-height: 18px;
    }
    .top-item-details-details-price{
        margin-bottom: 8px;
        display: inline-block;
    }
    .top-item-details-details-price span:nth-child(1){
        font-size: 17px;
    }
    .top-item-details-details-price span:nth-child(2){
        font-size: 14px;
        margin-left: 15px;
    }
    .top-item-details-details-quality{
        margin-left: 30px;
        display: inline-block;
    }
    .top-item-details-details-quality i{
        font-size: 13px;
        margin-right: 3px;
    }
    .top-item-details-details-quality span{
        font-size: 13px;
    }

    .top-item-details-details-amount{
        margin: 20px 0;
    }
    .top-item-details-details-amount button{
        width: 20px;
        height: 20px;
        font-size: 14px;
    }
    .top-item-details-details-amount span{
        font-size: 13px;
    }
    .top-item-details-details-amount p{
        font-size: 11px;
    }
   
}

</style>