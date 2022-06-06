<script setup>
import SignUpFormHeader from '../components/SignUp/SignUpFormHeader.vue';
import SignUpFormFooter from '../components/SignUp/SignUpFormFooter.vue';

</script>
<template>
    
    <div class="signup-form">

        <SignUpFormHeader title="Sign up form" />

        <form class="signup-login-form-content">

            <div class="signup-login-form-content-double-input">
                <strong>Full name:</strong>
                <input type="text" />
                <input type="text" />
            </div>

            <div class="signup-login-form-content-single-input">
                <strong>Email address:</strong>
                <input type="text" />
            </div>

            <div class="signup-login-form-content-double-input">
                <strong>Password:</strong>
                <input type="text" />
                <input type="text" />
            </div>

            <div class="signup-login-form-content-triple-input">

                <strong>Date of birth:</strong>
                <select>
                    <option value="">3</option>
                </select>
                <select>
                    <option value="">31</option>
                </select>
                <select>
                    <option value="">2022</option>
                </select>

            </div>

            <div class="signup-login-form-content-single-radio">
                <strong>Password:</strong>
                <label for="gender-woman">
                    <input type="radio" name="gender" id="gender-woman" checked />
                    Woman
                </label>
                <label for="gender-man">
                    <input type="radio" name="gender" id="gender-man" />
                    Man
                </label>
            </div>

            <div class="signup-login-form-content-submit-btn">
                <button type="button">Sign Up</button>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea,
                    illum omnis reiciendis repellat beatae, atque numquam nobis iste animi eos rem.</span>

            </div>

        </form>

        <SignUpFormFooter title="You have an account already?" desc="Log in" link="login" />

    </div>

</template>
<style></style>