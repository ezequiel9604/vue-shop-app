<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import ColumnLargeSample from './ColumnLargeSample.vue';

const props = defineProps({ items: Array });

const getItemsInOffer = computed(() => {
    const itemsInOffer = [...props.items.filter((current) => {
        for (let i = 0; i < current.subItemDtos.length; i++) {

            if(current.subItemDtos[i].descount > 0)
                return current;
        }
    })];
    return itemsInOffer.slice(0, 6);
});

</script>
<template>

    <div class="items-in-offer">
        <h2 class="items-in-offer-subtitles">Items in offer</h2>
        <div class="items-in-offer-content">
            <ColumnLargeSample v-for="item in getItemsInOffer" 
                :id="item.id"
                :title="item.title" 
                :price="item.subItemDtos[0].price" 
                :images="item.imageDtos" 
                :descount="item.subItemDtos[0].descount"
                :key="item.id" 
                />
        </div>
        <RouterLink to="/searchResults?offered=yes" 
            class="items-in-offer-see-more-button">See more</RouterLink>
    </div>

</template>
<style>

.items-in-offer{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
}
.items-in-offer-subtitles{
    width: 85%;
    margin: 10px auto;
    margin-top: 30px;

    text-align: center;
    font-family: "raleway-semibold", sans-serif;
    font-size: 18px;
    color: #333333;
}

.items-in-offer-content{
    width: 85%;
    margin: 20px auto;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

@media screen and (max-width: 834px) {
    
    .items-in-offer-subtitles{
        width: 85%;
        font-size: 16px;
    }

    .items-in-offer-content{
        width: 80%;
    }
}

@media screen and (max-width: 414px) {

    .items-in-offer-content{
        width: 90%;
        justify-content: space-around;
    }

    .items-in-offer-see-more-button{
        margin: 10px auto;
        margin-bottom: 20px;
        font-size: 12px;
        padding: 4px 10px;
    }
}

</style>