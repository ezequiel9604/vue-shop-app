import ItemImage1 from "../imgs/samples/tablet.png";
import ItemImage2 from "../imgs/samples/tablet-2.png";

export const Orders = [
  {
    id: "ORD-025984",
    orderDate: "2021-05-07",
    deliveredDate: "2021-05-08",
    shippingCost: 150,
    total: 6155.91,
    status: "Received",
    clientId: "USR-025671",
  },
  {
    id: "ORD-025036",
    orderDate: "2021-05-08",
    deliveredDate: "2021-05-09",
    shippingCost: 150,
    total: 5155.91,
    status: "Received",
    clientId: "USR-025642",
  },
  {
    id: "ORD-025011",
    orderDate: "2021-05-10",
    deliveredDate: "2021-05-11",
    shippingCost: 150,
    total: 5155.91,
    status: "On its way",
    clientId: "USR-025671",
  },
];

export const Purchases = [
  {
    id: 1,
    amount: 2,
    condition: "None",
    orderId: "ORD-025984",
    itemId: "ART-0002"
  },
  {
    id: 2,
    amount: 1,
    condition: "None",
    orderId: "ORD-025984",
    itemId: "ART-0003"
  },
  {
    id: 3,
    amount: 4,
    condition: "None",
    orderId: "ORD-025984",
    itemId: "ART-0001"
  },
  {
    id: 4,
    amount: 2,
    condition: "None",
    orderId: "ORD-025036",
    itemId: "ART-0005"
  },
  
  {
    id: 5,
    amount: 3,
    condition: "None",
    orderId: "ORD-025011",
    itemId: "ART-0005"
  },
];
