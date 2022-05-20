<script setup>
import { RouterLink } from 'vue-router';
import SidebarBrandSelection from './SidebarBrandSelection.vue';
import brandImage1 from '../../assets/imgs/brands/brand-1.png';
import brandImage2 from '../../assets/imgs/brands/brand-2.png';
import brandImage3 from '../../assets/imgs/brands/brand-3.png';

const props = defineProps({
    category: String,
    subCategory: Array,
    state: Array,
    size: Array,
    capacity: Array,
    department: Array,
    onChangeState: Function,
    onChangeSize: Function,
    onChangeDepartment: Function,
    onChangeCapacity: Function
});

const brandImages = [ brandImage1, brandImage2, brandImage3 ];


const changeInputs = (ev, input) =>{
    
    let arr;
    if(input == "state")
        arr = new Set([...props.state]);
    else if(input == "size")
        arr = new Set([...props.size]);
    else if(input == "capacity")
        arr = new Set([...props.capacity]);
    else if(input == "department")
        arr = new Set([...props.department]);
    
    if(ev.target.checked)
        arr.add(ev.target.value);
    else
        arr.delete(ev.target.value);

    console.log(Array.from(arr))

    if(input == "state")
        props.onChangeState(Array.from(arr));
    else if(input == "size")
        props.onChangeSize(Array.from(arr));
    else if(input == "capacity")
        props.onChangeCapacity(Array.from(arr));
    else if(input == "department")
        props.onChangeDepartment(Array.from(arr));

}

</script>
<template>

    <div class="filter-results-sidebar">
            
        <div class="filter-results-sidebar-type">
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
                <input @change="(ev) => changeInputs(ev, 'state')" value="new" type="checkbox" id="state-new" /> New
            </label> 
            <label for="state-used">
                <input @change="(ev) => changeInputs(ev, 'state')" value="used" type="checkbox" id="state-used" /> Used
            </label> 
            <label for="state-repair">
                <input @change="(ev) => changeInputs(ev, 'state')" value="repair" type="checkbox" id="state-repair" /> Repair
            </label> 
        </div>

        <div v-if="props.category == 'clothing'" class="filter-results-sidebar-checkbox">  
            <h4>Size:</h4>
            <label for="size-small">
                <input @change="(ev) => changeInputs(ev, 'size')" value="small" type="checkbox" id="size-small" /> S
            </label> 
            <label for="size-medium">
                <input @change="(ev) => changeInputs(ev, 'size')" value="medium" type="checkbox" id="size-medium" /> M
            </label> 
            <label for="size-large">
                <input @change="(ev) => changeInputs(ev, 'size')" value="large" type="checkbox" id="size-large" /> L
            </label> 
            <label for="size-extraLarge">
                <input @change="(ev) => changeInputs(ev, 'size')" value="extraLarge" type="checkbox" id="size-extraLarge" /> XL
            </label> 
            <label for="size-extraExtraLarge">
                <input @change="(ev) => changeInputs(ev, 'size')" value="extraExtraLarge" type="checkbox" id="size-extraExtraLarge" /> XXL
            </label> 
        </div>

        <div v-if="props.category == 'clothing'" class="filter-results-sidebar-checkbox">  
            <h4>Department:</h4>
            <label for="department-men">
                <input @change="(ev) => changeInputs(ev, 'department')" value="men" type="checkbox" id="department-men" /> Men
            </label> 
            <label for="department-women">
                <input @change="(ev) => changeInputs(ev, 'department')" value="women" type="checkbox" id="department-women" /> Women
            </label> 
            <label for="department-boys">
                <input @change="(ev) => changeInputs(ev, 'department')" value="boys" type="checkbox" id="department-boys" /> Boys
            </label> 
            <label for="department-girls">
                <input @change="(ev) => changeInputs(ev, 'department')" value="girls" type="checkbox" id="department-girls" /> Girls
            </label> 
        </div>

        <div v-if="props.category == 'technology'" class="filter-results-sidebar-checkbox">  
            <h4>Capacity:</h4>
            <label for="capacity-2g">
                <input @click="(ev) => changeInputs(ev, 'capacity')" value="2g" type="checkbox" id="capacity-2g" /> 2Gb
            </label> 
            <label for="capacity-4g">
                <input @click="(ev) => changeInputs(ev, 'capacity')" value="4g" type="checkbox" id="capacity-4g" /> 4Gb
            </label> 
            <label for="capacity-8g">
                <input @click="(ev) => changeInputs(ev, 'capacity')" value="8g" type="checkbox" id="capacity-8g" /> 8Gb
            </label> 
            <label for="capacity-16g">
                <input @click="(ev) => changeInputs(ev, 'capacity')" value="16g" type="checkbox" id="capacity-16g" /> 16Gb
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