<script setup>
import { reactive } from 'vue';
import image1 from '../../assets/imgs/samples/smart-tv-2.png';
import image2 from '../../assets/imgs/samples/smart-tv-3.png';
import image3 from '../../assets/imgs/samples/tablet-2.png';
import image4 from '../../assets/imgs/samples/tablet.png';

const props = defineProps({
    images: Array
});

const state = reactive({
    imagePath: "",
    selected: 0,
})

/*const changeSeletedImg = (value) => {
    state.selected = value;
}*/

const getImagePath = (num) => {
    console.log(allImages[num-1])
    let result = "";

   /*import(`../../assets/imgs/samples/${allImages[num-1]}`)
    .then((value)=>{
        result = value.default;
        //console.log(result);
    })
    .catch((error)=>{
        console.log("Not able to locate the image!");
    });*/

    return result;
} 

import(`../../assets/imgs/samples/${props.images[state.selected].path}`)
    .then((value)=>{
        state.imagePath = value.default;
    })
    .catch((error)=>{
        console.log("Not able to locate the image!");
    });

</script>
<template>

    <div class="top-item-details-images">

        <div class="top-item-details-main-image">
            <button class="add-to-list-button">
                <i class="bi bi-heart"></i>
            </button>
            <img :src="state.imagePath" alt="" />
        </div>

        <div class="top-item-details-min-images">

            <figure>
                <img :src="image1" id="item-details-min-img-active" alt="" />
            </figure>
            <figure>
                <img :src="image2" alt="" />
            </figure>
            <figure>
                <img :src="image3" alt="" />
            </figure>
            <figure>
                <img :src="image4" alt="" />
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