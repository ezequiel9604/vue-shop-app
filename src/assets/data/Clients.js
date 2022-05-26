import userImage from '../imgs/users/user-image.jpg';
import ManImage from '../imgs/users/placeholder-man.png';
import WomanImage from '../imgs/users/placeholder-woman.png';

const Clients =[
    {   
        id: "USR-025671",
        firstname: "John",
        lastname: "Smith Doe",
        email: "johndoe1@gmail.com",
        firstphone: "809-111-0000",
        secondphone: "809-222-0000",
        image: ManImage,
        dateOfBirth: new Date(1996, 5, 10),
        genre: "male",
        characteristics:{
            language: "ENGLISH",
            appearance: "light",
            currancy: "USA / DOLLARS"
        },
        address: {
            streetName: "123 main street",
            apartment: "apt 4-b",
            city: "Miami",
            state: "Florida",
            zipCode: "56810"
        },
        note: "to the delivery guy, once he arrives please ring the door bell.",
        wallets: [
            {
                creditCardNumber: "4562-1963-7502-9438",
                creditCardOwner: "John Smith Doe",
                expirationDate: "11/2022",
                securityCode: "458"
            }
        ],
    },
    {
        id: "USR-025642",
        firstname: "Sarah",
        lastname: "Johnson",
        email: "sarahdoe1@gmail.com",
        firstphone: "809-111-0000",
        secondphone: "809-222-0000",
        image: ManImage,
        dateOfBirth: new Date(1996, 5, 4),
        genre: "female",
        characteristics:{
            language: "SPANISH",
            appearance: "dark",
            currancy: "DOM / PESOS"
        },
        address: {
            streetname: "123 main street",
            apartment: "apt 4-b",
            city: "Miami",
            state: "Florida",
            zipcode: "56810"
        },
        note: "to the delivery guy, once he arrives please ring the door bell",
        wallets: [
            {
                creditCardNumber: "4562-1963-7502-9438",
                creditCardOwner: "Sarah Smith Doe",
                expirationDate: "11/2022",
                securityCode: "458"
            }
        ],
    },
];

export default Clients;