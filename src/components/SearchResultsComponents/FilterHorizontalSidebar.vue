<script setup>

const props = defineProps({
    colors: Array
});

</script>
<template>

     <div class="filter-results-horizontal-sidebar">

        <div class="filter-results-horizontal-sidebar-price">
            <h4>Price:</h4>
            <input type="text" placeholder="$Min" /> - 
            <input type="text" placeholder="$Max" />
            <button type="button">Ok</button>
        </div>

        <div class="filter-results-horizontal-sidebar-quality">
            <h4>Quality:</h4>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
        </div>
        
        <div class="filter-results-horizontal-sidebar-color">
            <h4>Color:</h4>

            <label v-for="color in colors" class="filter-results-horizontal-sidebar-color-toggle" :key="color">
                <input type="checkbox" />
                <span :style="{ backgroundColor: color }" class="filter-results-horizontal-sidebar-color-slider"></span>
            </label>

        </div>
        <div class="filter-results-horizontal-sidebar-offer">
            <h4>Offer:</h4>
            <label class="filter-results-horizontal-sidebar-offer-toggle">
                <input type="checkbox"  />
                <span class="filter-results-horizontal-sidebar-offer-toggle-slider"></span>
            </label>
        </div>

    </div>

</template>
<style>


/* ////////////////////////////////////////////////////// */
/* ///          filter results horizontal             /// */ 
/* ////////////////////////////////////////////////////// */
.filter-results-horizontal-sidebar{
    width: 100%;
    box-sizing: border-box;
    margin: 10px auto;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #ffffff;
    overflow:hidden;
    border-radius: 6px;
}
.filter-results-horizontal-sidebar > div{
    width: fit-content;
    box-sizing: border-box;
    margin: 12px auto;
}
.filter-results-horizontal-sidebar > div:last-child{
    border-right-color: transparent;
}
.filter-results-horizontal-sidebar > div h4{
    display: inline-block;
    width: fit-content;
    box-sizing: border-box;
    margin-right: 10px;
    font-family: "raleway-regular", sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: #333333;
}

/* ////////////////////////////////////////////////////////// */
/* ///      filter results horizontal sidebar price       /// */ 
/* ////////////////////////////////////////////////////////// */
.filter-results-horizontal-sidebar-price input{
    border: 1px solid #dddddd;
    width: 60px;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 4px 8px;

    border-radius: 4px;
    transition: box-shadow 0.3s ease-in-out;
}
.filter-results-horizontal-sidebar-price input:focus{
    box-shadow: 0px 0px 5px #e6e6e6;
}
.filter-results-horizontal-sidebar-price button{
    width:50px;
    box-sizing: border-box;
    margin-left: 5px;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    padding: 4px 8px;

    border: 1px solid #dddddd;
    background-color: #f2f2f2;
    border-radius: 4px;
    transition: box-shadow 0.3s ease-in-out;
}
.filter-results-horizontal-sidebar-price button:hover{
    box-shadow: 0px 0px 5px #e6e6e6;
}

/* ////////////////////////////////////////////////////////// */
/* ///      filter results horizontal sidebar quality     /// */ 
/* ////////////////////////////////////////////////////////// */
.filter-results-horizontal-sidebar-quality i{
    display: inline-block;
    font-size: 17px;
    color: #333333;
    margin-right: 3px;
    cursor: pointer;

    transition: color 0.3s ease-in-out;
}

/* .filter-results-horizontal-sidebar-quality span{
    display: inline-block;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    margin-left: 3px;
} */

/* ////////////////////////////////////////////////////////// */
/* ///  filter results horizontal sidebar color toggle    /// */ 
/* ////////////////////////////////////////////////////////// */
.filter-results-horizontal-sidebar-color-toggle{
    box-sizing: border-box;
    display: inline-block;
    width: 25px;
    height: 25px;
    padding: 4px;
    margin-right: 5px;

    position: relative;

    border: none;
    background-color: #dddddd;
    border-radius: 4px;
    cursor: pointer;
}
.filter-results-horizontal-sidebar-color-toggle input{
    opacity: 0;
    width: 0;
    height: 0;
}
.filter-results-horizontal-sidebar-color-slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #dddddd;
    border: 2px solid #dddddd;
    border-radius: 4px;
    -webkit-transition: .4s;
    transition: .4s;
}
.filter-results-horizontal-sidebar-color-toggle input:checked +
.filter-results-horizontal-sidebar-color-slider{
    border: 2px solid #ff8080;
}

/* ////////////////////////////////////////////////////////// */
/* ///  filter results horizontal sidebar offer toggle    /// */ 
/* ////////////////////////////////////////////////////////// */
.filter-results-horizontal-sidebar-offer-toggle{
    box-sizing: border-box;
    display: inline-block;
    width: 50px;
    height: 25px;
    padding: 4px;

    position: relative;

    border: none;
    background-color: #dddddd;
    border-radius: 25px;
    cursor: pointer;
}
.filter-results-horizontal-sidebar-offer-toggle input{
    opacity: 0;
    width: 0;
    height: 0;
}
.filter-results-horizontal-sidebar-offer-toggle-slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #dddddd;
    border-radius: 25px;
    -webkit-transition: .4s;
    transition: .4s;
}
.filter-results-horizontal-sidebar-offer-toggle-slider::before{
    position: absolute;
    content: "";
    width: 40%;
    height: 68%;
    top: 4px;
    left: 6px;
    background-color: #ffffff;
    border-radius: 25px;
    -webkit-transition: .4s;
    transition: .4s;
}
.filter-results-horizontal-sidebar-offer-toggle input:checked +
.filter-results-horizontal-sidebar-offer-toggle-slider{
    background-color: #ff8080;
}
.filter-results-horizontal-sidebar-offer-toggle input:checked +
.filter-results-horizontal-sidebar-offer-toggle-slider:before{
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
}

@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///       filter results horizontal sidebar        /// */ 
    /* ////////////////////////////////////////////////////// */
    .filter-results-horizontal-sidebar{
        display: none;
    }


}

</style>