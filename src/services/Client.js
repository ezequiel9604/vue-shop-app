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
            user:{
                id: "00000",
                language: "english",
                appearance: "light",
                currancy: "usa / dollars"
            }
        }));

        return JSON.parse(localStorage.getItem("guestClient"));
    }

}


export const Departments = [
    "all", "clothing", "accessories", "shoes", "offices", "home", "technology"
];

export const Languages = [
    "english", "spanish"
]

export const Currancies = [
    "usa / dollars", "dom / pesos"
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
    1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990,
    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010
]
export const States = [
    "Florida", "New York", "Georgia", "Texas"
]
export const Cities = [
    "Miami", "Manhattan", "Atlanta", "Dallas"
]
