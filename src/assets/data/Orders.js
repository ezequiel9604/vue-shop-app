import ItemImage1 from "../imgs/samples/tablet.png";
import ItemImage2 from "../imgs/samples/tablet-2.png";

const Orders = [
  {
    id: "ORD-025984",
    orderDate: "2021-05-07",
    deliveredDate: "2021-05-08",
    shippingCost: 150,
    total: 5155.91,
    client: {
      name: "John Smith Doe",
      email: "johndoe0102@gmail.com",
      phone: "809-111-0000",
      address:
        "Casa 8, Francisco Henriquez y Carvajal, Brisas del Este, Santo Domingo Este",
      indications:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quaerat " +
        "suscipit esse voluptate! Odit quia id possimus.",
    },
    items: [
      {
        id: "ITEM-0001",
        title: `1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis quae vel recusandae dolorem velit delectus unde facere 
                    libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1, ItemImage2],
        descount: 25,
        quality: 3.2,
        status: "Received",
        condition: "None",
        subtotal: 1400,
        amount: 1,
        specifications:{
          size: '17"',
          capacity: "4Gb",
          color: "Black"
      }
      },
      {
        id: "ITEM-0002",
        title: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis quae vel recusandae dolorem velit delectus unde facere 
                    libero maiores inventore.`,
        price: 1700,
        images: [ItemImage1, ItemImage2],
        descount: 25,
        quality: 3.2,
        status: "On its way",
        condition: "None",
        subtotal: 3400,
        amount: 2,
        specifications:{
          size: '17"',
          capacity: "4Gb",
          color: "Black"
      }
      },
    ],
  },
  {
    id: "ORD-025985",
    orderDate: "2021-05-07",
    deliveredDate: "2021-05-08",
    shippingCost: 150,
    total: 5155.91,
    client: {
      name: "John Smith Doe",
      email: "johndoe0102@gmail.com",
      phone: "809-111-0000",
      address:
        "Casa 8, Francisco Henriquez y Carvajal, Brisas del Este, Santo Domingo Este",
      indications:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quaerat " +
        "suscipit esse voluptate! Odit quia id possimus.",
    },
    items: [
      {
        id: "ITEM-0001",
        title: `1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis quae vel recusandae dolorem velit delectus unde facere 
                    libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1, ItemImage2],
        descount: 25,
        quality: 3.2,
        status: "Received",
        condition: "None",
        subtotal: 1400,
        amount: 1,
        specifications:{
            size: '17"',
            capacity: "4Gb",
            color: "Black"
        }
      },
    ],
  },
  {
    id: "ORD-025984",
    orderDate: "2021-05-07",
    deliveredDate: "2021-05-08",
    shippingCost: 150,
    total: 5155.91,
    client: {
      name: "John Smith Doe",
      email: "johndoe0102@gmail.com",
      phone: "809-111-0000",
      address:
        "Casa 8, Francisco Henriquez y Carvajal, Brisas del Este, Santo Domingo Este",
      indications:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quaerat " +
        "suscipit esse voluptate! Odit quia id possimus.",
    },
    items: [
      {
        id: "ITEM-0001",
        title: `1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis quae vel recusandae dolorem velit delectus unde facere 
                    libero maiores inventore.`,
        price: 1400,
        images: [ItemImage1, ItemImage2],
        descount: 25,
        quality: 3.2,
        status: "Received",
        condition: "None",
        subtotal: 1400,
        amount: 1,
        specifications:{
          size: '17"',
          capacity: "4Gb",
          color: "Black"
      }
      },
      {
        id: "ITEM-0002",
        title: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis quae vel recusandae dolorem velit delectus unde facere 
                    libero maiores inventore.`,
        price: 1700,
        images: [ItemImage1, ItemImage2],
        descount: 25,
        quality: 3.2,
        status: "On its way",
        condition: "None",
        subtotal: 3400,
        amount: 2,
        specifications:{
          size: '17"',
          capacity: "4Gb",
          color: "Black"
      }
      },
    ],
  },
];

export default Orders;
