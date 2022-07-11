<script setup>

const props = defineProps({
  image: String
});

</script>
<template>

    <label class="filter-results-sidebar-brand-selection-toggle">
        <input type="checkbox" />
        <span :style="{ backgroundImage: 'url('+props.image+')'}"
            class="filter-results-sidebar-brand-selection-slider"></span>
    </label>

</template>
<style>

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

</style>
