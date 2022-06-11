<script setup>
import { reactive } from 'vue';
import SignUpFormHeader from '../components/SignUp/SignUpFormHeader.vue';
import SignUpFormFooter from '../components/SignUp/SignUpFormFooter.vue';
import { Days, Months, Years } from '../services/Client';
import { submitSignup } from '../apis/Clients';

const state = reactive({
    firstname: "Rogger",
    lastname: "Taylor",
    email: "roggertaylor@gmail.com",
    password: "roggertaylor123",
    repeatedpassword: "roggertaylor123",
    dayofbirth: 1,
    monthofbirth: 0,
    yearofbirth: 1990,
    gender: "male",
    message: "",
})

const handleSubmitForm = async () => {

    state.message = await submitSignup(state.firstname, state.lastname, state.email, state.password, state.dayofbirth,
        state.monthofbirth, state.yearofbirth, state.gender);
    
}

const closeMessageAlert = ()=>{
    state.message = '';
}

</script>
<template>

    <div class="signup-form">

        <div v-if="state.message != ''" class="alert">
            <span @click="closeMessageAlert" class="closebtn">&times;</span>
            {{ state.message }}
        </div>

        <SignUpFormHeader title="Sign up form" />

        <div class="signup-login-form-content">

            <div class="signup-login-form-content-double-input">
                <strong>Full name:</strong>
                <input v-model="state.firstname" type="text" />
                <input v-model="state.lastname" type="text" />
            </div>

            <div class="signup-login-form-content-single-input">
                <strong>Email address:</strong>
                <input v-model="state.email" type="text" />
            </div>

            <div class="signup-login-form-content-double-input">
                <strong>Password:</strong>
                <input v-model="state.password" type="text" />
                <input v-model="state.repeatedpassword" type="text" />
            </div>

            <div class="signup-login-form-content-triple-input">

                <strong>Date of birth:</strong>
                <select v-model="state.dayofbirth">
                    <option v-for="d in Days" :value="d" :selected="d == state.dayofbirth" :key="d">{{ d }}</option>
                </select>
                <select v-model="state.monthofbirth">
                    <option v-for="[n, m] in Months" :value="n" :selected="m == state.dayofbirth" :key="n">{{ m }}
                    </option>
                </select>
                <select v-model="state.yearofbirth">
                    <option v-for="y in Years" :value="y" :selected="y == state.dayofbirth" :key="y">{{ y }}</option>
                </select>

            </div>

            <div class="signup-login-form-content-single-radio">
                <strong>Gender:</strong>
                <label for="gender-woman">
                    <input v-model="state.gender" type="radio" name="gender" value="female" id="gender-woman"
                        :checked="state.gender == 'female'" />
                    Woman
                </label>
                <label for="gender-man">
                    <input v-model="state.gender" type="radio" name="gender" value="male" id="gender-man"
                        :checked="state.gender == 'male'" />
                    Man
                </label>
            </div>

            <div class="signup-login-form-content-submit-btn">
                <button @click="handleSubmitForm">Sign Up</button>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea,
                    illum omnis reiciendis repellat beatae, atque numquam nobis iste animi eos rem.</span>

            </div>

        </div>

        <SignUpFormFooter title="You have an account already?" desc="Log in" link="login" />

    </div>

</template>
<style>

.alert {
    padding: 20px;
    background-color: #f44336;
    color: white;
    font-family: "raleway-semibold", sans-serif;
    font-size: 16px;
    opacity: 0;
    animation-name: animation-alert;
    animation-delay: 0.5s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

@keyframes animation-alert {
    from{ opacity: 0;}
    to{ opacity: 1; }
}

.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.closebtn:hover {
    color: black;
}

@media screen and (max-width: 834px) {
    
    .alert {
        padding: 15px;
        font-size: 14px;
    }

    .closebtn {
        margin-left: 10px;
        font-size: 18px;
        line-height: 14px;
    }

}

@media screen and (max-width: 414px) {
    
    .alert {
        padding: 15px;
        font-size: 12px;
    }

    .closebtn {
        margin-left: 10px;
        font-size: 16px;
        line-height: 12px;
    }

}

</style>