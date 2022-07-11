<script setup>
import { RouterLink } from 'vue-router';
import store from '../../store';
import SidebarBrandSelection from './SidebarBrandSelection.vue';
import brandImage1 from '../../assets/imgs/brands/brand-1.png';
import brandImage2 from '../../assets/imgs/brands/brand-2.png';
import brandImage3 from '../../assets/imgs/brands/brand-3.png';
import { checkingInputChecks } from '../../services/Item';
import { Departments } from '../../services/Client';

const props = defineProps({
  category: String,
  subCategory: Array,
  state: Array,
  size: Array,
  capacity: Array,
  department: Array,

  onChangeFilterSState: Function
});

const brandImages = [brandImage1, brandImage2, brandImage3];

const changeInputs = (ev, input) => {
  let arr;
  if (input === 'state') {
    arr = new Set([...props.state]);
  }
  else if (input === 'size') {
    arr = new Set([...props.size]);
  }
  else if (input === 'capacity') {
    arr = new Set([...props.capacity]);
  }
  else if (input === 'department') {
    arr = new Set([...props.department]);
  }
    
  if (ev.target.checked) {
    arr.add(ev.target.value);
  }
  else {
    arr.delete(ev.target.value);
  }

  props.onChangeFilterSState(input, Array.from(arr));
};

const changeStoreCategoryItem = (value) => {
  store.commit('changeCategoryItem', value);
};

</script>
<template>

    <div class="filter-results-sidebar">
        
        <div v-if="props.category == 'all'" class="filter-results-sidebar-type">
            <h4>All categories:</h4>
            <RouterLink v-for="d in Departments" 
                @click="()=>changeStoreCategoryItem(d)"
                :to="'/searchResults?category='+d" 
                :class="props.category == d?'filter-results-link-active': ''"
                :key="d">{{ d.toUpperCase() }}</RouterLink>
        </div>

        <div v-else class="filter-results-sidebar-type">
            <h4>{{ props.category.toUpperCase() }}:</h4>
            <RouterLink to="" class="filter-results-link-active">All {{ props.category }}</RouterLink>
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
                <input @change="(ev) => changeInputs(ev, 'state')" value="new" 
                    :checked="checkingInputChecks(props.state, 'new')" type="checkbox" id="state-new" /> New
            </label> 
            <label for="state-used">
                <input @change="(ev) => changeInputs(ev, 'state')" value="used" 
                    :checked="checkingInputChecks(props.state, 'used')" type="checkbox" id="state-used" /> Used
            </label> 
            <label for="state-repair">
                <input @change="(ev) => changeInputs(ev, 'state')" value="repair"
                    :checked="checkingInputChecks(props.state, 'repair')" type="checkbox" id="state-repair" /> Repair
            </label> 
        </div>

        <div v-if="props.category == 'clothing' || props.category == 'all'" class="filter-results-sidebar-checkbox">  
            <h4>Size:</h4>
            <label for="size-small">
                <input @change="(ev) => changeInputs(ev, 'size')" value="small"
                    :checked="checkingInputChecks(props.size, 'small')" type="checkbox" id="size-small" /> S
            </label> 
            <label for="size-medium">
                <input @change="(ev) => changeInputs(ev, 'size')" value="medium"
                    :checked="checkingInputChecks(props.size, 'medium')" type="checkbox" id="size-medium" /> M
            </label> 
            <label for="size-large">
                <input @change="(ev) => changeInputs(ev, 'size')" value="large"
                    :checked="checkingInputChecks(props.size, 'large')" type="checkbox" id="size-large" /> L
            </label> 
            <label for="size-extraLarge">
                <input @change="(ev) => changeInputs(ev, 'size')" value="extraLarge"
                    :checked="checkingInputChecks(props.size, 'extraLarge')" type="checkbox" id="size-extraLarge" /> XL
            </label> 
            <label for="size-extraExtraLarge">
                <input @change="(ev) => changeInputs(ev, 'size')" value="extraExtraLarge"
                    :checked="checkingInputChecks(props.size, 'extraExtraLarge')" type="checkbox" id="size-extraExtraLarge" /> XXL
            </label> 
        </div>

        <div v-if="props.category == 'clothing' || props.category == 'all'" class="filter-results-sidebar-checkbox">  
            <h4>Department:</h4>
            <label for="department-men">
                <input @change="(ev) => changeInputs(ev, 'department')" value="men"
                    :checked="checkingInputChecks(props.department, 'men')" type="checkbox" id="department-men" /> Men
            </label> 
            <label for="department-women">
                <input @change="(ev) => changeInputs(ev, 'department')" value="women"
                    :checked="checkingInputChecks(props.department, 'women')" type="checkbox" id="department-women" /> Women
            </label> 
            <label for="department-boys">
                <input @change="(ev) => changeInputs(ev, 'department')" value="boys"
                    :checked="checkingInputChecks(props.department, 'boys')" type="checkbox" id="department-boys" /> Boys
            </label> 
            <label for="department-girls">
                <input @change="(ev) => changeInputs(ev, 'department')" value="girls"
                    :checked="checkingInputChecks(props.department, 'girls')" type="checkbox" id="department-girls" /> Girls
            </label> 
        </div>

        <div v-if="props.category == 'technology' || props.category == 'all'" class="filter-results-sidebar-checkbox">  
            <h4>Capacity:</h4>
            <label for="capacity-2g">
                <input @click="(ev) => changeInputs(ev, 'capacity')" value="2g"
                    :checked="checkingInputChecks(props.capacity, '2g')" type="checkbox" id="capacity-2g" /> 2Gb
            </label> 
            <label for="capacity-4g">
                <input @click="(ev) => changeInputs(ev, 'capacity')" value="4g"
                    :checked="checkingInputChecks(props.capacity, '4g')" type="checkbox" id="capacity-4g" /> 4Gb
            </label> 
            <label for="capacity-8g">
                <input @click="(ev) => changeInputs(ev, 'capacity')" value="8g"
                    :checked="checkingInputChecks(props.capacity, '8g')" type="checkbox" id="capacity-8g" /> 8Gb
            </label> 
            <label for="capacity-16g">
                <input @click="(ev) => changeInputs(ev, 'capacity')" value="16g"
                    :checked="checkingInputChecks(props.capacity, '16g')" type="checkbox" id="capacity-16g" /> 16Gb
            </label> 
        </div>

    </div>

</template>

<style>

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
