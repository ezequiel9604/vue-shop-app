<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import SignUpFormHeader from '../components/SignUp/SignUpFormHeader.vue';
import SignUpFormFooter from '../components/SignUp/SignUpFormFooter.vue';
import { submitLogin } from '../apis/Clients';

const state = reactive({
    emailInput: "bryanmay@gmail.com",
    passwordInput: "bryanmay123",
    message: "",
});

const handleSubmitForm = async () => {
    state.message = await submitLogin(state.emailInput, state.passwordInput);
}

const closeMessageAlert = () => { state.message = ''; }

</script>
<template>

    <div class="login-form">

        <div v-if="state.message != ''" class="alert">
            <span @click="closeMessageAlert" class="closebtn">&times;</span>
            {{ state.message }}
        </div>

        <SignUpFormHeader title="Log in form" />

        <div class="signup-login-form-content login-form-content">

            <div class="signup-login-form-content-single-input">
                <strong>Email address:</strong>
                <input v-model="state.emailInput" type="text" placeholder="Email address..." />
            </div>
            <div class="signup-login-form-content-single-input">
                <strong>Password:</strong>
                <input v-model="state.passwordInput" type="text" placeholder="Password..." />
            </div>

            <div class="signup-login-form-content-submit-btn">

                <button @click="handleSubmitForm" type="button">Log in</button>

                <div class="login-form-content-submit-options">
                    <label for="remember">
                        <input type="checkbox" id="remember" />
                        Remember me
                    </label>
                    <RouterLink to="">Forgot your password?</RouterLink>
                </div>

            </div>
        </div>

        <SignUpFormFooter title="Don't have an account yet?" desc="Sign up" link="signup" />

    </div>

</template>
<style>

.login-form {
    width: 100%;
    box-sizing: border-box;
}

.login-form-content {
    width: 30%;
}

.login-form-content-submit-options {
    width: 100%;
    box-sizing: border-box;
    margin-top: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.login-form-content-submit-options label,
.login-form-content-submit-options a {
    display: block;
    width: fit-content;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
}

.login-form-content-submit-options a {
    color: #0099ff;
}

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
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
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

    .login-form-content {
        width: 50%;
    }

    .login-form-content-submit-options label,
    .login-form-content-submit-options a {
        font-size: 12px;
    }

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

    .login-form-content {
        width: 85%;
    }

    .login-form-content-submit-options label,
    .login-form-content-submit-options a {
        font-size: 11px;
    }

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