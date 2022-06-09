import Axios from "axios";

export async function submitLogin(email_input, password_input){

    await Axios.post("https://localhost:7227/api/Client/Login",{
        email: email_input,
        password: password_input
    })
    .then((result)=>{
        console.log(result.data);

        localStorage.setItem("loggedClient", JSON.stringify(result.data));

        window.location.href = "http://localhost:3000";

    })
    .catch((error)=>{
        console.log(error.response.data);
    })

}

export async function submitLogout(email_input){

    console.log(email_input)
    await Axios.post("https://localhost:7227/api/Client/Logout",{
        email: email_input,
    })
    .then((result)=>{

        localStorage.removeItem("loggedClient");

        window.location.href = "http://localhost:3000";

    })
    .catch((error)=>{
        console.log(error.response.data);
    })

}

export function submitPersonalInformation(id, firstname, lastname, img, firstphone, secondphone, gender,
    streetname, apartment, city, zipcode, state, year, month, day){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        // submit to the api

    }

}

export function submitAllCharacteristics(id, lang, curr) {

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        // submit to the api
        console.log("ho")
    }
    else {
        console.log("hi")
        const obj = JSON.parse(localStorage.getItem("guestClient"));

        obj.characteristics.currancy= curr;
        obj.characteristics.language= lang;

        localStorage.setItem("guestClient", JSON.stringify(obj));

        window.location.assign("http://localhost:3000/");

        console.log(JSON.parse(localStorage.getItem("guestClient")));

    }

}

export function submitAccountInformation(id, email, password){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        // submit to the api

    }
}

export function submitWalletInformation(id, creditcard, creditcardowner, 
    expdate, securitycode){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        // submit to the api

    }
}

export function submitDeleteAccount(id, email, password){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        // submit to the api

    }
}

export function submitAppearance(id, appe){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        // submit to the api

    }
    else {
        const obj = JSON.parse(localStorage.getItem("guestClient"));

        obj.characteristics.appearance= appe;

        localStorage.setItem("guestClient", JSON.stringify(obj));

        window.location.assign("http://localhost:3000/");

        console.log(JSON.parse(localStorage.getItem("guestClient")));

    }
}

