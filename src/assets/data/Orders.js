import ItemImage1 from '../imgs/samples/tablet.png';
import ItemImage2 from '../imgs/samples/tablet-2.png';

export const Orders = [
  {
    id: 'ORD-025984',
    orderDate: '2021-05-07',
    deliveredDate: '2021-05-08',
    shippingCost: 150,
    total: 6155.91,
    status: 'Received',
    clientId: 'CLT-1134'
  },
  {
    id: 'ORD-025036',
    orderDate: '2021-05-08',
    deliveredDate: '2021-05-09',
    shippingCost: 150,
    total: 5155.91,
    status: 'Canceled',
    clientId: 'CLT-1134'
  },
  {
    id: 'ORD-025011',
    orderDate: '2021-05-10',
    deliveredDate: '2021-05-11',
    shippingCost: 150,
    total: 5155.91,
    status: 'On its way',
    clientId: 'CLT-1134'
  },
  {
    id: 'ORD-025000',
    orderDate: '2021-05-10',
    deliveredDate: '2021-05-11',
    shippingCost: 150,
    total: 5155.91,
    status: 'On its way',
    clientId: 'CLT-1134'
  }
];

export const Purchases = [
  {
    id: 1,
    amount: 2,
    condition: 'None',
    orderId: 'ORD-025984',
    itemId: 'ART-0254'
  },
  {
    id: 2,
    amount: 1,
    condition: 'None',
    orderId: 'ORD-025984',
    itemId: 'ART-0003'
  },
  {
    id: 3,
    amount: 4,
    condition: 'None',
    orderId: 'ORD-025984',
    itemId: 'ART-0254'
  },
  {
    id: 4,
    amount: 2,
    condition: 'None',
    orderId: 'ORD-025036',
    itemId: 'ART-0254'
  },
  {
    id: 5,
    amount: 3,
    condition: 'None',
    orderId: 'ORD-025011',
    itemId: 'ART-3215'
  },

  {
    id: 6,
    amount: 3,
    condition: 'None',
    orderId: 'ORD-025000',
    itemId: 'ART-0254'
  },
  {
    id: 7,
    amount: 3,
    condition: 'None',
    orderId: 'ORD-025000',
    itemId: 'ART-0254'
  }
];
