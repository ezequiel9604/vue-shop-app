<script setup>
import Pagination from '../components/SearchResultsComponents/Pagination.vue';
import RowExtraLargeSample from '../components/WishListComponents/RowExtraLargeSample.vue';
import { Items } from '../assets/data/Items';

</script>
<template>
    <div class="sections">

        <div class="sections-headers">
            <h2>Wish's list</h2>
        </div>

        <div class="wish-list-content">

            <div class="wish-list-content-filter">
                <div>
                    <input type="text" placeholder="Item's name here..." />
                    <i class="bi bi-search"></i>
                </div>
                <div>
                    <button class="wish-list-content-filter-removeall-btn">Remove all</button>
                </div>
            </div>

            <div class="wish-list-content-samples-content">

                <RowExtraLargeSample v-for="i in Items.slice(0, 3)"
                    :title="i.title"
                    :images="i.images"
                    :descount="i.descount"
                    :quality="i.quality"
                    :price="i.price"
                    :stock="i.stock"  
                    :key="i.id" />

            </div>

            <Pagination :sets="3" />

        </div>

    </div>
</template>
<style>


.wish-list-content{
    width: 80%;
    box-sizing: border-box;
    margin: 60px auto;
}

/* ////////////////////////////////////////////////////// */
/* ///            wish list content filter            /// */ 
/* ////////////////////////////////////////////////////// */
.wish-list-content-filter{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #dddddd;
}
.wish-list-content-filter div{
    box-sizing: border-box;
    position: relative;
}
.wish-list-content-filter div:first-child{
    width: 30%;
}
.wish-list-content-filter div:first-child input{
    width: 99%;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    border-radius: 6px;

    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
    padding: 4px 8px;
}
.wish-list-content-filter div:first-child i{
    font-size: 18px;
    color: #cccccc;
    background-color: #ffffff;
    cursor: pointer;
    position: absolute;
    right: 2%;
    top: 20%;
    padding: 0 10px;
}
.wish-list-content-filter div:last-child button{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    color: #0099ff;
    border: none;
    background-color: transparent;
}

@media screen and (max-width: 834px) {
    
    .wish-list-header{
        width: 70%;
        margin-top: 30px;
    }
    .wish-list-header h2{
        padding-bottom: 20px;
        font-size: 28px;
    }
    .wish-list-content{
        width: 90%;
        margin: 40px auto;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///            wish list content filter            /// */ 
    /* ////////////////////////////////////////////////////// */
    .wish-list-content-filter{
        margin-bottom: 20px;
    }
    .wish-list-content-filter div:first-child{
        width: 40%;
    }
    .wish-list-content-filter div:first-child input{
        border-radius: 6px;
        font-size: 14px;
        padding: 4px 8px;
    }
    .wish-list-content-filter div:first-child i{
        font-size: 16px;
        right: 2%;
        top: 20%;
        padding: 0 10px;
    }
    .wish-list-content-filter div:last-child button{
        font-size: 14px;
    }

}

@media screen and (max-width: 414px) {
    
    .wish-list-header{
        margin-top: 20px;
    }
    .wish-list-header h2{
        padding-bottom: 15px;
        padding-top: 10px;
        font-size: 20px;
    }
    .wish-list-content{
        width: 90%;
        margin: 20px auto;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///            wish list content filter            /// */ 
    /* ////////////////////////////////////////////////////// */
    .wish-list-content-filter{
        margin-bottom: 20px;
    }
    .wish-list-content-filter div:first-child{
        width: 60%;
    }
    .wish-list-content-filter div:first-child input{
        font-size: 12px;
        padding: 4px 8px;
    }
    .wish-list-content-filter div:first-child i{
        font-size: 14px;
        right: 2%;
        top: 20%;
        padding: 0 10px;
    }
    .wish-list-content-filter div:last-child button{
        font-size: 12px;
    }

}

</style>