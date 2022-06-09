<script setup>
import { reactive } from 'vue';
import router from '../router/index';
import TopItemDetails from '../components/ItemDetails/TopItemDetails.vue';
import ColumnMediumSample from '../components/SearchResults/ColumnMediumSample.vue';
import ManImage from '../assets/imgs/users/placeholder-man.png';
import Comments from '../assets/data/Comments';
import { GetItemById } from '../services/Item';

const url = router.currentRoute.value.query;

const props = defineProps({ items: Array });

const state = reactive({
    selectedItem: GetItemById(props.items, url.itemId),
    selectedSection: 0,
})

const changeSelectedSection = (num) => {
    state.selectedSection = num;
}

</script>
<template>

    <div class="item-details">

        <TopItemDetails 
            :items="props.items"
            :title="state.selectedItem.title"
            :images="state.selectedItem.imageDtos"
            :quality="state.selectedItem.quality"
            :category="state.selectedItem.category"
            :subitems="state.selectedItem.subItemDtos"
            />

        <div class="bottom-item-details">

            <div class="bottom-item-details-content">

                <div class="item-details-description-comment">
                    <div class="item-details-description-comment-header">

                        <button v-if="state.selectedSection == 0" @click="() => changeSelectedSection(0)" 
                            class="item-details-description-comment-header-button 
                            item-details-description-comment-header-button-active">Description</button>
                        <button v-if="state.selectedSection == 1" @click="() => changeSelectedSection(0)" 
                            class="item-details-description-comment-header-button">Description</button>

                        <button v-if="state.selectedSection == 1" @click="() => changeSelectedSection(1)" 
                            class="item-details-description-comment-header-button 
                            item-details-description-comment-header-button-active">Comments ({{ Comments.length }})</button>
                        <button v-if="state.selectedSection == 0" @click="() => changeSelectedSection(1)" 
                            class="item-details-description-comment-header-button">Comments ({{ Comments.length }})</button>
                    </div>

                    <div :style="{ display: state.selectedSection == 0? 'block':'none'}" class="item-details-description-content">

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

                        <div class="item-details-comment-content-addcomment">
                            <figure>
                                <img :src="ManImage" alt="" />
                            </figure>
                            <input type="text" placeholder="Add a comment" />
                            <button>Comment</button>
                        </div>

                        <div v-for="comment in Comments" 
                            class="item-details-comment-content-comments" 
                            :key="comment.id">
                            <figure>
                                <img :src="comment.image" alt="" />
                            </figure>
                            <div>
                                <h5>{{ comment.name }}</h5>
                                <h6>{{ comment.pubdate.toLocaleDateString() }}</h6>
                            </div>
                            <p>{{ comment.text }}</p>
                        </div>

                    </div>
                    
                </div>

                <div class="item-details-items-recommendations">

                    <div class="item-details-items-recommendations-content">

                        <ColumnMediumSample v-for="item in props.items.slice(0,3)" 
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
.item-details-description-comment-header{
    width: 100%;
    box-sizing: border-box;
    background-color: #dddddd;

    display: flex;
}
.item-details-description-comment-header-button{
    width: fit-content;
    box-sizing:border-box ;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    padding: 15px 25px;
    color: #333333;

    background-color: #dddddd;
    border: 2px solid #dddddd;
}
.item-details-description-comment-header-button:last-child{
    border-right:2px solid #808080 ;
    border-left: 2px solid #808080;
}
.item-details-description-comment-header-button:hover{
    background-color: #ffffff;
    border-left: 2px solid #333333;
    border-top: 2px solid #333333;
    border-right: 2px solid #333333;
    border-bottom: 2px solid #ffffff;
}
.item-details-description-comment-header-button-active{
    background-color: #ffffff;
    border-left: 2px solid #333333;
    border-top: 2px solid #333333;
    border-right: 2px solid #333333;
    border-bottom: 2px solid #ffffff;
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
.item-details-comment-content-addcomment{
    width: 95%;
    box-sizing: border-box;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
}
.item-details-comment-content-addcomment figure{
    width: 50px;
    height: 48px;
    box-sizing: border-box;
    margin-right: 2%;

    background-color: #dddddd;
    border-radius: 50%;
}
.item-details-comment-content-addcomment figure img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
}
.item-details-comment-content-addcomment input{
    width: 80%;
    box-sizing: border-box;
    margin-right: 3%;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 6px 8px;

    border: 1px solid #dddddd;
    border-radius: 4px;
}
.item-details-comment-content-addcomment button{
    width: fit-content;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 6px 16px;

    border: 1px solid #999999;
    background-color: #fafafa;
    border-radius: 4px;
}

.item-details-comment-content-comments{
    width: 90%;
    box-sizing: border-box;
    margin: 20px 0;
    margin-left: 6%;

    display: flex;
    flex-wrap: wrap;
}

.item-details-comment-content-comments figure{
    width: 45px;
    height: 45px;
    box-sizing: border-box;
    margin-right: 2%;

    background-color: #dddddd;
    border-radius: 50%;

}
.item-details-comment-content-comments figure img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
}
.item-details-comment-content-comments div{
    width: 90%;
    box-sizing: border-box;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.item-details-comment-content-comments div h5,
.item-details-comment-content-comments div h6{
    width: 70%;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    cursor: default;
}
.item-details-comment-content-comments div h5{
   
    font-family: "raleway-semibold", sans-serif;
}
.item-details-comment-content-comments p{
    width: 100%;
    box-sizing: border-box;
    margin: 15px 0;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    line-height: 20px;
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
    .item-details-description-comment-header button{
        font-size: 13px;
        padding: 8px 30px;
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
    .item-details-comment-content-addcomment{
        width: 95%;
        margin-bottom:30px;
    }
    .item-details-comment-content-addcomment figure{
        width: 45px;
        height: 42px;
    }
    .item-details-comment-content-addcomment input{
        font-size: 13px;
        padding: 4px 6px;
    }
    .item-details-comment-content-addcomment button{
        font-size: 13px;
        padding: 4px 12px;
    }
    .item-details-comment-content-comments{
        width: 90%;
        margin: 20px 0;
        margin-left: 5%;
    }
    .item-details-comment-content-comments figure{
        width: 40px;
        height: 40px;
    }
    .item-details-comment-content-comments div h5,
    .item-details-comment-content-comments div h6{
        width: 70%;
        font-size: 13px;
    }
    .item-details-comment-content-comments p{
        margin: 10px 0;
        font-size: 13px;
        line-height: 18px;
    }

}

@media screen and (max-width: 414px) {

    .column-medium-samples:last-child{
        display: none;
    }
    
    .item-details-description-comment-header button{
        width: 50%;
        font-size: 12px;
        padding: 8px 0px;
    }
    .item-details-description-comment-header button:last-child{
        border-right-color: transparent;
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
    .item-details-comment-content-addcomment{
        width: 100%;
        margin-bottom: 20px;
    }
    .item-details-comment-content-addcomment figure{
        width: 30px;
        height: 30px;
    }
    .item-details-comment-content-addcomment input{
        width: 65%;
        font-size: 11px;
        padding: 2px 4px;
    }
    .item-details-comment-content-addcomment button{
        font-size: 11px;
        padding: 2px 8px;
    }
    .item-details-comment-content-comments{
        width: 95%;
        margin: 15px auto;
        margin-left: 0%;
    }
    .item-details-comment-content-comments figure{
        width: 25px;
        height: 25px;
    }
    .item-details-comment-content-comments div h5,
    .item-details-comment-content-comments div h6{
        width: 70%;
        font-size: 12px;
    }
    .item-details-comment-content-comments p{
        margin: 8px 0;
        font-size: 11px;
        line-height: 16px;
    }
}

</style>