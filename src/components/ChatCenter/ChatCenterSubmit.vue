<script setup>

</script>
<template>

    <div class="chat-app-messages-footer">

        <input type="text" placeholder="Send a message..." />
        <button type="button">
            <i class="bi bi-arrow-right-circle"></i>
        </button>

    </div>

</template>
<style>

.chat-app-messages-footer{
    width: 100%;
    height: 8%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border-top: 1px solid #cccccc;
}
.chat-app-messages-footer input{
    width: 80%;
    box-sizing: border-box;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
    padding: 4px 10px;
    border: 1px solid #cccccc;
    border-radius: 6px;
}
.chat-app-messages-footer button{
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0;
}
.chat-app-messages-footer button i{
    font-size: 20px;
    color: #333333;
}

@media screen and (max-width: 834px) {
    
    .chat-app-messages-footer{
        justify-content: center;
    }
    .chat-app-messages-footer input{
        width: 90%;
        font-size: 12px;
        padding: 4px 8px;
        margin-right: 2%;
    }
    .chat-app-messages-footer button i{
        font-size: 18px;
    }

}


</style>