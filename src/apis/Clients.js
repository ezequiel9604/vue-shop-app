import Axios from "axios";
import { Months } from "../services/Client";

const baseUrl = "https:/localhost:7227";

export async function submit_login(email_input, password_input){

    const response = await Axios.post(`${baseUrl}/api/Client/Login`,{
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

export async function submit_logout(email_input){

    await Axios.post(`${baseUrl}/api/Client/Logout`,{
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

export async function submit_signup(
    firstname, lastname, email, password, 
    dayofbirth, monthofbirth, yearofbirth, gender) {
    
    const response = await Axios.post(`${baseUrl}/api/Client/Signup`,{
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

export async function submit_characteristics(lang, curr) {

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        const obj = JSON.parse(localStorage.getItem("loggedClient"));

        const response = await Axios.put(`${baseUrl}/api/Client/Edit`, {
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
            if(error.response.status == 400){
                return error.response.data;
            }
        })

        return response;

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

export async function submit_account_info(id, email, password){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        const response = await Axios.put(`${baseUrl}/api/Client/Edit`, {
            id: id,
            email: email,
            password: password
        })
        .then((result)=>{

            const obj = JSON.parse(localStorage.getItem("loggedClient"));

            obj.user.email= email;

            localStorage.setItem("loggedClient", JSON.stringify(obj));

            window.location.href = "http://localhost:3000/myProfile";
        })
        .catch((error)=>{
            if(error.response.status == 400){
                return error.response.data;
            }
        });

        return response;

    }
}

export async function submit_personal_info(
    id, fn, ln, img, firstphone, secondphone, gender,
    streetname, apartment, city, zipcode, state, year, month, day){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
    
        const response = await Axios.put(`${baseUrl}/api/Client/Edit`, {
            id: id,
            firstName: fn,
            lastName: ln,
            genre: gender,
            yearOfBirth: year,
            monthOfBirth: month,
            dayOfBirth: day,

            phoneDtos: [
                {
                    phoneNumber: firstphone,
                    clientId: id,
                },
                {
                    phoneNumber: secondphone,
                    clientId: id,
                },
            ],
            addressDtos:[
                {
                    streetName: streetname,
                    city: city,
                    zipCode: zipcode,
                    state: state,
                    department: apartment,
                    clientId: id
                }
            ]

        })
        .then((result)=>{

            const obj = JSON.parse(localStorage.getItem("loggedClient"));

            obj.user.firstName= fn;
            obj.user.lastName= ln;
            //obj.user.imagepath= img;
            obj.user.genre = gender;
            obj.user.yearOfBirth= year;
            obj.user.monthOfBirth = month;
            obj.user.dayOfBirth= day;

            obj.user.addressDtos[0].streetName = streetname,
            obj.user.addressDtos[0].city = city,
            obj.user.addressDtos[0].state = state,
            obj.user.addressDtos[0].zipCode = zipcode,
            obj.user.addressDtos[0].department = apartment,

            obj.user.phoneDtos[0].phoneNumber = firstphone,
            
            localStorage.setItem("loggedClient", JSON.stringify(obj));

            window.location.href = "http://localhost:3000/myProfile";
        })
        .catch((error)=>{
            console.log(error)
            if(error.response.status == 400){
                return error.response.data;
            }
        });

        return response;

    }

}

export function submitWalletInformation(id, creditcard, creditcardowner, 
    expdate, securitycode){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        // submit to the api

    }
}

export async function submit_delete_account(email){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        const response = await Axios.post(`${baseUrl}/api/Client/Signout`,{
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

export async function submit_appearance(appearance){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        const obj = JSON.parse(localStorage.getItem("loggedClient"));

        const response = await Axios.put(`${baseUrl}/api/Client/Edit`, {
            id: obj.user.id,
            appearance: appearance,
        })
        .then((result)=>{
            
            obj.user.appearance= appearance;

            localStorage.setItem("loggedClient", JSON.stringify(obj));

            //window.location.href = "http://localhost:3000/myProfile";
        })
        .catch((error)=>{
            if(error.response.status == 400){
                return error.response.data;
            }
        })

        return response;

    }
    else {
        const obj = JSON.parse(localStorage.getItem("guestClient"));

        obj.characteristics.appearance= appe;

        localStorage.setItem("guestClient", JSON.stringify(obj));

        window.location.assign("http://localhost:3000/");

    }
}

