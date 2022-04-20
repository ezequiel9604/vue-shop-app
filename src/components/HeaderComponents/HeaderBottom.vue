<script setup>
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const props = defineProps({
    onChangeHeaderHiddenNavStatus: Function
});

const departments = [
    "clothing", "Accessories", "Shoes", "Offices", "Home", "Technology"
];



</script>

<template>
    <div class="main-header-content-bottom">

        <button @click="onChangeHeaderHiddenNavStatus"
             class="main-header-content-bottom-hidden-menu">
            <i class="bi bi-justify"></i>
        </button>

        <div class="main-header-content-bottom-logo">
            <RouterLink to="/">ShopApp</RouterLink>
        </div>

        <div class="main-header-content-bottom-search">
            <ul class="main-header-content-bottom-search-dropdown">
                <p>Categories</p>
                <i class="bi bi-caret-down-fill"></i>
                <div class="main-header-content-bottom-search-dropdown-content">

                    <RouterLink v-for="d in departments" :to="'/'+d.toLowerCase()" :key="d" 
                        class="main-header-content-bottom-search-dropdown-content-links" >{{ d }}</RouterLink>

                </div>

            </ul>
            <input type="text" class="main-header-content-bottom-search-field"
                placeholder="What are you looking for?" />

            <RouterLink to="/search" class="main-header-content-bottom-search-btn">
                <i class="bi bi-search"></i>
            </RouterLink>
        </div>

        <div class="main-header-content-bottom-shop">
            <RouterLink to="/cart" class="main-header-content-bottom-shop-icons shop-cart">
                <i class="bi bi-cart3"></i>
                <span class="shop-icons-indicators">8</span>
            </RouterLink>
            <RouterLink to="/favorite" class="main-header-content-bottom-shop-icons shop-favorite">
                <i class="bi bi-heart"></i>
                <span class="shop-icons-indicators">10</span>
            </RouterLink>

        </div>

    </div>
</template>
<style>

/* ////////////////////////////////////////////////////// */
/* ///          main header content bottom            /// */
/* ////////////////////////////////////////////////////// */
.main-header-content-bottom {
    width: 95%;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    border-top: 1px solid #dddddd;
    z-index: 0;
}

.main-header-content-bottom-hidden-menu {
    border: none;
    width: fit-content;
    box-sizing: border-box;
    background-color: transparent;
    padding: 8px 10px;
    background-color: #fafafa;
    border-radius: 50%;

    display: none;
    /* this will change*/
}

.main-header-content-bottom-hidden-menu i {
    font-size: 20px;
    color: #333333;
    cursor: pointer;
}

.main-header-content-bottom-logo {
    width: fit-content;
    box-sizing: border-box;
}

.main-header-content-bottom-logo a {
    font-family: "raleway-semibold", sans-serif;
    font-size: 30px;
    color: #0099ff;
    outline: none;
}

.main-header-content-bottom-search {
    width: 60%;
    box-sizing: border-box;
    padding: 2px 0;

    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #dddddd;
}

.main-header-content-bottom-search-dropdown {
    width: 25%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-around;
    align-items: center;

    position: relative;
    cursor: default;
    z-index: 40;

    border-right: 1px solid #dddddd;
}

.main-header-content-bottom-search-dropdown p {
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    padding: 8px 0;
}

.main-header-content-bottom-search-dropdown:hover {
    background-color: #fafafa;
}

.main-header-content-bottom-search-dropdown:hover .main-header-content-bottom-search-dropdown-content {
    display: block;
}

@keyframes main-header-content-bottom-search-dropdown-content-animation {
    from {
        top: 140%;
        opacity: 0;
    }

    to {
        top: 100%;
        opacity: 1;
    }
}
.main-header-content-bottom-search-dropdown-content {
    width: 220px;
    box-sizing: border-box;

    position: absolute;
    top: 102%;
    left: 0px;
    display: none;

    background-color: #ffffff;
    box-shadow: 0px 1px 4px #dddddd;

    animation-name:  main-header-content-bottom-search-dropdown-content-animation;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    z-index: 50;
}

.main-header-content-bottom-search-dropdown-content-links {
    width: 100%;
    box-sizing: border-box;
    display: block;

    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #333333;
    padding: 10px 0;
    padding-left: 20px;
    background-color: #fafafa;
}

.main-header-content-bottom-search-dropdown-content-links:hover {
    background-color: #f1f1f1;
}

.main-header-content-bottom-search-field {
    border: 1px solid transparent;
    width: 70%;
    box-sizing: border-box;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    padding: 6px 10px;
}

.main-header-content-bottom-search-btn {
    width: 5%;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
}

.main-header-content-bottom-search-btn i {
    font-size: 14px;
    padding: 5px 8px;
    color: #333333;
}

.main-header-content-bottom-shop {
    width: 15%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-around;
    align-items: center;
}

.main-header-content-bottom-shop-icons {
    position: relative;
}

.main-header-content-bottom-shop-icons i {
    display: block;
    font-size: 26px;
    color: #333333;
}

.main-header-content-bottom-shop-icons span {
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 2px 4px;
    background-color: #e9e9e9;
    border-radius: 50%;

    position: absolute;
    top: -20%;
    right: -50%;
}


@media screen and (max-width: 834px) {

     /* ////////////////////////////////////////////////////// */
    /* ///           main header content bottom           /// */
    /* ////////////////////////////////////////////////////// */
    .main-header-content-bottom {
        width: 90%;
        padding: 15px 0;
        border-color: transparent;
    }

    .main-header-content-bottom-hidden-menu {
        display: block;
        /* this will change*/
        padding: 6px 8px;
        order: 1;
    }

    .main-header-content-bottom-hidden-menu i {
        font-size: 18px;
    }

    .main-header-content-bottom-logo {
        order: 2;
    }

    .main-header-content-bottom-shop {
        order: 3;
        width: 20%;
    }

    .main-header-content-bottom-search {
        margin-top: 10px;
        order: 4;
        flex: 0 0 100%;
    }

    .main-header-content-bottom-search-dropdown {
        display: none;
    }

    .main-header-content-bottom-search-field {
        width: 90%;
        font-size: 14px;
        padding: 10px 10px;
    }

    .main-header-content-bottom-search-btn {
        width: 10%;
    }

    .main-header-content-bottom-search-btn i {
        font-size: 14px;
        padding: 5px 8px;
    }

}

@media screen and (max-width: 414px) {

    /* ////////////////////////////////////////////////////// */
    /* ///           main header content bottom           /// */
    /* ////////////////////////////////////////////////////// */
    .main-header-content-bottom-logo a {
        font-size: 25px;
    }

    .main-header-content-bottom-shop {
        order: 3;
        width: 30%;
    }

    .main-header-content-bottom-shop-icons i {
        font-size: 20px;
    }

    .main-header-content-bottom-shop-icons span {
        font-size: 11px;
        padding: 2px 5px;
        top: -20%;
        right: -60%;
    }

    .main-header-content-bottom-search-field {
        font-size: 12px;
    }

}


</style>