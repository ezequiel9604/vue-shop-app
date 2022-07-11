<script setup>

const props = defineProps({
  id: String,
  name: String,
  image: String,
  selected: String,
  onChangeSelectedAdmin: Function
});

</script>
<template>

    <label :class="props.selected == props.id? 
        'chat-app-admins-content-admin-toggle chat-app-admins-content-admin-toggle-actived' : 
        'chat-app-admins-content-admin-toggle'"
        @click="() => onChangeSelectedAdmin(props.id)">

        <figure>
            <img :src="props.image" alt="" />
        </figure>

        <article>
            <h4>{{ props.name }}</h4>
            <time>2022/05/13</time>
        </article>

        <input v-if="props.selected" type="radio" name="admin" checked />

        <input v-else type="radio" name="admin" />

    </label>

</template>
<style>

.chat-app-admins-content-admin-toggle {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 0;

    display: flex;
    align-items: center;

    cursor: pointer;
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
}

.chat-app-admins-content-admin-toggle:hover {
    background-color: #f3f3f3;
}

.chat-app-admins-content-admin-toggle-actived {
    background-color: #f3f3f3;
}

.chat-app-admins-content-admin-toggle figure {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 10%;
    margin-right: 5%;
}

.chat-app-admins-content-admin-toggle figure img {
    width: 100%;
    height: 100%;
}

.chat-app-admins-content-admin-toggle article {
    display: block;
    width: fit-content;
}

.chat-app-admins-content-admin-toggle article h4 {
    font-family: "raleway-medium", sans-serif;
    font-size: 14px;
    color: #333333;
    margin-bottom: 5px;
}

.chat-app-admins-content-admin-toggle article time {
    font-family: "raleway-regular", sans-serif;
    font-size: 13px;
    color: #999999;
}

.chat-app-admins-content-admin-toggle input {
    width: 0;
    height: 0;
    visibility: hidden;
}

@media screen and (max-width: 834px) {

    /* ////////////////////////////////////////////////////// */
    /* ///      chat app admins content admin toggle      /// */
    /* ////////////////////////////////////////////////////// */
    .chat-app-admins-content-admin-toggle {
        padding: 8px 0;
    }

    .chat-app-admins-content-admin-toggle figure {
        width: 30px;
        height: 30px;
        margin-left: 10%;
        margin-right: 5%;
    }

    .chat-app-admins-content-admin-toggle article h4 {
        font-size: 12px;
        margin-bottom: 3px;
    }

    .chat-app-admins-content-admin-toggle article time {
        font-size: 12px;
    }

}

</style>
