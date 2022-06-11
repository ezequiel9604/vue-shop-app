import Axios from "axios";

export async function submitLogin(email_input, password_input){

    const response = await Axios.post("https://localhost:7227/api/Client/Login",{
        email: email_input,
        password: password_input
    })
    .then((result)=>{

        localStorage.setItem("loggedClient", JSON.stringify(result.data));

        window.location.href = "http://localhost:3000";
    })
    .catch((error)=> {
        if(error.response.status == 400){
            return error.response.data;
        }
    });

    return response;

}

export async function submitLogout(email_input){

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

export async function submitSignup(firstname, lastname, email, password, dayofbirth, monthofbirth, 
    yearofbirth, gender) {
    
    const response = await Axios.post("https://localhost:7227/api/Client/Signup",{
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        genre: gender,
        yearofbirth: yearofbirth,
        monthofbirth: monthofbirth,
        dayofbirth: dayofbirth
    })
    .then((result)=> {
        window.location.href = "http://localhost:3000";
    })
    .catch((error)=> {
        if(error.response.status == 400){
            return error.response.data;
        }
    });

    return response;

}

export function submitPersonalInformation(id, firstname, lastname, img, firstphone, secondphone, gender,
    streetname, apartment, city, zipcode, state, year, month, day){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        // submit to the api

    }

}

export async function submitAllCharacteristics(lang, curr) {

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        const obj = JSON.parse(localStorage.getItem("loggedClient"));

        await Axios.put("https://localhost:7227/api/Client/Edit", {
            id: obj.user.id,
            currancy: curr,
            language: lang
        })
        .then((result)=>{

            obj.user.currancy= curr;
            obj.user.language= lang;

            localStorage.setItem("loggedClient", JSON.stringify(obj));

            window.location.href = "http://localhost:3000";
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    else {

        const obj = JSON.parse(localStorage.getItem("guestClient"));

        obj.user.currancy= curr;
        obj.user.language= lang;

        localStorage.setItem("guestClient", JSON.stringify(obj));

        window.location.assign("http://localhost:3000/");

        console.log(JSON.parse(localStorage.getItem("guestClient")));

    }

}

export async function submitAccountInformation(email, password){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        const obj = JSON.parse(localStorage.getItem("loggedClient"));

        await Axios.put("https://localhost:7227/api/Client/Edit", {
            id: obj.user.id,
            email: email,
            password: password
        })
        .then((result)=>{

            obj.user.email= email;
            obj.user.password= password;

            localStorage.setItem("loggedClient", JSON.stringify(obj));

            window.location.href = "http://localhost:3000/myProfile";
        })
        .catch((error)=>{
            console.log(error);
        })

    }
}

export function submitWalletInformation(id, creditcard, creditcardowner, 
    expdate, securitycode){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        // submit to the api

    }
}

export async function submitDeleteAccount(email){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        const response = await Axios.post("https://localhost:7227/api/Client/Signout",{
            email: email
        })
        .then((result)=> {

            localStorage.removeItem("loggedClient");

            window.location.href = "http://localhost:3000";

        })
        .catch((error)=> {
            if(error.response.status == 400){
                return error.response.data;
            }
        });

        return response;
    }
}

export async function submitAppearance(appearance){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        const obj = JSON.parse(localStorage.getItem("loggedClient"));

        await Axios.put("https://localhost:7227/api/Client/Edit", {
            id: obj.user.id,
            appearance: appearance,
        })
        .then((result)=>{
            
            
            obj.user.appearance= appearance;

            localStorage.setItem("loggedClient", JSON.stringify(obj));

            //window.location.href = "http://localhost:3000/myProfile";
        })
        .catch((error)=>{
            console.log(error);
        })

    }
    else {
        const obj = JSON.parse(localStorage.getItem("guestClient"));

        obj.characteristics.appearance= appe;

        localStorage.setItem("guestClient", JSON.stringify(obj));

        window.location.assign("http://localhost:3000/");

        console.log(JSON.parse(localStorage.getItem("guestClient")));

    }
}

