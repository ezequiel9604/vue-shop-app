<script setup>
import { reactive, onMounted } from 'vue';
import router from '../router/index';
import TopItemDetails from '../components/ItemDetails/TopItemDetails.vue';
import ColumnMediumSample from '../components/SearchResults/ColumnMediumSample.vue';
import ItemButtonSelection from '../components/ItemDetails/ItemButtonSelection.vue';
import ItemAddComment from '../components/ItemDetails/ItemAddComment.vue';
import ItemDisplayComments from '../components/ItemDetails/ItemDisplayComments.vue';
import { GetById } from '../services/Item';
import Comments from '../assets/data/Comments';
//import { GetByItemId } from '../services/Comment';

const url = router.currentRoute.value.query;

const props = defineProps({ 
  items: Array, 
  client: Object 
});

const state = reactive({
  items: [],
  comments: [],
  selectedItem: null,
  selectedSection: 0
});

onMounted(async () => {
  if (props.items.length !== 0) {
    state.selectedItem = await GetById(url.itemId);
  }
  else {
    state.selectedItem = await GetById(url.itemId);
  }
    
  //state.comments = await GetByItemId(url.itemId);
  state.comments = Comment;
});

const changeSelectedSection = (value) => {
  state.selectedSection = value;
};

</script>
<template>

    <div class="item-details" v-if="state.selectedItem != null">

        <TopItemDetails 
            :items="props.items"
            :title="state.selectedItem.title"
            :quality="state.selectedItem.quality"
            :category="state.selectedItem.category"
            :images="state.selectedItem.imageDtos"
            :subitems="state.selectedItem.subItemDtos"
            />

        <div class="bottom-item-details">

            <div class="bottom-item-details-content">

                <div class="item-details-description-comment">

                    <ItemButtonSelection 
                        :selected="state.selectedSection" 
                        :changeSelected="changeSelectedSection"
                        :commentsLength="Comments.length"
                        />

                    <div :style="{ display: state.selectedSection == 0? 'block':'none'}" 
                        class="item-details-description-content">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam itaque ipsam qui 
                            molestiae eveniet deleniti debitis possimus culpa suscipit id, quas eius provident iusto 
                            sed corporis cupiditate ullam, quas eius provident iusto sed corporis cupiditate ullam.
                            Voluptates totam itaque ipsam qui.</p>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus velit ratione 
                            corporis ut consequuntur consectetur maxime est. Consequuntur, dolor? Molestias beatae 
                            quas praesentium cumque doloremque eum dolor vero? Id. Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. Atque illum tempora at aspernatur magni aut, autem laboriosam,
                            culpa minima et molestias pariatur dignissimos provident. Tempore atque illo deleniti et ipsum.</p>
                        
                        <ul>
                            <li><strong>Lorem ipsum dolor:</strong> maiores ducimus velit ratione</li>
                            <li><strong>Lorem ipsum dolor:</strong> maiores ducimus velit ratione</li>
                            <li><strong>Lorem ipsum dolor:</strong> maiores ducimus velit ratione</li>
                            <li><strong>Lorem ipsum dolor:</strong> maiores ducimus velit ratione</li>
                            <li><strong>Lorem ipsum dolor:</strong> maiores ducimus velit ratione</li>
                            <li><strong>Lorem ipsum dolor:</strong> maiores ducimus velit ratione</li>
                            <li><strong>Lorem ipsum dolor:</strong> maiores ducimus velit ratione</li>
                            <li><strong>Lorem ipsum dolor:</strong> maiores ducimus velit ratione</li>
                        </ul>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam itaque ipsam qui 
                            molestiae eveniet deleniti debitis possimus culpa suscipit id, quas eius provident iusto 
                            sed corporis cupiditate ullam.</p>

                    </div>

                    <div :style="{ display: state.selectedSection == 1? 'block':'none'}" class="item-details-comment-content">

                        <ItemAddComment 
                            :itemid="url.itemId"
                            :clientid="props.client.id"
                            :image="props.client.imagePath" />

                        <ItemDisplayComments :comments="Comments" />

                    </div>
                    
                </div>

                <div class="item-details-items-recommendations">

                    <div class="item-details-items-recommendations-content">

                        <ColumnMediumSample v-for="item in props.items.slice(0,3)" 
                            :id="item.id"
                            :descount="item.subItemDtos[1].descount"
                            :title="item.title"
                            :price="item.subItemDtos[1].price"
                            :images="item.imageDtos" 
                            :key="item.id" />

                    </div>              

                </div>

            </div>

        </div>

    </div>

</template>
<style>

.bottom-item-details{
    width: 100%;
    box-sizing: border-box;
    background-color: #e6e6e6;
    overflow: hidden;
}
.bottom-item-details-content{
    width: 80%;
    margin: 20px auto;
    box-sizing: border-box;
    overflow: hidden;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.item-details-description-comment{
    width: 80%;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 4px;
    overflow: hidden;
}

.item-details-description-content{
    width: 90%;
    margin: 40px auto;
    box-sizing: border-box;
    overflow: hidden;
}
.item-details-description-content p{
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    line-height: 22px;
}
.item-details-description-content ul{
    margin-bottom: 20px;
    box-sizing: border-box;
}
.item-details-description-content ul li{
    width: fit-content;
    margin-bottom: 20px;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
}
.item-details-description-content ul li strong{
    font-weight: bold;
}

.item-details-items-recommendations{
    background-color: #ffffff;
    width: 18%;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 4px;
    overflow: hidden;
}
.item-details-items-recommendations-content{
    width: fit-content;
    margin: 30px auto;
}
.item-details-comment-content{
    width: 90%;
    margin: 40px auto;
    box-sizing: border-box;
    overflow: hidden;
}

@media screen and (max-width: 834px) {
    
    .bottom-item-details-content{
        width: 90%;
        margin: 10px auto;
    
        display: block;
    }

    .column-medium-samples:last-child{
        display: block;
    }
    
    .item-details-description-comment{
        width: 100%;
    }

    .item-details-description-content{
        margin: 15px auto;
    }
    .item-details-description-content p{
        margin-bottom: 15px;
        font-size: 13px;
        line-height: 20px;
    }
    .item-details-description-content ul{
        margin-bottom: 15px;
    }
    .item-details-description-content ul li{
        margin-bottom: 15px;
        font-size: 13px;
    }

    .item-details-items-recommendations{
        width: 100%;
        margin:10px 0;
    }
    .item-details-items-recommendations-content{
        width:80%;
        margin: 10px auto;

        display: flex;
        justify-content: space-between;
        align-self: center;
    }

    .item-details-comment-content{
        width: 92%;
        margin: 30px auto;
    }

}

@media screen and (max-width: 414px) {

    .column-medium-samples:last-child{
        display: none;
    }
    
    .item-details-description-content{
        width: 85%;
        margin: 20px auto;
    }
    .item-details-description-content p{
        margin-bottom: 15px;
        font-size: 12px;
        line-height: 18px;
    }
    .item-details-description-content ul{
        margin-bottom: 15px;
    }
    .item-details-description-content ul li{
        margin-bottom: 15px;
        font-size: 12px;
    }

    .item-details-items-recommendations-content{
        width:75%;
    }

    .item-details-comment-content{
        width: 95%;
        margin: 20px auto;
    }

}

</style>
