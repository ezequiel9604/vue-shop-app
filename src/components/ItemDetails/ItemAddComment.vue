<script setup>
import { reactive } from 'vue';
import { SaveComment } from '../../apis/Comments';
import ManImage from '../../assets/imgs/users/placeholder-man.png';

const props = defineProps({
    image: String,
    itemId: String,
})

const state = reactive({
    inputComment: "",
    imagePath: ""
});

if(props.image != undefined){
    import(`../../assets/imgs/users/${props.image}`)
    .then((value)=>{
        state.imagePath = value.default;
    })
    .catch((error)=>{
        console.log(error);
    })
}

const submitComment = async () => {
    console.log("submitting the comment.")
    //await SaveComment(props.itemId, state.inputComment);
}

</script>
<template>
    <div class="item-details-comment-content-addcomment">
        <figure>
            <img v-if="props.image" :src="state.imagePath" alt="" />
            <img v-else :src="ManImage" alt="" />
        </figure>
        <input v-model="state.inputComment" type="text" placeholder="Add a comment" />
        <button @click="submitComment">Comment</button>
    </div>
</template>
<style>

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

@media screen and (max-width: 834px) {
    
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

}

@media screen and (max-width: 414px) {
    
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

}

</style>