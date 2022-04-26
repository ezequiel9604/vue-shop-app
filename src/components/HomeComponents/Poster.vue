<script setup>

</script>
<template>

    <div class="poster">
        <div class="poster-content">
            <!-- <img src="" alt="" /> -->
        </div>
    </div>

</template>
<style>

.poster{
    width: 100%;
    height: 350px;
    box-sizing: border-box;
}

.poster-content{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #dddddd;
}

.poster-content img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 834px) {
    
    .poster{
        height: 250px;
    }

}

@media screen and (max-width: 414px) {
    
    .poster{
        height: 150px;
    }

}


</style>