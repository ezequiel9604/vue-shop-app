<script setup>
import { reactive } from 'vue';
import { submitPersonalInformation } from '../../apis/Clients';
import { Days, Months, Years, States, Cities } from '../../services/Client';

const props = defineProps({
    clientId: String,
    firstname: String,
    lastname: String,
    image: String,  
    firstphone: String,
    secondphone: String,
    dateofbirth: Date,
    genre: String,
    address: Object
});

const state = reactive({
    firstname: props.firstname,
    lastname: props.lastname,
    imagePath: "",
    firstphone: props.firstphone,
    secondphone: props.secondphone,
    genre: props.genre,
    streetname: props.address.streetName,
    apartment: props.address.apartment,
    city: props.address.city,
    state: props.address.state,
    zipcode: props.address.zipCode,
    yearofbirth: props.dateofbirth.getFullYear(),
    monthofbirth: props.dateofbirth.getMonth(),
    dayofbirth: props.dateofbirth.getDate()
});

import("../../assets/imgs/users/placeholder-man.png")
    .then((value)=>{
        state.imagePath = value.default;
    })
    .catch((error)=>{
        console.log("Not able to locate the image!");
    })

const handleSubmitForm = () => {

    submitPersonalInformation(props.clientId, state.firstname, state.lastname, state.imagePath, 
        state.firstphone, state.secondphone, state.genre, state.streetname, state.apartment, 
        state.city, state.zipcode, state.state, state.yearofbirth, state.monthofbirth, 
        state.dayofbirth);
}

</script>
<template>

    <div>
        <div class="right-my-profile-content-form-header">
            <h2>{{ props.name }}</h2>
            <figure>
                <img :src="state.imagePath" alt="" />
            </figure>
            <label for="image-file">
                <input type="file" id="image-file" />
                <span>Change image</span>
            </label>
        </div>

        <div class="right-my-profile-content-form-content">

            <div class="right-my-profile-content-form-double-box">
                <h6>Full name:</h6>
                <input v-model="state.firstname" type="text" />
                <input v-model="state.lastname" type="text" />
            </div>
            <div class="right-my-profile-content-form-double-box">
                <h6>Phone:</h6>
                <input v-model="state.firstphone" type="text" />
                <input v-model="state.secondphone" type="text" />
            </div>
            <div class="right-my-profile-content-form-triple-box">
                <h6>Date of birth:</h6>
                <select v-model="state.dayofbirth">
                    <option v-for="d in Days" :value="d" :selected="d === state.dayofbirth" :key="d">{{ d }}</option>
                </select>
                <select v-model="state.monthofbirth">
                    <option v-for="[n, m] in Months" :value="n" :selected="n === state.monthofbirth" :key="n">{{ m }}</option>
                </select>
                <select v-model="state.yearofbirth">
                    <option v-for="y in Years" :value="y" :selected="y === state.yearofbirth" :key="y">{{ y }}</option>
                </select>
            </div>
            <div class="right-my-profile-content-form-mix-box">
                <h6>Address:</h6>
                <input v-model="state.streetname" type="text" style="width:68%" />
                <input v-model="state.apartment" type="text" style="width:30%" />
                <select v-model="state.city">
                    <option v-for="c in Cities" :value="c" :selected="c == state.city" :key="c">{{ c }}</option>
                </select>
                <select v-model="state.state">
                    <option v-for="s in States" :value="s" :selected="s == state.state" :key="s">{{ s }}</option>
                </select>
                <input type="text" style="width:20%" v-model="state.zipcode" />
            </div>
            <div class="right-my-profile-content-form-radio-box">
                <h6>Gender:</h6>
                <label> <input type="radio" v-model="state.genre" value="female" :checked="state.genre == 'female'" />&nbsp; Female</label>
                <label> <input type="radio" v-model="state.genre" value="male" :checked="state.genre == 'male'" />&nbsp; Male</label>
            </div>
            <div class="right-my-profile-content-form-button-box">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam neque vero sequi culpa nulla quis magnam sunt voluptatibus perspiciatis,
                    ex rem error omnis ea? Quisquam itaque impedit facilis! Commodi, facere.</p>

                <button @click="handleSubmitForm">Save changes</button>

            </div>

        </div>
    </div>

</template>
<style>

.right-my-profile-content-form-header{
    width: 60%;
    box-sizing: border-box;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content:left;
    flex-wrap: wrap;
}
.right-my-profile-content-form-header h2{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;

    font-family: "raleway-semibold", sans-serif;
    font-size: 34px;
    color: #333333;
}
.right-my-profile-content-form-header figure{
    width: 140px;
    height: 140px;
    box-sizing: border-box;
    margin-left: 8%;
}
.right-my-profile-content-form-header figure img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.right-my-profile-content-form-header label{
    border: 1px solid;
    width: fit-content;
    box-sizing: border-box;
    margin-left: 5%;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #dddddd;
    border-radius: 6px;
    background-color: #f3f3f3f3;
}
.right-my-profile-content-form-header label input{
    opacity: 0;
    width: 0;
    height: 0;
}
.right-my-profile-content-form-header span{
    padding: 4px 6px;
    font-family: "raleway-regular", sans-serif;
    font-size: 16px;
    color: #333333;
}

@media screen and (max-width: 834px) {
    
    .right-my-profile-content-form-header{
        width: 50%;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .right-my-profile-content-form-header h2{
        margin-bottom: 20px;
        font-size: 28px;
    }
    .right-my-profile-content-form-header figure{
        width: 100px;
        height: 100px;
        margin-left: 8%;
    }
    .right-my-profile-content-form-header span{
        padding: 4px 6px;
        font-size: 14px;
    }

}

@media screen and (max-width: 414px) {
    
    .right-my-profile-content-form-header{
        width: 60%;
        margin-bottom: 20px;
    }
    .right-my-profile-content-form-header h2{
        margin-bottom: 20px;
        font-size: 24px;
    }
    .right-my-profile-content-form-header figure{
        width: 80px;
        height: 80px;
        margin-left: 8%;
    }
    .right-my-profile-content-form-header span{
        padding: 4px 6px;
        font-size: 13px;
    }
}

</style>