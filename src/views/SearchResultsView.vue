<script setup>
import { ref, reactive, computed } from 'vue';
import FilterResultSidebar from '../components/SearchResultsComponents/FilterResultSidebar.vue';
import RowLargeSample from '../components/SearchResultsComponents/RowLargeSample.vue';
import Pagination from '../components/SearchResultsComponents/Pagination.vue';
import ColumnMediumSample from '../components/SearchResultsComponents/ColumnMediumSample.vue';
import FilterHorizontalSidebar from '../components/SearchResultsComponents/FilterHorizontalSidebar.vue';
import FilterResultHiddenSidebar from '../components/SearchResultsComponents/FilterResultHiddenSidebar.vue';
import Items from "../assets/data/Items";

const isHiddenSidebarOpen = ref(false);

const state = reactive({
    items: Items,
    minPrice: null,
    maxPrice: null,
    quality: 5,
    selectedColors: [],
    isOffered: false,

    states: [],
    sizes: [],
    capacities: [],
    departments: [],

    selectedSet: 1
});


const getItemsColors = computed(() => {
    let colors = new Set();
    state.items.forEach((current) => {
        colors.add(current.color);
    });
    return Array.from(colors);
});

const changeMaxAndMinPrice = (min, max) => {
    state.minPrice = min;
    state.maxPrice = max;
}

const changeSelectedColors = (isChecked, value) => {
    let newSet = new Set(state.selectedColors);
    if(isChecked)
        newSet.add(value);
    else
        newSet.delete(value);
    
    state.selectedColors = Array.from(newSet);
}

const changeQuality = (value) => {
    state.quality= value;
}

const changeIsOffered = () => {
    state.isOffered = !state.isOffered;
}

const changeStates = (value) => {
    state.states = value;
}

const changeSizes = (value) => {
    state.sizes = value;
}

const changeCapacities = (value) => {
    state.capacities = value;
}

const changeDepartments = (value) => {
    state.departments = value;
}

const changeSelectedSet = (value) => {
    state.selectedSet = value;
}

const changeHiddenSidebarStatus = () => {
    isHiddenSidebarOpen.value = !isHiddenSidebarOpen.value;
}

const getFilteredItems = computed(() => {

    let arr;

    // adding state filter
    arr = [...state.items].filter((current) => {
        return (state.isOffered)? current.descount > 0 : current.descount >= 0;
    });

    // adding price filter
    if(state.maxPrice > 0){
        arr = [...arr].filter((current) => {
            if(current.price >= 0 && current.price <= state.maxPrice)
                return current;
        });
    }
    
    // adding quality filter
    arr = [...arr].filter((current) => {
        return current.quality <= state.quality;
    });

    // adding states filter
    if(state.states.length != 0){
        arr = [...arr].filter((current) => {
        
            for (let i = 0; i < state.states.length; i++) {
                if(current.state == state.states[i])
                    return current;
            }
        });
    }

    // adding color filter
     if(state.selectedColors.length != 0){
        arr = [...arr].filter((current) => {
        
            for (let i = 0; i < state.selectedColors.length; i++) {
                if(current.color == state.selectedColors[i])
                    return current;
            }
        });
    }

    return arr;
});


const getItemsSets = computed(() => {
    let sets = getFilteredItems.value.length / 7;

    if(sets < 1)
        return 1;

    if(sets > parseInt(sets))
        return parseInt(sets) + 1;
    
    return parseInt(sets);
});


</script>
<template>

    <FilterResultHiddenSidebar 
        :onIsHiddenSidebarOpen="isHiddenSidebarOpen" 
        :onChangeHiddenSidebarStatus="changeHiddenSidebarStatus"
        :category="state.items[3].category" 
        :state="state.states" 
        :size="state.sizes" 
        :capacity="state.capacities" 
        :department="state.departments"
        :onChangeState="changeStates"
        :onChangeSize="changeSizes"
        :onChangeDepartment="changeDepartments"
        :onChangeCapacity="changeCapacities"  

        :minPrice="state.minPrice" 
        :maxPrice="state.maxPrice" 
        :colors="getItemsColors"
        :offered="state.isOffered" 
        :quality="state.quality" 
        :onChangeMaxAndMinPrice="changeMaxAndMinPrice"
        :onChangeOffered="changeIsOffered"
        :onChangeSelectedColors="changeSelectedColors"
        :onChangeQuality="changeQuality"
        />

    <div class="category-search-results">

        <FilterResultSidebar 
            :category="state.items[0].category" 
            :state="state.states" 
            :size="state.sizes" 
            :capacity="state.capacities" 
            :department="state.departments"
            :onChangeState="changeStates"
            :onChangeSize="changeSizes"
            :onChangeDepartment="changeDepartments"
            :onChangeCapacity="changeCapacities"
            />

        <div class="category-search-results-content">

            <div class="filter-results-hidden-sidebar-button">
                <button @click="changeHiddenSidebarStatus">Open filter</button>
            </div>

            <FilterHorizontalSidebar 
                :minPrice="state.minPrice" 
                :maxPrice="state.maxPrice" 
                :colors="getItemsColors"
                :offered="state.isOffered" 
                :quality="state.quality" 
                :onChangeMaxAndMinPrice="changeMaxAndMinPrice"
                :onChangeOffered="changeIsOffered"
                :onChangeSelectedColors="changeSelectedColors"
                :onChangeQuality="changeQuality"
                />

            <div class="category-search-results-content-sample-content">

                <RowLargeSample v-for="item in getFilteredItems.slice((state.selectedSet * 7)-7,state.selectedSet*7)" 
                    :descount="item.descount"
                    :images="item.images"
                    :title="item.title"
                    :price="item.price"
                    :quality="item.quality"
                    :key="item.id" 
                    />

                <Pagination 
                    :sets="getItemsSets" 
                    :selectedPage="state.selectedSet"
                    :onChangeSelectedSet="changeSelectedSet" />

            </div>

            <div class="category-search-results-most-sold-samples">

                <div class="category-search-results-most-sold-samples-content">

                    <ColumnMediumSample v-for="item in state.items.slice(0,4)" 
                        :descount="item.descount"
                        :title="item.title"
                        :price="item.price"
                        :images="item.images" 
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

/* ////////////////////////////////////////////////////// */
/* ///      right category search results             /// */ 
/* ////////////////////////////////////////////////////// */
.category-search-results-content{
    width: 76%;
    box-sizing: border-box;
    margin-right: 2%;
    background-color: transparent;
}

/* ////////////////////////////////////////////////////// */
/* ///     filter results hidden sidebar button       /// */ 
/* ////////////////////////////////////////////////////// */
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

/* ////////////////////////////////////////////////////// */
/* ///       category search results sidebar          /// */ 
/* ////////////////////////////////////////////////////// */
.category-search-results-content-sample-content{
    width: 100%;
    margin: 10px auto;
    box-sizing: border-box;

    background-color: #ffffff;
    overflow:hidden;
    border-radius: 6px;
}

/* ////////////////////////////////////////////////////// */
/* ///   category search results most sold samples    /// */ 
/* ////////////////////////////////////////////////////// */
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

    /* ////////////////////////////////////////////////////// */
    /* ///     filter results hidden sidebar button       /// */ 
    /* ////////////////////////////////////////////////////// */
    .filter-results-hidden-sidebar-button{
        display: flex; /*this will change*/
    }
    
    /* ////////////////////////////////////////////////////// */
    /* ///            category search results             /// */ 
    /* ////////////////////////////////////////////////////// */
    .category-search-results{
        justify-content: center;
    }
    .category-search-results-content{
        width: 90%;
        margin-right: 0%;
    }
    
    /* ////////////////////////////////////////////////////// */
    /* ///   category search results most sold samples    /// */ 
    /* ////////////////////////////////////////////////////// */
    .category-search-results-most-sold-samples{
        margin-bottom: 15px;
    }
    .category-search-results-most-sold-samples-content{
        margin: 15px auto;
    }

}

@media screen and (max-width: 414px) {

    /* ////////////////////////////////////////////////////// */
    /* ///          filter results sidebar                /// */ 
    /* ////////////////////////////////////////////////////// */
    .filter-results-sidebar{
        display: none;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///     filter results hidden sidebar button       /// */ 
    /* ////////////////////////////////////////////////////// */
    .filter-results-hidden-sidebar-button{
        display: flex; /*this will change*/
    }
    .filter-results-hidden-sidebar-button button{
        font-size: 13px;
        padding: 6px 15px;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///       filter results horizontal sidebar        /// */ 
    /* ////////////////////////////////////////////////////// */
    .filter-results-horizontal-sidebar{
        display: none;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///            category search results             /// */ 
    /* ////////////////////////////////////////////////////// */
    .category-search-results{
        justify-content: center;
    }
    .category-search-results-content{
        width: 95%;
    }
    
    /* ////////////////////////////////////////////////////// */
    /* ///   category search results most sold samples    /// */ 
    /* ////////////////////////////////////////////////////// */
    .category-search-results-most-sold-samples{
        margin-bottom: 15px;
    }
    .category-search-results-most-sold-samples-content{
        width: 85%;
        margin: 10px auto;
    }

}

</style>