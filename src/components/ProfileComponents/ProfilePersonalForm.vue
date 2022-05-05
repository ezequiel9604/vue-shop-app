<script setup>
import UserImage from '../../assets/imgs/users/user-image.jpg';

</script>
<template>

    <div>
        <div class="right-my-profile-content-form-header">
            <h2>Sarah Smith Doe</h2>
            <figure>
                <img :src="UserImage" alt="" />
            </figure>
            <label for="image-file">
                <input type="file" id="image-file" />
                <span>Change image</span>
            </label>
        </div>

        <div class="right-my-profile-content-form-content">

            <div class="right-my-profile-content-form-double-box">
                <h6>Full name:</h6>
                <input type="text" value="Sarah" />
                <input type="text" value="Smith Doe" />
            </div>
            <div class="right-my-profile-content-form-double-box">
                <h6>Phone:</h6>
                <input type="text" value="458-963-7410" />
                <input type="text" value="458-210-4789" />
            </div>
            <div class="right-my-profile-content-form-triple-box">
                <h6>Date of birth:</h6>
                <select>
                    <option value="">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                </select>
                <select>
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                </select>
                <select>
                    <option value="">2022</option>
                    <option value="">2021</option>
                    <option value="">2020</option>
                </select>
            </div>
            <div class="right-my-profile-content-form-mix-box">
                <h6>Address:</h6>
                <input type="text" style="width:68%" value="1234 main street" />
                <input type="text" style="width:30%" value="apt-2b" />
                <select>
                    <option value="">Miami</option>
                </select>
                <select>
                    <option value="">Florida</option>
                </select>
                <input type="text" style="width:20%" value="45687" />
            </div>
            <div class="right-my-profile-content-form-radio-box">
                <h6>Gender:</h6>
                <label> <input type="radio" name="radio" checked />&nbsp; Female</label>
                <label> <input type="radio" name="radio" />&nbsp; Male</label>
            </div>
            <div class="right-my-profile-content-form-button-box">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam neque vero sequi culpa nulla quis magnam sunt voluptatibus perspiciatis,
                    ex rem error omnis ea? Quisquam itaque impedit facilis! Commodi, facere.</p>

                <button>Save changes</button>

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
    
    /* ////////////////////////////////////////////////////// */
    /* ///          right my profile content form         /// */ 
    /* ////////////////////////////////////////////////////// */
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
    
    /* ////////////////////////////////////////////////////// */
    /* ///          right my profile content form         /// */ 
    /* ////////////////////////////////////////////////////// */
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