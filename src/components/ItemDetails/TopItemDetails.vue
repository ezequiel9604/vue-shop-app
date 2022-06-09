<script setup>
import { reactive, computed } from 'vue';
import { RouterLink } from 'vue-router';
import ItemDetailsSelection from '../ItemDetails/ItemDetailsSelection.vue';
import ItemDetailsImages from '../ItemDetails/ItemDetailsImages.vue';
import ItemDetailsAction from '../ItemDetails/ItemDetailsAction.vue';
import { formatedNumber, calculateDescountPrice, getAllElementsFromItems, 
    getCharacteriscFromSubitems } from '../../services/Item';

const props = defineProps({ 
    title: String,
    images: Array,
    subitems: Array,
    quality: Number,
    category: String,
    items: Array,
});

const state = reactive({
    color: props.subitems[0].color,
    capacity: props.subitems[0].color,
    size: props.subitems[0].color,

    selectedSubitem: 0,
    amount: 1,
})


const getColors = computed(() => {
    return getAllElementsFromItems(props.items, "color", props.category);
})
const getCapacity = computed(() => {
    return getAllElementsFromItems(props.items, "capacity", props.category);
})
const getSize = computed(() => {
    return getAllElementsFromItems(props.items, "size", props.category);
})


const changeAmountIncrease = () => {
    if(state.amount < props.subitems[state.selectedSubitem].stock)
        state.amount++;
}

const changeAmountDecrease = () => {
    if(state.amount > 1)
        state.amount--;
}

</script>
<template>

    <div class="top-item-details">

        <div class="top-item-details-content">

            <ItemDetailsImages :images="props.images" />

            <div class="top-item-details-details">

                <h3>{{ props.title }}</h3>

                <div class="top-item-details-details-price">
                    <span>${{ formatedNumber(props.subitems[state.selectedSubitem].price) }}</span>
                    <span>${{ formatedNumber(calculateDescountPrice(props.subitems[state.selectedSubitem].price,
                            props.subitems[state.selectedSubitem].descount )) }}</span>
                </div>

                <div class="top-item-details-details-quality">
                    <i v-for="n in 5" :class="n <= props.quality? 'bi bi-star-fill':'bi bi-star'" :key="n"></i>
                    <span>{{ props.quality }}</span>
                </div>

                <ItemDetailsSelection v-if="props.subitems[state.selectedSubitem].color != ''" 
                    title="Color" 
                    :allelements="getColors"
                    :subitemselements="getCharacteriscFromSubitems(props.subitems, 'color')"
                    :currentelement="props.subitems[state.selectedSubitem].color"
                    />
                
                <ItemDetailsSelection v-if="props.subitems[state.selectedSubitem].capacity != ''" 
                    title="Capacity" 
                    :allelements="getCapacity"
                    :subitemselements="getCharacteriscFromSubitems(props.subitems, 'capacity')"
                    :currentelement="props.subitems[state.selectedSubitem].capacity"
                    />

                <ItemDetailsSelection v-if="props.subitems[state.selectedSubitem].size != ''" 
                    title="Size" 
                    :allelements="getSize"
                    :subitemselements="getCharacteriscFromSubitems(props.subitems, 'size')"
                    :currentelement="props.subitems[state.selectedSubitem].size"
                    /> 

                <div class="top-item-details-details-amount">
                    <button @click="changeAmountDecrease">-</button> 
                    <span>{{ state.amount }}</span> 
                    <button @click="changeAmountIncrease">+</button>
                    <p>Quedan {{ props.subitems[state.selectedSubitem].stock }} disponible</p>
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