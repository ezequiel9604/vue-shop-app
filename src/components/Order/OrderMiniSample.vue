<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { formatedNumber, calculateSubtotal } from '../../services/Item';

const props = defineProps({
  id: String,
  image: String,
  title: String,
  price: Number,
  amount: Number,
  condition: String,
  status: String,
  descount: Number
});

const state = reactive({
  imagePath: ''
});

import(`../../assets/imgs/samples/${props.image}`)
  .then((value) => {
    state.imagePath = value.default;
  })
  .catch((error) => {
    //console.log(error);
  });

</script>
<template>

    <div class="myorder-samples-content">
            <div class="myorder-mini-samples">
                <RouterLink :to="'/itemDetails?itemId='+props.id">
                    <img :src="state.imagePath" alt="" />
                </RouterLink>
                <div>
                    <h6>{{ props.title }}.</h6>
                    <p><strong>Precio:</strong> ${{ formatedNumber(props.price) }}</p>
                    <p><strong>Amount:</strong> {{ props.amount }}</p>
                    <article>
                        <p><strong>Condition:</strong> {{ props.condition }}</p>
                        <p><strong>Status:</strong> {{ props.status }}</p>
                        <p><strong>Subtotal:</strong> 
                        ${{ formatedNumber(calculateSubtotal(props.price, props.amount, props.descount)) }}</p>
                    </article>
                </div>
            </div>
            <div>
                <label>{{ props.condition }}</label>
            </div>
            <div>
                <label>{{ props.status }}</label>
            </div>
            <div>
                <label>
                    ${{ formatedNumber(calculateSubtotal(props.price, props.amount, props.descount)) }}
                </label>
            </div>
        </div>

</template>
<style>

.myorder-samples-content{
    width: 100%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-around;
    align-items: center;
}
.myorder-samples-content > div{
    margin: 10px 0;
    box-sizing: border-box;
}
.myorder-samples-content > div label{
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
}
.myorder-samples-content > div:nth-child(1){
    width: 42%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.myorder-samples-content > div:nth-child(1) a{
    width: 25%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    border-radius: 6px;
}
.myorder-samples-content > div:nth-child(1) a img{
    width: 80%;
    height: 80%;
}
.myorder-samples-content > div:nth-child(1) div{
    width: 73%;
    box-sizing: border-box;
}
.myorder-samples-content > div:nth-child(1) div h6{
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
.myorder-samples-content > div:nth-child(1) div p{
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 5px;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
}
.myorder-samples-content > div:nth-child(1) div p strong{
    font-family: "raleway-semibold", sans-serif;
}
.myorder-samples-content > div:nth-child(1) div article{
    display: none; /* this will change */
}

@media screen and (max-width: 834px) {
    
    .myorder-samples-content > div{
        margin: 8px 0;
    }
    .myorder-samples-content > div label{
        font-family: "raleway-regular", sans-serif;
        font-size: 13px;
    }

    .myorder-samples-content > div:nth-child(1){
        width: 42%;
    }
    .myorder-samples-content > div:nth-child(1) a{
        width: 30%;
        height: 80px;
    }
    .myorder-samples-content > div:nth-child(1) a img{
        width: 80%;
        height: 80%;
    }
    .myorder-samples-content > div:nth-child(1) div{
        width: 68%;
    }
    .myorder-samples-content > div:nth-child(1) div h6{
        margin-bottom: 5px;
        font-size: 11px;
        line-height: 14px;
    }
    .myorder-samples-content > div:nth-child(1) div p{
        font-size: 12px;
    }
    .myorder-samples-content > div:nth-child(1) div article{
        display: none; /* this will change */
    }

}

@media screen and (max-width: 414px){

    .myorder-samples-content > div{
        margin: 8px 0;
    }
    .myorder-samples-content > div:nth-child(2),
    .myorder-samples-content > div:nth-child(3),
    .myorder-samples-content > div:nth-child(4){
        display: none;
    }

    .myorder-samples-content > div:nth-child(1){
        width: 95%;
    }
    .myorder-samples-content > div:nth-child(1) a{
        width: 34%;
        height: 100px;
    }
    .myorder-samples-content > div:nth-child(1) a img{
        width: 80%;
        height: 80%;
    }
    .myorder-samples-content > div:nth-child(1) div{
        width: 64%;
    }
    .myorder-samples-content > div:nth-child(1) div h6{
        font-size: 11px;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2; 
    }
    .myorder-samples-content > div:nth-child(1) div p{
        font-size: 11px;
    }
    .myorder-samples-content > div:nth-child(1) div article{
        display: block; 
    }

}

</style>
