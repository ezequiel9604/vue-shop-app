<script setup>
const props = defineProps({
  title: String,
  allelements: Array,
  currentelement: String,
  subitemselements: Array
});

</script>
<template>

    <div class="top-item-details-details-selection">
        <p>{{ props.title }}:</p>
        <div>
            <label v-for="(set, ind) in props.allelements" class="top-item-details-details-selection-toggle" :key="set">
                <input type="radio" :name="'details-selection-'+props.title.toLowerCase()"
                    :checked="set == props.currentelement" :disabled="set != props.subitemselements[ind] " />
                <span :class="props.subitemselements[ind] == set?'top-item-details-details-selection-slider' :
                        'top-item-details-details-selection-slider top-item-details-details-selection-slider-disabled'">
                        {{ set }}
                </span>
            </label>
        </div>
    </div>

</template>
<style>

.top-item-details-details-selection{
    width: 60%;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.top-item-details-details-selection p{
    width: fit-content;
    box-sizing: border-box;
    font-family: "raleway-semibold", sans-serif;
    font-size: 13px;
    color: #333333;
    margin-bottom: 10px;
}
.top-item-details-details-selection > div{
    width: 100%;
    box-sizing: border-box;

    display: flex;
    align-items: center;
}
.top-item-details-details-selection-toggle{
    width: fit-content;
    box-sizing: border-box;
    margin-right: 20px;
}
.top-item-details-details-selection-toggle input{
    opacity: 0;
    width: 0;
    height: 0;
}
.top-item-details-details-selection-slider{
    display: inline-flex;
    width: 100%;
    box-sizing: border-box;
    
    font-family: "raleway-semibold", sans-serif;
    font-size: 13px;
    color: #333333;
    padding: 6px 8px;

    cursor: pointer;
    border: 2px solid #dddddd;
    background-color: #ffffff;
    border-radius: 4px;
    transition: 0.4s;
}
.top-item-details-details-selection-slider:hover{
    border-color: tomato;
}
.top-item-details-details-selection-toggle input:checked + 
.top-item-details-details-selection-slider{
    border-color: tomato;
}
.top-item-details-details-selection-slider-disabled{
    background-color: #fafafa;
    cursor: no-drop;
    border: 2px dashed #dddddd;
}
.top-item-details-details-selection-slider-disabled:hover{
    border-color: #dddddd;
}

@media screen and (max-width: 834px) {
    
    .top-item-details-details-selection{
        width: 75%;
    }
    .top-item-details-details-selection p{
        font-size: 12px;
    }
    
    .top-item-details-details-selection-toggle{
        width: fit-content;
        box-sizing: border-box;
        margin-right: 20px;
    }

    .top-item-details-details-selection-slider{
        font-size: 11px;
        padding: 6px 8px;
    }

}

@media screen and (max-width: 414px) {
    
    .top-item-details-details-selection{
        width: 90%;
        margin: 10px auto;
    }
    .top-item-details-details-selection p{
        display: none;
    }
    .top-item-details-details-selection > div{
        width: fit-content;
        margin: 0 auto;
    }
    .top-item-details-details-selection-toggle{
        margin-right: 15px;
    }
    .top-item-details-details-selection-slider{
        font-size: 10px;
        padding: 4px 6px;
    }

}

</style>
