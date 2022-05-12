<script setup>
import { RouterLink } from 'vue-router';
import AccordionPanel from "../HeaderHiddenNavComponents/AccordionPanel.vue";
import brandImage1 from "../../assets/imgs/brands/brand-1.png";
import brandImage2 from "../../assets/imgs/brands/brand-2.png";
import brandImage3 from "../../assets/imgs/brands/brand-3.png";

const props = defineProps({
    onIsHiddenSidebarOpen: Boolean,
    onChangeHiddenSidebarStatus: Function
});

</script>
<template>

    <div class="filter-results-hidden-sidebar" :style="{ display: props.onIsHiddenSidebarOpen ? 'block' : 'none' }">
        <div class="filter-results-hidden-sidebar-content">
            <div class="top-filter-results-hidden-sidebar">
                <button @click="onChangeHiddenSidebarStatus">
                    <i class="bi bi-x"></i>
                </button>
            </div>

            <div class="bottom-filter-results-hidden-sidebar">

                <AccordionPanel title="Clothing" icon="">
                    <RouterLink to="" class="accordion-links">T-Shirts</RouterLink>
                    <RouterLink to="" class="accordion-links">Pants</RouterLink>
                    <RouterLink to="" class="accordion-links">Jackets</RouterLink>
                    <RouterLink to="" class="accordion-links">Sweaters</RouterLink>
                    <RouterLink to="" class="accordion-links">Skirts</RouterLink>
                    <RouterLink to="" class="accordion-links">Caps</RouterLink>
                    <RouterLink to="" class="accordion-links">Hats</RouterLink>
                    <RouterLink to="" class="accordion-links">Underwears</RouterLink>
                </AccordionPanel>

                <AccordionPanel title="Brands" icon="">
                    <div class="accordion-panel-selection">
                        <label class="accordion-panel-selection-brands-toggle">
                            <input type="checkbox" />
                            <span :style="{ backgroundImage: 'url(' + brandImage1 + ')' }"
                                class="accordion-panel-selection-brands-slider"></span>
                        </label>
                        <label class="accordion-panel-selection-brands-toggle">
                            <input type="checkbox" />
                            <span :style="{ backgroundImage: 'url(' + brandImage2 + ')' }"
                                class="accordion-panel-selection-brands-slider"></span>
                        </label>
                        <label class="accordion-panel-selection-brands-toggle">
                            <input type="checkbox" />
                            <span :style="{ backgroundImage: 'url(' + brandImage3 + ')' }"
                                class="accordion-panel-selection-brands-slider"></span>
                        </label>
                    </div>
                </AccordionPanel>

                <AccordionPanel title="State" icon="">
                    <label for="state-new" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-new" /> New
                    </label>
                    <label for="state-used" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-used" /> Used
                    </label>
                </AccordionPanel>

                <AccordionPanel title="Size" icon="">
                    <label for="state-new" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-new" /> S
                    </label>
                    <label for="state-used" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-used" /> M
                    </label>
                    <label for="state-new" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-new" /> L
                    </label>
                    <label for="state-used" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-used" /> XL
                    </label>
                    <label for="state-used" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-used" /> XXL
                    </label>
                </AccordionPanel>

                <AccordionPanel title="Gender" icon="">
                    <label for="state-new" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-new" /> Men
                    </label>
                    <label for="state-used" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-used" /> Women
                    </label>
                    <label for="state-new" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-new" /> Boys
                    </label>
                    <label for="state-used" class="accordion-panel-checkbox">
                        <input type="checkbox" id="state-used" /> Girls
                    </label>
                </AccordionPanel>

                <AccordionPanel title="Price" icon="">
                    <div class="accordion-panel-price">
                        <input type="text" placeholder="$Min" /> -
                        <input type="text" placeholder="$Max" />
                        <button type="button">Ok</button>
                    </div>
                </AccordionPanel>

                <AccordionPanel title="Offer" icon="">
                    <label id="accordion-panel-offer" class="accordion-panel-offer-toggle">
                        <input type="checkbox" name="accordion-panel-offer" />
                        <span class="accordion-panel-offer-slider"></span>
                    </label>
                </AccordionPanel>

                <AccordionPanel title="Quality" icon="">
                    <div class="accordion-panel-quality">
                        <button><i class="bi bi-star"></i></button>
                        <button><i class="bi bi-star"></i></button>
                        <button><i class="bi bi-star"></i></button>
                        <button><i class="bi bi-star"></i></button>
                        <button><i class="bi bi-star"></i></button>
                    </div>
                </AccordionPanel>

                <AccordionPanel title="Color" icon="">
                    <div class="accordion-panel-color">
                        <label class="accordion-panel-color-toggle">
                            <input type="checkbox" />
                            <span style="background-color: green;" class="accordion-panel-color-slider"></span>
                        </label>
                        <label class="accordion-panel-color-toggle">
                            <input type="checkbox" />
                            <span style="background-color: green;" class="accordion-panel-color-slider"></span>
                        </label>
                        <label class="accordion-panel-color-toggle">
                            <input type="checkbox" />
                            <span style="background-color: green;" class="accordion-panel-color-slider"></span>
                        </label>
                        <label class="accordion-panel-color-toggle">
                            <input type="checkbox" />
                            <span style="background-color: green;" class="accordion-panel-color-slider"></span>
                        </label>
                    </div>
                </AccordionPanel>

            </div>

        </div>

    </div>

</template>
<style>
.filter-results-hidden-sidebar {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.2);

    z-index: 80;
}

@keyframes filter-results-hidden-sidebar-content-animation {
    from {
        left: -50%;
    }

    to {
        left: 0
    }
}

.filter-results-hidden-sidebar-content {
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    overflow: hidden;

    position: relative;
    top: 0;
    left: -50%;
    z-index: 90;
    overflow-y: auto;

    animation-name: filter-results-hidden-sidebar-content-animation;
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
}

/* ////////////////////////////////////////////////////// */
/* ///        top filter results hidden sidebar       /// */
/* ////////////////////////////////////////////////////// */
.top-filter-results-hidden-sidebar {
    border-bottom: 1px solid #ddd;
    width: 90%;
    margin: 20px auto;
    padding-bottom: 10px;

    display: flex;
    justify-content: right;
}

.top-filter-results-hidden-sidebar button {
    border: none;
    background-color: #ffffff;
    display: flex;
    justify-content: center;

    padding: 10px 13px;
    border-radius: 50%;
    font-size: 20px;
}

/* ////////////////////////////////////////////////////// */
/* ///       bottom filter results hidden sidebar     /// */
/* ////////////////////////////////////////////////////// */
.bottom-filter-results-hidden-sidebar {
    width: 90%;
    box-sizing: border-box;
    margin: 20px auto;
}

.accordion-panel .accordion-links {
    width: fit-content;
    box-sizing: border-box;
    display: block;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 15px 0;
    padding-right: 20px;
    margin-left: 20px;
    background-color: #ffffff;
}

.accordion-panel .accordion-links:hover {
    background-color: #f1f1f1;
}

.accordion-panel-checkbox {
    display: inline-block;
    width: fit-content;
    box-sizing: border-box;
    margin: 0 30px;
    margin-bottom: 20px;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
}

/* ////////////////////////////////////////////////////// */
/* ///        accordion panel selection brand         /// */
/* ////////////////////////////////////////////////////// */
.accordion-panel-selection {
    width: 100%;
    margin: 0px auto;
    box-sizing: border-box;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.accordion-panel-selection-brands {
    border: 2px solid #dddddd;
    width: 40%;
    height: 35px;
    box-sizing: border-box;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    cursor: pointer;
}

.accordion-panel-selection-brands-toggle {
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

.accordion-panel-selection-brands-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}

.accordion-panel-selection-brands-slider {
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

.accordion-panel-selection-brands-toggle input:checked+.accordion-panel-selection-brands-slider {
    border: 2px solid #ff8080;
}

/* ////////////////////////////////////////////////////// */
/* ///         accordion panel offer toggle           /// */
/* ////////////////////////////////////////////////////// */
.accordion-panel-offer-toggle {
    box-sizing: border-box;
    display: inline-block;
    width: 50px;
    height: 25px;
    padding: 4px;
    margin-left: 30px;

    position: relative;

    border: none;
    background-color: #dddddd;
    border-radius: 25px;
    cursor: pointer;
}

.accordion-panel-offer-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}

.accordion-panel-offer-slider {
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

.accordion-panel-offer-slider::before {
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

.accordion-panel-offer-toggle input:checked+.accordion-panel-offer-slider {
    background-color: #ff8080;
}

.accordion-panel-offer-toggle input:checked+.accordion-panel-offer-slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
}

/* ////////////////////////////////////////////////////// */
/* ///            accordion panel price               /// */
/* ////////////////////////////////////////////////////// */
.accordion-panel-price {
    width: 80%;
    margin: 10px auto;
}

.accordion-panel-price input {
    border: 1px solid #ddd;
    width: 60px;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 6px 8px;
    border-radius: 3px;
}

.accordion-panel-price button {
    width: 50px;
    box-sizing: border-box;
    margin-left: 10px;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
    padding: 6px 8px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    border-radius: 3px;
}

/* ////////////////////////////////////////////////////// */
/* ///         accordion panel quality button         /// */
/* ////////////////////////////////////////////////////// */
.accordion-panel-quality {
    width: 80%;
    margin: 10px auto;
}

.accordion-panel-quality button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    font-size: 22px;
    color: #333333;
    padding: 0;

    background-color: #ffffff;
    border: 1px solid transparent;
}

/* ////////////////////////////////////////////////////// */
/* ///         accordion panel color toggle           /// */
/* ////////////////////////////////////////////////////// */
.accordion-panel-color {
    width: 80%;
    margin: 10px auto;
}

.accordion-panel-color-toggle {
    box-sizing: border-box;
    display: inline-block;
    width: 25px;
    height: 25px;
    padding: 4px;
    margin-right: 30px;

    position: relative;

    border: none;
    background-color: #dddddd;
    border-radius: 4px;
    cursor: pointer;
}

.accordion-panel-color-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}

.accordion-panel-color-slider {
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

.accordion-panel-color-toggle input:checked+.accordion-panel-color-slider {
    border: 2px solid #ff8080;
}

@media screen and (max-width: 414px) {

    /* ////////////////////////////////////////////////////// */
    /* ///     filter results hidden sidebar conten       /// */
    /* ////////////////////////////////////////////////////// */
    .filter-results-hidden-sidebar-content {
        width: 75%;
        left: -75%;
    }

    @keyframes filter-results-hidden-sidebar-content-animation {
        from {
            left: -75%;
        }

        to {
            left: 0
        }
    }

    .accordion-panel .accordion-links {
        font-size: 13px;
        padding: 12px 0;
    }

    .accordion-panel-checkbox {
        width: 45%;
        margin-bottom: 30px;
        font-size: 13px;
    }

    .accordion-panel-price input {
        width: 55px;
        font-size: 13px;
    }

    .accordion-panel-price button {
        width: 45px;
        font-size: 13px;
    }

    .accordion-panel-quality button {
        margin-right: 10px;
        font-size: 16px;
    }

    .accordion-panel-color label {
        width: 15px;
        height: 15px;
        margin-right: 22px;
    }

}
</style>