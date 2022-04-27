<script setup>

import { RouterLink } from 'vue-router';
import SidebarBrandSelection from './SidebarBrandSelection.vue';

const brandImages = [
    "http://localhost:3000/src/assets/imgs/brands/brand-1.png",
    "http://localhost:3000/src/assets/imgs/brands/brand-2.png",
    "http://localhost:3000/src/assets/imgs/brands/brand-3.png"
];

</script>
<template>

    <div class="filter-results-sidebar">
            
        <div class="filter-results-sidebar-type">
            <h4>Clothing:</h4>
            <RouterLink to="" class="filter-results-link-active">All clothing</RouterLink>
            <RouterLink to="">T-Shirts</RouterLink>
            <RouterLink to="">Pants</RouterLink>
            <RouterLink to="">Jackets</RouterLink>
            <RouterLink to="">Sweaters</RouterLink>
            <RouterLink to="">Skirts</RouterLink>
            <RouterLink to="">Caps</RouterLink>
            <RouterLink to="">Hats</RouterLink>
            <RouterLink to="">Underwears</RouterLink>
        </div>

        <div class="filter-results-sidebar-brand">
            <h4>Brands:</h4>
            <div class="filter-results-sidebar-brand-selection">

                <SidebarBrandSelection v-for="image in brandImages" 
                    :image="image" 
                    :key="image" />

            </div>  
        </div>

        <div class="filter-results-sidebar-checkbox">  
            <h4>State:</h4>
            <label for="state-new">
                <input type="checkbox" id="state-new" /> New
            </label> 
            <label for="state-used">
                <input type="checkbox" id="state-used" /> Used
            </label> 
        </div>

        <div class="filter-results-sidebar-checkbox">  
            <h4>Size:</h4>
            <label for="size-small">
                <input type="checkbox" id="size-small" /> S
            </label> 
            <label for="size-medium">
                <input type="checkbox" id="size-medium" /> M
            </label> 
            <label for="size-large">
                <input type="checkbox" id="size-large" /> L
            </label> 
            <label for="size-extraLarge">
                <input type="checkbox" id="size-extraLarge" /> XL
            </label> 
            <label for="size-extraExtraLarge">
                <input type="checkbox" id="size-extraExtraLarge" /> XXL
            </label> 
        </div>

        <div class="filter-results-sidebar-checkbox">  
            <h4>Department:</h4>
            <label for="department-men">
                <input type="checkbox" id="department-men" /> Men
            </label> 
            <label for="department-women">
                <input type="checkbox" id="department-women" /> Women
            </label> 
            <label for="department-boys">
                <input type="checkbox" id="department-boys" /> Boys
            </label> 
            <label for="department-girls">
                <input type="checkbox" id="department-girls" /> Girls
            </label> 
        </div>

    </div>

</template>

<style>


/* ////////////////////////////////////////////////////// */
/* ///          filter results sidebar                /// */ 
/* ////////////////////////////////////////////////////// */
.filter-results-sidebar{
    width: 20%;
    box-sizing: border-box;
    margin-bottom: 20px;

    position: -webkit-sticky; 
    position: sticky;
    top: 0;

    background-color: #ffffff;
    border-radius: 0 0 6px 6px;
    z-index: 0;
}

.filter-results-sidebar > div{
    width: 80%;
    box-sizing: border-box;
    margin: 10px auto;
    padding-bottom: 10px;
    overflow: hidden;
}
.filter-results-sidebar > div:last-child{
    border-color: transparent;
}
.filter-results-sidebar > div:first-child{
    padding-top: 20px;
}
.filter-results-sidebar > div h4{
    width: 100%;
    margin-bottom: 14px;
    font-family: "raleway-regular", sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: #333333;
}
.filter-results-sidebar-type a{
    display: block;
    width: fit-content;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-family: "raleway-regular", sans-serif;
    font-style: italic;
    font-size: 13px;
    color: #333333;
    padding-left: 10px;
}
.filter-results-sidebar-type a:hover{
    font-weight: bold;
}
.filter-results-link-active{
    font-weight: bold;
}

.filter-results-sidebar-brand-selection{
    width: 90%;
    margin: 0px auto;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.filter-results-sidebar-brand-selection-toggle{
    box-sizing: border-box;
    display: inline-block;
    width: 45%;
    height: 30px;
    padding: 4px;
    margin-bottom: 10px;

    position: relative;

    border: none;
    background-color: #dddddd;
    border-radius: 4px;
    cursor: pointer;
}
.filter-results-sidebar-brand-selection-toggle input{
    opacity: 0;
    width: 0;
    height: 0;
}
.filter-results-sidebar-brand-selection-slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: contain;
    background-repeat: no-repeat no-repeat;
    height: 100%;
    background-position: center;
    background-color: #ffffff;
    border: 2px solid #dddddd;
    border-radius: 4px;
    -webkit-transition: .4s;
    transition: .4s;
}
.filter-results-sidebar-brand-selection-toggle input:checked +
.filter-results-sidebar-brand-selection-slider{
    border: 2px solid #ff8080;
}

.filter-results-sidebar-checkbox label{
    display: block;
    width: fit-content;;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-family: "raleway-regular", sans-serif;
    font-style: italic;
    font-size: 12px;
    color: #333333;
    padding-left: 10px;
    cursor: pointer;
}

@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///          filter results sidebar                /// */ 
    /* ////////////////////////////////////////////////////// */
    .filter-results-sidebar{
        display: none;
    }

}


</style>