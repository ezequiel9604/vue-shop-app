<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import SignUpFormHeader from '../components/SignUp/SignUpFormHeader.vue';
import SignUpFormFooter from '../components/SignUp/SignUpFormFooter.vue';
import { submitLogin } from '../apis/Clients'; 

const state = reactive({
    emailInput: "bryanmay@gmail.com",
    passwordInput: "bryanmay123",
})


const handleSubmitForm = () => {

    submitLogin(state.emailInput, state.passwordInput);

}




</script>
<template>
    
    <div class="login-form">

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


.login-form{
    width: 100%;
    box-sizing: border-box;
}

.login-form-content{
    width: 30%;
}

.login-form-content-submit-options{
    width: 100%;
    box-sizing: border-box;
    margin-top: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.login-form-content-submit-options label, 
.login-form-content-submit-options a{
    display: block;
    width: fit-content;
    box-sizing: border-box;

    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
}
.login-form-content-submit-options a{
    color: #0099ff;
}

@media screen and (max-width: 834px) {
    
    .login-form-content{
        width: 50%;
    }

    .login-form-content-submit-options label, 
    .login-form-content-submit-options a{
        font-size: 12px;
    }
}
@media screen and (max-width: 414px) {
    
    .login-form-content{
        width: 85%;
    }

    .login-form-content-submit-options label, 
    .login-form-content-submit-options a{
        font-size: 11px;
    }
}

</style>