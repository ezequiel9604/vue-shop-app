//import Clients from '../apis/Clients.js';
import Clients from '../assets/data/Clients';

export function getLoggedClient(){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        return JSON.parse(localStorage.getItem("loggedClient"));
    }
    else if(JSON.parse(localStorage.getItem("guestClient"))){
        return JSON.parse(localStorage.getItem("guestClient"));
    }
    else{
        localStorage.setItem("guestClient", JSON.stringify({   
            id: "00000",
            characteristics:{
                language: "SPANISH",
                appearance: "light",
                currancy: "USA / DOLLARS"
            }
        }));

        return JSON.parse(localStorage.getItem("guestClient"));
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

export function submitPersonalInformation(id, firstname, lastname, img, firstphone, secondphone, gender,
    streetname, apartment, city, zipcode, state, year, month, day){

    if(JSON.parse(localStorage.getItem("loggedClient"))){
        
        // submit to the api

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



export const Departments = [
    "all", "clothing", "accessories", "shoes", "offices", "home", "technology"
];

export const Languages = [
    "ENGLISH", "SPANISH"
]

export const Currancies = [
    "USA / DOLLARS", "DOM / PESOS"
]

export const Days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
]
export const Months = [
    [0, "January"], [1, "February"], [2, "March"], [3, "April"], [4, "May"], [5, "June"],
    [6, "July"], [7, "Augost"], [8, "September"], [9, "October"], [10, "November"], [11, "December"]
]
export const Years = [
    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999
]
export const States = [
    "Florida", "New York", "Georgia", "Texas"
]
export const Cities = [
    "Miami", "Manhattan", "Atlanta", "Dallas"
]
