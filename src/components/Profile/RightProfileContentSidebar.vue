<script setup>

const props = defineProps({
  onChangeSelectedProfileForm: Function
});

</script>
<template>

    <ul class="right-my-profile-content-sidebar">
        <button @click="() => props.onChangeSelectedProfileForm(0)" class="right-my-profile-content-sidebar-links">
            <p><i class="bi bi-person"></i><strong>Personal Information</strong></p>
        </button>
        <button @click="() => props.onChangeSelectedProfileForm(1)" class="right-my-profile-content-sidebar-links">
            <p><i class="bi bi-info-circle"></i><strong>Account Information</strong></p>
        </button>
        <button @click="() => props.onChangeSelectedProfileForm(2)" class="right-my-profile-content-sidebar-links">
            <p><i class="bi bi-credit-card"></i><strong>My Wallet</strong></p>
        </button>
        <li class="right-my-profile-content-sidebar-links">
            <p><i class="bi bi-palette"></i><strong>Appearance</strong></p>
            <p>
                <label class="right-my-profile-content-sidebar-toggle">
                    <input type="checkbox" />
                    <span class="right-my-profile-content-sidebar-toggle-slider"></span>
                </label>
            </p>
        </li>
    </ul>

</template>
<style>

.right-my-profile-content-sidebar{
    border: 1px solid #dddddd;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 4px;
    background-color: #ffffff;
    border-radius: 6px;

    display: none; /* this will change */
}
.right-my-profile-content-sidebar-links{
    width: 25%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0;
    background-color: #ffffff;
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
    border-right: 1px solid #dddddd;
}
.right-my-profile-content-sidebar-links:nth-child(3){
    width: 20%;
}
.right-my-profile-content-sidebar-links:nth-child(4){
    width: 30%;
    border-right-color: transparent;
}
.right-my-profile-content-sidebar-links p{
    width: fit-content;
    box-sizing: border-box;
    padding: 8px 12px;
}
.right-my-profile-content-sidebar-links p i{
    font-size: 16px;
    color: #333333;
    margin-right: 10px;
}
.right-my-profile-content-sidebar-links p strong{
    font-family: "raleway-regular", sans-serif;
    font-size: 14px;
    color: #333333;
}

.right-my-profile-content-sidebar-toggle{
    box-sizing: border-box;
    display: inline-block;
    width: 50px;
    height: 20px;
    padding: 4px;

    position: relative;

    border: none;
    background-color: #dddddd;
    border-radius: 25px;
    cursor: pointer;
}
.right-my-profile-content-sidebar-toggle input{
    opacity: 0;
    width: 0;
    height: 0;
}
.right-my-profile-content-sidebar-toggle-slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #dddddd;
    border-radius: 25px;
    -webkit-transition: .4s;
    transition: .4s;
}
.right-my-profile-content-sidebar-toggle-slider::before{
    position: absolute;
    content: "";
    width: 40%;
    height: 60%;
    top: 4px;
    left: 6px;
    background-color: #ffffff;
    border-radius: 25px;
    -webkit-transition: .4s;
    transition: .4s;
}
.right-my-profile-content-sidebar-toggle input:checked +
.right-my-profile-content-sidebar-toggle-slider{
    background-color: #0099ff;
}
.right-my-profile-content-sidebar-toggle input:checked +
.right-my-profile-content-sidebar-toggle-slider:before{
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
}

@media screen and (max-width: 834px) {
    
    .right-my-profile-content-sidebar{
        margin-bottom: 40px;
        display: flex; /* this will change */
    }

}

@media screen and (max-width: 414px) {
    
    .right-my-profile-content-sidebar{
        margin-bottom: 20px;
        display: block; /* this will change */
    }

    .right-my-profile-content-sidebar-links{
        width: 100%;
        border-right: 0px;
        border-bottom: 1px solid #dddddd;
    }
    .right-my-profile-content-sidebar-links:nth-child(3){
        width: 100%;
    }
    .right-my-profile-content-sidebar-links:nth-child(4){
        width: 100%;
        border-bottom-color: transparent;
    }
    .right-my-profile-content-sidebar-links p{
        padding: 6px 10px;
    }
    .right-my-profile-content-sidebar-links p i{
        font-size: 14px;
        margin-right: 10px;
    }
    .right-my-profile-content-sidebar-links p strong{
        font-family: "raleway-regular", sans-serif;
        font-size: 13px;
        color: #333333;
    }
    .right-my-profile-content-sidebar-toggle{
        width: 40px;
        height: 20px;
        padding: 4px;
    }
    .right-my-profile-content-sidebar-toggle-slider::before{
        top: 4px;
        left: 4px;
    }
    .right-my-profile-content-sidebar-toggle input:checked +
    .right-my-profile-content-sidebar-toggle-slider:before{
        -webkit-transform: translateX(16px);
        -ms-transform: translateX(16px);
        transform: translateX(16px);
    }
    
}

</style>
