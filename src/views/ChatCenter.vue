<script setup>
import { ref } from 'vue';
import ColumnMediumSample from '../components/SearchResults/ColumnMediumSample.vue';
import ChatCenterToggleButton from '../components/ChatCenter/ChatCenterToggleButton.vue';
import ChatCenterMessage from '../components/ChatCenter/ChatCenterMessage.vue';
import ChatCenterSubmit from '../components/ChatCenter/ChatCenterSubmit.vue';
import { Items } from '../assets/data/Items';
import Admins from '../assets/data/Admins';
import Clients from '../assets/data/Clients';
import Chats from '../assets/data/Chats';

const selectedAdmin = ref(Admins[0].id);

const changeSeletedAdmin = (id) => {
    selectedAdmin.value = id;
}

const getImageOfSender = (sender, adminId, clientId) => {

    let image;

    if(sender == "client")
    {
        Clients.forEach((current) => {
            if(current.id == clientId)
                image = current.image;
        });
        return image;
    }

    Admins.forEach((current) => {
        if(current.id == adminId)
            image = current.image;
    });
    return image;

}

</script>
<template>

    <div class="sections">

        <div class="sections-headers">
            <h2>Chat center</h2>
        </div>

        <div class="chat-center-content">

            <div class="chat-center-content-left">

                <div class="chat-app">

                    <div class="chat-app-admins">

                        <div class="chat-app-admins-header">
                            Administrators
                        </div>

                        <div class="chat-app-admins-content">

                            <ChatCenterToggleButton v-for="a in Admins"
                                :id="a.id"
                                :name="a.name"
                                :image="a.image" 
                                :selected="selectedAdmin"
                                :onChangeSelectedAdmin="changeSeletedAdmin"
                                :key="a.id"
                                />

                        </div>

                    </div>

                    <div class="chat-app-messages">

                        <div class="chat-app-messages-hidden-admins">
                            <h6>Chat with:</h6>
                            <select name="">
                                <option v-for="a in Admins" :value="a.name" :key="a.id">
                                    {{ a.name }}
                                </option>
                            </select>
                        </div>

                        <div class="chat-app-messages-header">
                            Chatting with: John Smith Doe
                        </div>

                        <div class="chat-app-messages-content">

                            <ChatCenterMessage v-for="c in Chats"
                                :image="getImageOfSender(c.sender, c.adminId, c.clientId)"
                                :id="c.id"
                                :text="c.text"
                                :date="c.date"
                                :sender="c.sender"
                                :key="c.id" 
                                />

                        </div>

                        <ChatCenterSubmit />

                    </div>

                </div>

            </div>

            <div class="chat-center-content-right">

                <div class="chat-center-content-right-recommendation">

                    <ColumnMediumSample v-for="i in Items.slice(0, 3)"
                        :descount="i.descount"
                        :images="i.images"
                        :title="i.title"
                        :price="i.price" 
                        :key="i.id"
                        />

                </div>

            </div>

        </div>

    </div>

</template>
<style>

.chat-center-content{
    width: 85%;
    box-sizing: border-box;
    margin: 40px auto;
    margin-bottom: 200px;

    display: flex;
    justify-content: space-between;
    align-self: flex-start;
}

/* ////////////////////////////////////////////////////// */
/* ///            chat center content left            /// */ 
/* ////////////////////////////////////////////////////// */
.chat-center-content-left{
    width: 75%;
    box-sizing: border-box;
}

/* ////////////////////////////////////////////////////// */
/* ///                        chat app                /// */ 
/* ////////////////////////////////////////////////////// */
.chat-app{
    width: 100%;
    height: 600px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    border: 2px solid #cccccc;
    border-radius: 8px;
    overflow: hidden;
}

.chat-app-admins{
    width: 30%;
    box-sizing: border-box;
}

.chat-app-admins-header, .chat-app-messages-header{
    width: 100%;
    height: 8%;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dddddd;

    font-family: "raleway-medium", sans-serif;
    font-size: 18px;
    color: #333333;
}

.chat-app-admins-content{
    width: 100%;
    box-sizing: border-box;
}

/* ////////////////////////////////////////////////////// */
/* ///                chat app messages               /// */ 
/* ////////////////////////////////////////////////////// */
.chat-app-messages{
    width: 70%;
    box-sizing: border-box;
    border-left: 1px solid #cccccc;
    overflow: hidden;
}

/* ////////////////////////////////////////////////////// */
/* ///        chat app messages hidden admins         /// */ 
/* ////////////////////////////////////////////////////// */
.chat-app-messages-hidden-admins{
    width: 100%;
    min-height: 8%;
    box-sizing: border-box;

    display: none; /* this will change */
    justify-content: space-evenly;
    align-items: center;
}
.chat-app-messages-hidden-admins h6{
    width: 20%;
    font-family: "raleway-medium", sans-serif;
    font-size: 11px;
}
.chat-app-messages-hidden-admins select{
    display: block;
    width: 70%;
    font-family: "raleway-medium", sans-serif;
    font-size: 11px;
    padding: 4px;

    border: 1px solid #dddddd;
    border-radius: 4px;
}

/* ////////////////////////////////////////////////////// */
/* ///            chat app messages content           /// */ 
/* ////////////////////////////////////////////////////// */
.chat-app-messages-content{
    width: 100%;
    height: 82%;
    box-sizing: border-box;
    padding: 20px 0;

    background-color: #fafafa;
    overflow: auto;
}

/* ////////////////////////////////////////////////////// */
/* ///             chat center content right          /// */ 
/* ////////////////////////////////////////////////////// */
.chat-center-content-right{
    width: 18%;
    box-sizing: border-box;
}

.chat-center-content-right-recommendation{
    width: fit-content;
}

@media screen and (max-width: 834px) {
    
    /* ////////////////////////////////////////////////////// */
    /* ///            chat center content left            /// */ 
    /* ////////////////////////////////////////////////////// */
    .chat-center-content-left{
        width: 100%;
    }
    
    /* ////////////////////////////////////////////////////// */
    /* ///                        chat app                /// */ 
    /* ////////////////////////////////////////////////////// */
    .chat-app{
        height: 500px;
    }

    .chat-app-admins{
        width: 25%;
    }
    .chat-app-admins-header, .chat-app-messages-header{
        height: 8%;
        font-size: 14px;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///                chat app messages               /// */ 
    /* ////////////////////////////////////////////////////// */
    .chat-app-messages{
        width: 75%;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///            chat app messages content           /// */ 
    /* ////////////////////////////////////////////////////// */
    .chat-app-messages-content{
        height: 82%;
        padding: 15px 0;
    }
    
    /* ////////////////////////////////////////////////////// */
    /* ///             chat center content right          /// */ 
    /* ////////////////////////////////////////////////////// */
    .chat-center-content-right{
        display: none;
    }

}

@media screen and (max-width: 414px) {
    
    .chat-center-content{
        width: 90%;
        margin: 20px auto;
        margin-bottom: 100px;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///                        chat app                /// */ 
    /* ////////////////////////////////////////////////////// */
    .chat-app{
        height: 500px;
    }

    .chat-app-admins{
        display: none;
    }
    .chat-app-admins-header, .chat-app-messages-header{
        height: 8%;
        font-size: 12px;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///        chat app messages hidden admins         /// */
    /* ////////////////////////////////////////////////////// */
    .chat-app-messages-hidden-admins {
        display: flex;
        /* this will change */
    }

    /* ////////////////////////////////////////////////////// */
    /* ///                chat app messages               /// */ 
    /* ////////////////////////////////////////////////////// */
    .chat-app-messages{
        width: 100%;
        border-left: 0;
    }

    /* ////////////////////////////////////////////////////// */
    /* ///            chat app messages content           /// */ 
    /* ////////////////////////////////////////////////////// */
    .chat-app-messages-content{
        height: 76%;
    }

}

</style>