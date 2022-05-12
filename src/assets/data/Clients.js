import userImage from '../imgs/users/user-image.jpg';

const Clients =[
    {
        name: "John Smith Doe",
        email: "johndoe1@gmail.com",
        phone: "809-000-0000",
        image: userImage,
        dateOfBirth: new Date(1996, 5, 4),
        genre: "male",
        address: "123 main street, apt 4-b, Miami, Florida, 23548",
        note: "to the delivery guy, once he arrives please ring the door bell.",
        wallets: [
            {
                creditCardNumber: "4562-1963-7502-9438",
                creditCardOwner: "John Smith Doe",
                expirationDate: "11/2022",
                securityCode: "458"
            }
        ]
    },
    {
        name: "Sarah Doe",
        email: "sarahdoe1@gmail.com",
        phone: "809-000-0000",
        image: userImage,
        dateOfBirth: new Date(1996, 5, 4),
        genre: "female",
        address: "123 main street, apt 4-b, Miami, Florida, 23548",
        note: "to the delivery guy, once he arrives please ring the door bell",
        wallets: [
            {
                creditCardNumber: "4562-1963-7502-9438",
                creditCardOwner: "Sarah Smith Doe",
                expirationDate: "11/2022",
                securityCode: "458"
            }
        ]
    },
];

export default Clients;