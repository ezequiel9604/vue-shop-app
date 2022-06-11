<script setup>
import { reactive, computed, onMounted } from 'vue';
import router from '../router';
import store from '../store';
import FilterResultSidebar from '../components/SearchResults/FilterResultSidebar.vue';
import RowLargeSample from '../components/SearchResults/RowLargeSample.vue';
import Pagination from '../components/SearchResults/Pagination.vue';
import ColumnMediumSample from '../components/SearchResults/ColumnMediumSample.vue';
import FilterHorizontalSidebar from '../components/SearchResults/FilterHorizontalSidebar.vue';
import FilterResultHiddenSidebar from '../components/SearchResults/FilterResultHiddenSidebar.vue';
import Loading from '../components/SearchResults/Loading.vue';
import { getAllColorsFromItems, filterItemsByAll, getSetsOfItems } from '../services/Item';
import { getAllItems } from '../apis/Items';

const url = router.currentRoute.value.query;

const props = defineProps({ 
    client: Object,
    items: Array 
});

const state = reactive({
    items: [],
    minPrice: null,
    maxPrice: null,
    selectedSet: 1,
    quality: 5,
 
    states: [],
    sizes: [],
    capacities: [],
    departments: [],
    selectedColors: [],

    isHiddenSidebarOpen: false,

    isOffered: url.offered == "yes"? true : false,
    category: url.category == undefined? "all": url.category,
});

onMounted(async () => {
    if(props.items.length != 0)
        state.items = props.items;
    else
        state.items = await getAllItems();
        
})

const getItemsColors = computed(() => {
    return getAllColorsFromItems(state.items);
});

const getCategory = computed(()=>{
    const cat = store.state.categoryItem;
    return cat != undefined? cat.toLowerCase():"all";
})


const changeMaxAndMinPrice = (min, max) => {
    state.minPrice = min;
    state.maxPrice = max;
}

const changeSelectedColors = (isChecked, value) => {
    let newSet = new Set(state.selectedColors);
    if(isChecked) newSet.add(value);
    else newSet.delete(value);
    
    state.selectedColors = Array.from(newSet);
}

const changeFilterSState = (type, value) => {

    if(type=="quality")
        state.quality = value;
    else if(type=="offer")
        state.isOffered = !state.isOffered;
    else if(type=="state")
        state.states = value;
    else if(type=="size")
        state.sizes = value;
    else if(type=="capacity")
        state.capacities = value;
    else if(type=="set")
        state.selectedSet = value;
    else if(type=="department")
        state.departments = value; 
    else if(type=="quality")
        state.quality = value;
    else if(type=="hiddenSidebar")
       state.isHiddenSidebarOpen = !state.isHiddenSidebarOpen;

}

const getFilteredItems = computed(() => {
    return filterItemsByAll(state.items, store.state.searchText, state.isOffered, state.maxPrice, state.quality,
        state.states, state.selectedColors, store.state.categoryItem);
});

const getItemsSets = computed(() => {
    return getSetsOfItems(getFilteredItems.value, 7);
});


</script>
<template>

    <FilterResultHiddenSidebar 
        :onIsHiddenSidebarOpen="state.isHiddenSidebarOpen"
        :category="state.category" 
        :state="state.states" 
        :size="state.sizes" 
        :capacity="state.capacities" 
        :department="state.departments"

        :minPrice="state.minPrice" 
        :maxPrice="state.maxPrice" 
        :colors="getItemsColors"
        :selectedColors="state.selectedColors"
        :offered="state.isOffered" 
        :quality="state.quality" 
        :onChangeMaxAndMinPrice="changeMaxAndMinPrice"
        :onChangeSelectedColors="changeSelectedColors"
        :onChangeFilterSState="changeFilterSState"
        />

    <div class="category-search-results">

        <FilterResultSidebar 
            :category="getCategory" 
            :state="state.states" 
            :size="state.sizes" 
            :capacity="state.capacities" 
            :department="state.departments"
            :onChangeFilterSState="changeFilterSState"
            />

        <div class="category-search-results-content">

            <div class="filter-results-hidden-sidebar-button">
                <button @click="() => changeFilterSState('hiddenSidebar', null)">Open filter</button>
            </div>

            <FilterHorizontalSidebar 
                :minPrice="state.minPrice" 
                :maxPrice="state.maxPrice" 
                :colors="getItemsColors"
                :offered="state.isOffered" 
                :quality="state.quality" 
                :onChangeMaxAndMinPrice="changeMaxAndMinPrice"
                :onChangeSelectedColors="changeSelectedColors"

                :onChangeFilterSState="changeFilterSState"
                />

            <div class="category-search-results-content-sample-content">

                <Loading v-if="getFilteredItems.length == 0" />

                <RowLargeSample v-for="item in getFilteredItems.slice((state.selectedSet * 7)-7,
                    state.selectedSet*7)" 
                    :id="item.id"
                    :descount="item.subItemDtos[1].descount"
                    :images="item.imageDtos"
                    :title="item.title"
                    :price="item.subItemDtos[1].price"
                    :quality="item.quality"
                    :key="item.id" 
                    />

                <Pagination 
                    :sets="getItemsSets" 
                    :selectedset="state.selectedSet"
                    :onChangeFilterSState="changeFilterSState" 
                    />

            </div>

            <div class="category-search-results-most-sold-samples">

                <div class="category-search-results-most-sold-samples-content">

                    <ColumnMediumSample v-for="item in state.items.slice(0,4)" 
                        :id="item.id"
                        :descount="item.subItemDtos[1].descount"
                        :title="item.title"
                        :price="item.subItemDtos[1].price"
                        :images="item.imageDtos" 
                        :key="item.id" 
                        />
            
                </div>

            </div>

        </div>

    </div>

</template>
<style>

.category-search-results{
    width: 100%;
    box-sizing: border-box;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #e6e6e6;
}

.category-search-results-content{
    width: 76%;
    box-sizing: border-box;
    margin-right: 2%;
    background-color: transparent;
}

.filter-results-hidden-sidebar-button{
    width: 100%;
    margin: 10px auto;
    box-sizing: border-box;
    justify-content: left;
    background-color: transparent;
    display: none; /* this will change */
}
.filter-results-hidden-sidebar-button button{
    border: 1px solid #dddddd;
    width: fit-content;
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #333333;
    padding: 8px 20px;
    background-color: #ffffff;
    border-radius: 50px;
}

.category-search-results-content-sample-content{
    width: 100%;
    margin: 10px auto;
    box-sizing: border-box;

    background-color: #ffffff;
    overflow:hidden;
    border-radius: 6px;
}

.category-search-results-most-sold-samples{
    width: 100%;
    margin: 10px auto;
    margin-bottom: 20px;
    box-sizing: border-box;

    background-color: #ffffff;
    overflow:hidden;
    border-radius: 4px;
}
.category-search-results-most-sold-samples-content{
    width: 90%;
    margin: 20px auto;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

@media screen and (max-width: 834px) {

    .filter-results-hidden-sidebar-button{
        display: flex; /*this will change*/
    }
    
    .category-search-results{
        justify-content: center;
    }
    .category-search-results-content{
        width: 90%;
        margin-right: 0%;
    }
    
    .category-search-results-most-sold-samples{
        margin-bottom: 15px;
    }
    .category-search-results-most-sold-samples-content{
        margin: 15px auto;
    }

}

@media screen and (max-width: 414px) {

    .filter-results-sidebar{
        display: none;
    }

    .filter-results-hidden-sidebar-button{
        display: flex; /*this will change*/
    }
    .filter-results-hidden-sidebar-button button{
        font-size: 13px;
        padding: 6px 15px;
    }

    .filter-results-horizontal-sidebar{
        display: none;
    }

    .category-search-results{
        justify-content: center;
    }
    .category-search-results-content{
        width: 95%;
    }
    
    .category-search-results-most-sold-samples{
        margin-bottom: 15px;
    }
    .category-search-results-most-sold-samples-content{
        width: 85%;
        margin: 10px auto;
    }

}

</style>