<script setup>

const props = defineProps({
  id: String,
  text: String,
  date: String,
  sender: String,
  image: String
});

</script>
<template>

    <div v-if="props.sender == 'client'" class="chat-app-messages-sender">
        <div>
            <p>{{ props.text }}</p>
            <time>{{ props.date }}</time>
        </div>
        <figure>
            <img :src="props.image" alt="" />
        </figure>
    </div>

    <div v-if="props.sender == 'admin'" class="chat-app-messages-receiver">
        <figure>
            <img :src="props.image" alt="" />
        </figure>
        <div>
            <p>{{ props.text }}</p>
            <time>{{ props.date }}</time>
        </div>

    </div>

</template>
<style>

.chat-app-messages-sender,
.chat-app-messages-receiver {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 25px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.chat-app-messages-sender div,
.chat-app-messages-receiver div {
    width: 90%;
    box-sizing: border-box;
}

.chat-app-messages-sender div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
}

.chat-app-messages-sender div p,
.chat-app-messages-receiver div p {
    width: fit-content;
    box-sizing: border-box;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    padding: 8px 10px;
    line-height: 18px;

    background-color: #caccfa;
    border-radius: 8px;
}

.chat-app-messages-receiver div p {
    background-color: #dddddd;
}

.chat-app-messages-sender div time,
.chat-app-messages-receiver div time {
    display: block;
    width: 100%;
    margin-top: 10px;
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #999999;
}

.chat-app-messages-sender div time {
    text-align: right;
}

.chat-app-messages-sender figure,
.chat-app-messages-receiver figure {
    display: block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
}

.chat-app-messages-sender figure img,
.chat-app-messages-receiver figure img {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 834px) {

    .chat-app-messages-sender,
    .chat-app-messages-receiver {
        margin-bottom: 20px;
    }

    .chat-app-messages-sender div p,
    .chat-app-messages-receiver div p {
        font-size: 12px;
        padding: 8px 10px;
        line-height: 16px;
    }

    .chat-app-messages-sender div time,
    .chat-app-messages-receiver div time {
        margin-top: 8px;
        font-size: 12px;
    }

    .chat-app-messages-sender figure,
    .chat-app-messages-receiver figure {
        width: 35px;
        height: 35px;
    }

}

@media screen and (max-width: 414px) {

    .chat-app-messages-sender,
    .chat-app-messages-receiver {
        margin-bottom: 15px;
    }

    .chat-app-messages-sender div p,
    .chat-app-messages-receiver div p {
        font-size: 11px;
        padding: 6px 8px;
        line-height: 16px;
    }

    .chat-app-messages-sender div time,
    .chat-app-messages-receiver div time {
        margin-top: 5px;
        font-size: 11px;
    }

    .chat-app-messages-sender figure,
    .chat-app-messages-receiver figure {
        width: 25px;
        height: 25px;
    }

}
</style>
