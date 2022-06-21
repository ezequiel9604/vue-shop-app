<script setup>

const props = defineProps({
    comments: Array
})

</script>
<template>
    <div v-for="comm in props.comments" class="item-details-comment-content-comments" :key="comm.id">
        <figure>
            <img :src="comm.image" alt="" />
        </figure>
        <div>
            <h5>{{ comm.name }}</h5>
            <h6>{{ comm.pubdate.toLocaleDateString() }}</h6>
        </div>
        <p>{{ comm.text }}</p>
    </div>
</template>
<style>

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