<script setup>
import { RouterLink } from 'vue-router';
import FooterTopList from '../components/FooterComponents/FooterTopList.vue';

const topLists =[
    {
        title: "Shop",
        links: [ 
            "Clothing", "Accesories", "Shoes", "Offices", 
            "Home", "Technology", "Vehicles"]
    },
    {
        title: "Help",
        links: [ 
            "Make an order", "Create an account", "Use a promotion code", 
            "Return an item", "Cancel order"]
    },
    {
        title: "Terms and policies",
        links: [ 
            "Condition of use", "Warranty", "Privacy", "Shipping"]
    },
];

</script>  
<template>
        
    <footer class="main-footer">

        <div class="main-footer-top">

            <div class="main-footer-top-lists">

                <FooterTopList v-for="list in topLists" 
                    :title="list.title" 
                    :links="list.links" 
                    :key="list" />

            </div>

            <div class="main-footer-top-lists-min">
                <div class="min">
                    <RouterLink to="">Shop</RouterLink>
                </div>
                <div class="min">
                    <RouterLink to="">Help</RouterLink>
                </div>
                <div class="min">
                    <RouterLink to="">Terms and policies</RouterLink>
                </div>
            </div>

            <div class="main-footer-top-social-media">

                <div class="main-footer-top-social-media-content">
                    <RouterLink to=""><i class="bi bi-facebook"></i></RouterLink>
                    <RouterLink to=""><i class="bi bi-instagram"></i></RouterLink>
                    <RouterLink to=""><i class="bi bi-twitter"></i></RouterLink>
                    <RouterLink to=""><i class="bi bi-youtube"></i></RouterLink>
                </div>

                <div class="main-footer-top-social-media-contact">
                    <h6>Need to contact with us?</h6>
                    <p>Tel.: 809-111-2222</p>
                    <p>shopapp@gmail.com</p>
                </div>

            </div>

        </div>

        <div class="main-footer-bottom">

            <div class="main-footer-bottom-logo">
                <RouterLink to="">ShopApp</RouterLink>
            </div>

            <address>All rights reserved - ShopApp 2022</address>

        </div>

    </footer>

</template>
<style>


.main-footer{
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
    background-color: #333333;
}

/* /////////////////////////////////////////////////// */
/* ///                main footer top              /// */ 
/* /////////////////////////////////////////////////// */
.main-footer-top{
    width: 90%;
    margin: 10px auto;
    margin-top: 40px;

    display: flex;
    justify-content: space-around;
    align-items: center;
}

/* /////////////////////////////////////////////////// */
/* ///            main footer top lists            /// */ 
/* /////////////////////////////////////////////////// */
.main-footer-top-lists{
    width: 50%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.main-footer-top-lists ul{
    width: 30%;
    box-sizing: border-box;
}
.main-footer-top-lists ul h6{
    width: fit-content;
    margin-bottom: 20px;
    font-family: "raleway-semibold", sans-serif;
    font-size: 14px;
    color: #ffffff;
}
.main-footer-top-lists ul a{
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 10px;
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #ffffff;
}

.main-footer-top-lists-min{
    display: none;
}

/* /////////////////////////////////////////////////// */
/* ///       main footer top social  lists         /// */ 
/* /////////////////////////////////////////////////// */
.main-footer-top-social-media{
    width: 30%;
    box-sizing: border-box;
}
.main-footer-top-social-media 
.main-footer-top-social-media-content{
    width: 70%;
    margin-bottom: 25px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
}
.main-footer-top-social-media 
.main-footer-top-social-media-content a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    font-size: 16px;
    color: #ffffff;

    border: 1px solid #dddddd;
    border-radius: 50%;
}
.main-footer-top-social-media-contact{
    width: 100%;
    box-sizing: border-box;
}
.main-footer-top-social-media-contact h6{
    width: fit-content;
    font-family: "raleway-semibold", sans-serif;
    font-size: 13px;
    color: #ffffff;
    margin-bottom: 10px;
}
.main-footer-top-social-media-contact p{
    width: fit-content;
    font-family: "raleway-regular", sans-serif;
    font-size: 12px;
    color: #ffffff;
    margin-bottom: 10px;
}

/* /////////////////////////////////////////////////// */
/* ///              main footer bottom             /// */ 
/* /////////////////////////////////////////////////// */
.main-footer-bottom{
    border-top: 1px solid #dddddd;
    width: 80%;
    margin: 0px auto;
    margin-top: 20px;
    margin-bottom: 30px;
    padding-top: 10px;
}
.main-footer-bottom-logo{
    width: fit-content;
    box-sizing: border-box;
    margin: 10px auto;
}
.main-footer-bottom-logo a{
    font-family: "raleway-semibold", sans-serif;
    font-size: 26px;
    color: #ffffff;
}
.main-footer-bottom address{
    width: fit-content;
    box-sizing: border-box;
    margin: 15px auto;
    font-family: "raleway-regular", sans-serif;
    font-size: 12px;
    color: #ffffff;
}


@media screen and (max-width: 834px) {
    
    /* /////////////////////////////////////////////////// */
    /* ///                main footer top              /// */ 
    /* /////////////////////////////////////////////////// */
    .main-footer-top{
        width: 95%;
    }

    /* /////////////////////////////////////////////////// */
    /* ///            main footer top lists            /// */ 
    /* /////////////////////////////////////////////////// */
    .main-footer-top-lists{
        width: 60%;
    }
    .main-footer-top-lists ul h6{
        font-size: 13px;
    }
    .main-footer-top-lists ul a{
        margin-bottom: 10px;
        padding-left: 10px;
        font-size: 12px;
    }
    .main-footer-top-social-media{
        width: 25%;
    }
    .main-footer-top-social-media 
        .main-footer-top-social-media-content{
        width: 100%;
        margin-bottom: 20px;
    }
    .main-footer-top-social-media 
        .main-footer-top-social-media-content a{
        width: 25px;
        height: 25px;
        font-size: 13px;
    }
    .main-footer-top-social-media-contact h6{
        font-size: 12px;
        margin-bottom: 10px;
    }

    .main-footer-top-social-media-contact p{
        font-size: 11px;
        margin-bottom: 10px;
    }

    /* /////////////////////////////////////////////////// */
    /* ///              main footer bottom             /// */ 
    /* /////////////////////////////////////////////////// */
    .main-footer-bottom-logo a{
        font-size: 20px;
    }
    .main-footer-bottom address{
        margin: 10px auto;
        font-size: 11px;
    }

}


@media screen and (max-width: 414px) {

    /* /////////////////////////////////////////////////// */
    /* ///                main footer top              /// */ 
    /* /////////////////////////////////////////////////// */
    .main-footer-top{
        width: 100%;
        margin: 10px auto;
        margin-top: 0px;
    
        display: block;
    }
    
    /* /////////////////////////////////////////////////// */
    /* ///            main footer top lists            /// */ 
    /* /////////////////////////////////////////////////// */
    .main-footer-top-lists{
        display: none;
    }
    .main-footer-top-lists-min{
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 20px;
        display: flex;
    }
    .main-footer-top-lists-min .min{
        border: 1px solid #dddddd;
        width: 33.3%;
        box-sizing: border-box;

        text-align: center;
    }
    .main-footer-top-lists-min .min a{
        display: inline-block;
        box-sizing: border-box;
        font-family: "raleway-regular", sans-serif;
        font-size: 12px;
        color: #ffffff;
        padding: 10px 6px;
    }
    .main-footer-top-social-media{
        width: 70%;
        margin: 10px auto;
    }
    .main-footer-top-social-media 
        .main-footer-top-social-media-content{
        width: 80%;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .main-footer-bottom{
        margin: 20px auto;
        padding-top: 5px;
    }
    .main-footer-top-social-media-contact h6{
        width: 100%;
        text-align: center;
        font-size: 12px;
        margin-bottom: 10px;
    }
    .main-footer-top-social-media-contact p{
        font-size: 11px;
        margin-bottom: 0;
        display: inline-block;
    }
    .main-footer-top-social-media-contact p:last-child{
        margin-left: 80px;
    }

    /* /////////////////////////////////////////////////// */
    /* ///              main footer bottom             /// */ 
    /* /////////////////////////////////////////////////// */
    .main-footer-bottom-logo a{
        font-size: 18px;
    }
    
}

</style>