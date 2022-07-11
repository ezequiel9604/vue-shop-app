<script setup>
</script>
<template>
    <div class="loading-container">
        <div class="loader"></div>
        <h2>Loading...</h2>
    </div>
</template>
<style>

.loading-container{
    width: fit-content;
    height: fit-content;
    margin: 40px auto;
}
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
}
.loading-container h2{
    text-align: center;
    font-family: "raleway-semibold", sans-serif;
    font-size: 20px;
    margin: 15px auto;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@media screen and (max-width: 832px) {

    .loading-container{
        margin: 30px auto;
    }
    .loader {
        border: 10px solid #f3f3f3;
        border-top: 10px solid #3498db;
        width: 80px;
        height: 80px;
    }
    .loading-container h2{
        font-size: 16px;
        margin: 10px auto;
    }

}

@media screen and (max-width: 832px) {

    .loading-container{
        margin: 20px auto;
    }
    .loader {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #3498db;
        width: 60px;
        height: 60px;
    }
    .loading-container h2{
        font-size: 14px;
        margin: 10px auto;
    }

}

</style>
