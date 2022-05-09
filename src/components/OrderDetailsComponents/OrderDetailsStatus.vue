<script setup>


</script>
<template>

    <div class="order-details-content-status">

        <div class="order-details-content-status-header">
            <h3>Order Status</h3>
        </div>
        <div class="order-details-content-status-section">

            <div class="order-details-content-status-section-date">
                <p>February 15, 2022</p>
                <p>Expecting to arrive...</p>
            </div>
            <div class="order-details-content-status-section-bar">
                <div class="order-details-content-status-section-progress-bar">
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-distribute-vertical"></i>
                    <i class="bi bi-truck"></i>
                </div>
            </div>
            <div class="order-details-content-status-section-info">
                <p>Expected arrival: Tomorrow at 4:00 pm</p>
            </div>
        </div>

    </div>

</template>
<style>


/* ////////////////////////////////////////////////////// */
/* ///          order details content status          /// */ 
/* ////////////////////////////////////////////////////// */
.order-details-content-status{
    width: 90%;
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: 40px;
    border-radius: 6px;
    border: 1px solid #dddddd;
    position: relative;
}
.order-details-content-status-header{
    width: 100.2%;
    box-sizing: border-box;
    background: linear-gradient(to right, #ff6600 0%, #cc66ff 100%);
    border-radius: 6px 6px 0 0;
    overflow: hidden;

    position: relative;
    top: -1px;
    left: -1px;
}
.order-details-content-status-header h3{
    width: fit-content;
    box-sizing: border-box;
    margin: 20px auto;
    font-family: "raleway-semibold", sans-serif;
    font-size: 22px;
    color: #ffffff;
}
.order-details-content-status-section{
    width: 100%;
    box-sizing: border-box;
}
.order-details-content-status-section-date{
    width: 92%;
    margin: 20px auto;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.order-details-content-status-section-date p{
    font-family: "raleway-semibold", sans-serif;
    font-size: 18px;
    color: #333333;
}
.order-details-content-status-section-bar{
    width: 90%;
    height: 50px;
    margin: 0px auto;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 2px solid #dddddd;
    border-radius: 25px;
    position: relative;
    overflow: hidden;
}
@keyframes progress-bar-animation {
    from {width: 6%;}
    to {width: 66%;}
}
.order-details-content-status-section-progress-bar{
    width: 6%;
    height: 100%;
    box-sizing: border-box;
    background: linear-gradient(to right, #9933ff 0%, #cc99ff 100%);
    border-radius: 20px;

    padding: 0px 20px;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: right;

    animation-name: progress-bar-animation;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
}
.order-details-content-status-section-progress-bar i{
    padding-left: 20px;
    font-size: 18px;
    color: #ffffff;
}
.order-details-content-status-section-info{
    width: 85%;
    margin: 20px auto;
    margin-bottom: 30px;
    box-sizing: border-box;
}
.order-details-content-status-section-info p{
    width: fit-content;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
}

@media screen and (max-width: 834px) {
    
    
    /* ////////////////////////////////////////////////////// */
    /* ///          order details content status          /// */ 
    /* ////////////////////////////////////////////////////// */
    .order-details-content-status{
        width: 100%;
        margin-bottom: 30px;
    }
    .order-details-content-status-header h3{
        margin: 15px auto;
        font-size: 18px;
    }
    .order-details-content-status-section-date{
        width: 90%;
        margin: 15px auto;
    }
    .order-details-content-status-section-date p{
        font-size: 16px;
    }

    .order-details-content-status-section-bar{
        width: 90%;
        height: 40px;
    }
    .order-details-content-status-section-progress-bar i{
        font-size: 16px; 
    }
    .order-details-content-status-section-info{
        width: 85%;
        margin: 15px auto;
        margin-bottom: 20px;
    }
    .order-details-content-status-section-info p{
        font-size: 14px;
    }

}

@media screen and (max-width: 414px) {
    
    
    /* ////////////////////////////////////////////////////// */
    /* ///          order details content status          /// */ 
    /* ////////////////////////////////////////////////////// */
    .order-details-content-status{
        width: 100%;
        margin-bottom: 20px;
    }
    .order-details-content-status-header h3{
        margin: 10px auto;
        font-size: 14px;
    }
    .order-details-content-status-section-date{
        width: 90%;
        margin: 15px auto;
    }
    .order-details-content-status-section-date p{
        font-size: 14px;
    }
    .order-details-content-status-section-bar{
        width: 90%;
        height: 30px;
    }

    @keyframes progress-bar-animation {
        from {width: 15%;}
        to {width: 66%;}
    }
    .order-details-content-status-section-progress-bar{
        width: 15%;
    }

    .order-details-content-status-section-progress-bar i{
        font-size: 14px; 
    }
    .order-details-content-status-section-info{
        width: 85%;
        margin: 10px auto;
        margin-bottom: 15px;
    }
    .order-details-content-status-section-info p{
        font-size: 12px;
    }

}

</style>