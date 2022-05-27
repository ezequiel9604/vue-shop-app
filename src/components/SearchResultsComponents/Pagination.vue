<script setup>

const props = defineProps({
    sets: Number,
    selectedset: Number,
    onchangeselectedset: Function
});

</script>
<template>
    <div class="pagination">
        <div class="pagination-content">
            <button @click="() => props.onchangeselectedset(props.selectedset-1)"
                :disabled="props.selectedset == 1">Previous</button>    
            <button v-for="n in sets"
                @click="() => props.onchangeselectedset(n)" 
                :class=" props.selectedset == n? 'pagination-content-button-active':''" 
                :key="n">{{ n }}</button>
            <button @click="() => props.onchangeselectedset(props.selectedset+1)"
                :disabled="props.selectedset == props.sets" >Next</button>
        </div>
    </div>
</template>
<style>

.pagination{
    width: 95%;
    margin: 20px auto;
    box-sizing: border-box;
    overflow: hidden;
}
.pagination-content{
    width: fit-content;
    margin: 0px auto;
    box-sizing: border-box;
    display: flex;
}
.pagination-content button{
    box-sizing: border-box;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    color: #333333;
    border-radius: 3px;
    font-family: "raleway-medium", sans-serif;
    font-size: 14px;
    padding: 4px 6px;
    margin: 0 6px;

    display: flex;
    align-items: center;
    justify-content: center;
}
.pagination-content button:disabled{
    color: #cccccc;
}
.pagination-content .pagination-content-button-active{
    background-color: #dddddd;
    border-color: #cccccc;
}

@media screen and (max-width: 834px) {
    
    .pagination{
        margin: 15px auto;
    }  
    .pagination-content button{
        font-size: 12px;
        padding: 4px 6px;
    }

}

@media screen and (max-width: 414px) {
    
    .pagination{
        margin: 15px auto;
    }  
    .pagination-content button{
        font-size: 12px;
        font-weight: bold;
        padding: 4px 8px;
    }

}

</style>