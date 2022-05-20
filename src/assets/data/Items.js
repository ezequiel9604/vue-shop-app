import ItemImage1 from "../imgs/samples/tablet.png";
import ItemImage2 from "../imgs/samples/tablet-2.png";

const departments = [
    "clothing", "Accessories", "Shoes", 
    "Offices", "Home", "Technology"
];

const Items = [
    { 
        id: "ART-0001",
        title: `1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1,ItemImage2],
        descount: 25,
        color: "gray",
        category: "clothing",
        quality: 3.2,
        stock: 6,
    },
    { 
        id: "ART-0002",
        title: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1,ItemImage2],
        descount: 25,
        color: "blue",
        category: "accessories",
        quality: 2.8,
        stock: 6,
    },
    { 
        id: "ART-0003",
        title: `3Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1,ItemImage2],
        descount: 25,
        color: "green",
        category: "shoes",
        quality: 5.0,
        stock: 6,
    },
    { 
        id: "ART-0004",
        title: `4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1,ItemImage2],
        descount: 25,
        color: "purple",
        category: "technology",
        quality: 4.1,
        stock: 6,
    },
    { 
        id: "ART-0005",
        title: `5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1,ItemImage2],
        descount: 25,
        color: "gray",
        category: "office",
        quality: 2.7,
        stock: 6,
    },
    { 
        id: "ART-0006",
        title: `6 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1,ItemImage2],
        descount: 25,
        color: "brown",
        category: "home",
        quality: 3.9,
        stock: 6,
    },
    { 
        id: "ART-0007",
        title: `7 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1,ItemImage2],
        descount: 0,
        color: "green",
        category: "technology",
        quality: 4.0,
        stock: 6,
    },
];

export default Items;