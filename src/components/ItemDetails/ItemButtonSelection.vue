<script setup>

const props = defineProps({
    selected: Number,
    commentsLength:Number,
    changeSelected: Function,
})

</script>
<template>
    <div class="item-details-description-comment-header">

        <button v-if="props.selected == 0" @click="() => props.changeSelected(0)" 
            class="item-details-description-comment-header-button 
            item-details-description-comment-header-button-active">Description</button>
        <button v-if="props.selected == 1" @click="() => props.changeSelected(0)" 
            class="item-details-description-comment-header-button">Description</button>

        <button v-if="props.selected == 1" @click="() => props.changeSelected(1)" 
            class="item-details-description-comment-header-button 
            item-details-description-comment-header-button-active">Comments ({{ props.commentsLength }})</button>
        <button v-if="props.selected == 0" @click="() => props.changeSelected(1)" 
            class="item-details-description-comment-header-button">Comments ({{ props.commentsLength }})</button>
    </div>
</template>
<style>

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

@media screen and (max-width: 834px) {
    
    .item-details-description-comment-header button{
        font-size: 13px;
        padding: 8px 30px;
    }
}

@media screen and (max-width: 414px) {
    
    .item-details-description-comment-header button{
        width: 50%;
        font-size: 12px;
        padding: 8px 0px;
    }
    .item-details-description-comment-header button:last-child{
        border-right-color: transparent;
    }

}

</style>