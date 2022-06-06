<script setup>
import { RouterLink } from 'vue-router';
import { formatedNumber, calculateSubtotal } from '../../services/Item';

const props = defineProps({
    id: String,
    images: Array,
    title: String,
    specifications: Object,
    price: Number,
    amount: Number,
    descount: Number,
    condition: String,
});


</script>
<template>

    <div class="row-mini-samples">
        <div>
            <RouterLink :to="'/itemDetails?itemId='+props.id">
                <img :src="props.images[0]" alt="" />
            </RouterLink>
            <div>
                <h6>{{ props.title }}.</h6>
                <!-- <p><strong>Size:</strong> {{ props.specifications.size }},
                    <strong>Capacity:</strong> {{ props.specifications.capacity }},
                    <strong>Color:</strong> {{ props.specifications.color }}
                </p> -->
                <p><strong>Price:</strong> ${{ formatedNumber(props.price) }}</p>
                <p><strong>Amount:</strong> {{ props.amount }}</p>
                <article>
                    <p><strong>Condition:</strong> {{ props.condition }} 
                        <button class="open-modal-btn">(action)</button>
                    </p>
                    <p><strong>Subtotal:</strong> 
                        ${{ formatedNumber(calculateSubtotal(props.price, props.amount, props.amount)) }}</p>
                </article>
            </div>
        </div>
        <div>
            <label>{{ props.condition}} <button class="open-modal-btn">(action)</button></label>
        </div>
        <div>
            <label>
                ${{ formatedNumber(calculateSubtotal(props.price, props.amount, props.amount)) }}
            </label>
        </div>
    </div>

</template>
<style>

.row-mini-samples{
    width: 100%;
    box-sizing: border-box;
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.row-mini-samples > div{
    margin: 5px 0;
    box-sizing: border-box;
}
.row-mini-samples > div label{
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
}
.row-mini-samples > div:nth-child(1){
    width: 44%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.row-mini-samples > div:nth-child(1) a{
    width: 26%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    border-radius: 6px;
}
.row-mini-samples > div:nth-child(1) a img{
    width: 80%;
    height: 80%;
}
.row-mini-samples > div:nth-child(1) div{
    width: 72%;
    box-sizing: border-box;
}
.row-mini-samples > div:nth-child(1) div h6{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 5px;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #333333;
    line-height: 16px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3; 
    -webkit-box-orient: vertical;
}
.row-mini-samples > div:nth-child(1) div p{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 5px;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #333333;
}
.row-mini-samples > div:nth-child(1) div p button{
    border: 0;
    background-color: transparent;
    color: #0099ff;
}
.row-mini-samples > div:nth-child(1) div p strong{
    font-family: "raleway-semibold", sans-serif;
}
.row-mini-samples > div:nth-child(1) div article{
    display: none; /* this will change */
}
.row-mini-samples > div:nth-child(2), 
.row-mini-samples > div:nth-child(3){
    width: 20%;
    text-align: center;
}
.row-mini-samples > div:nth-child(2) label button{
    border: 0;
    background-color: transparent;
    color: #0099ff;
}

@media screen and (max-width: 834px) {
    
    .row-mini-samples{
        width: 100%;
        margin: 5px auto;
    }
    .row-mini-samples > div{
        margin: 4px 0;
    }
    .row-mini-samples > div label{
        font-size: 13px;
    }
    .row-mini-samples > div:nth-child(1){
        width: 60%;
    }
    .row-mini-samples > div:nth-child(1) a{
        width: 26%;
        height: 100px;
    }
    .row-mini-samples > div:nth-child(1) div{
        width: 72%;
    }
    .row-mini-samples > div:nth-child(1) div h6{
        margin-bottom: 5px;
        font-size: 13px;
        line-height: 14px;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
    .row-mini-samples > div:nth-child(1) div p{
        margin-bottom: 5px;
        font-size: 13px;
    }
    .row-mini-samples > div:nth-child(1) div article{
        display: none; /* this will change */
    }
    .row-mini-samples > div:nth-child(2), 
    .row-mini-samples > div:nth-child(3){
        width: 15%;
    }
}

@media screen and (max-width: 414px) {

    .row-mini-samples{
        width: 100%;
        margin: 5px auto;
    }
    .row-mini-samples > div{
        margin: 4px 0;
    }
    .row-mini-samples > div label{
        font-size: 13px;
    }
    .row-mini-samples > div:nth-child(1){
        width: 98%;
    }
    .row-mini-samples > div:nth-child(1) a{
        width: 32%;
        height: 110px;
    }
    .row-mini-samples > div:nth-child(1) div{
        width: 66%;
    }
    .row-mini-samples > div:nth-child(1) div h6{
        margin-bottom: 5px;
        font-size: 13px;
        line-height: 14px;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2; 
    }
    .row-mini-samples > div:nth-child(1) div p{
        margin-bottom: 5px;
        font-size: 12px;
    }
    .row-mini-samples > div:nth-child(1) div article{
        display: block; /* this will change */
    }
    .row-mini-samples > div:nth-child(2), 
    .row-mini-samples > div:nth-child(3){
        width: 0%;
        display: none;
    }
}

</style>