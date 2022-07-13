
export const Orders = [
  {
    id: 'ORD-025984',
    orderDate: '2021-05-07',
    deliveredDate: '2021-05-08',
    shippingCost: 150,
    total: 6155.91,
    status: 'received',
    clientId: 'CLT-1134'
  },
  {
    id: 'ORD-025036',
    orderDate: '2021-05-08',
    deliveredDate: '2021-05-09',
    shippingCost: 150,
    total: 5155.91,
    status: 'canceled',
    clientId: 'CLT-1134'
  },
  {
    id: 'ORD-025011',
    orderDate: '2021-05-10',
    deliveredDate: '2021-05-11',
    shippingCost: 150,
    total: 5155.91,
    status: 'on its way',
    clientId: 'CLT-1134'
  },
  {
    id: 'ORD-025000',
    orderDate: '2021-05-10',
    deliveredDate: '2021-05-11',
    shippingCost: 150,
    total: 5155.91,
    status: 'on its way',
    clientId: 'CLT-1134'
  }
];

export const Purchases = [
  {
    id: 1,
    amount: 2,
    condition: 'None',
    orderId: 'ORD-025984',
    itemId: 'ART-0254',
    subItemId: 2
  },
  {
    id: 2,
    amount: 1,
    condition: 'None',
    orderId: 'ORD-025984',
    itemId: 'ART-7183',
    subItemId: 7
  },
  {
    id: 3,
    amount: 4,
    condition: 'None',
    orderId: 'ORD-025984',
    itemId: 'ART-0254',
    subItemId: 3
  },
  {
    id: 4,
    amount: 2,
    condition: 'None',
    orderId: 'ORD-025036',
    itemId: 'ART-0254',
    subItemId: 2
  },
  {
    id: 5,
    amount: 3,
    condition: 'None',
    orderId: 'ORD-025011',
    itemId: 'ART-3215',
    subItemId: 22
  },

  {
    id: 6,
    amount: 3,
    condition: 'None',
    orderId: 'ORD-025000',
    itemId: 'ART-0254',
    subItemId: 1
  },
  {
    id: 7,
    amount: 3,
    condition: 'None',
    orderId: 'ORD-025000',
    itemId: 'ART-0254',
    subItemId: 3
  }
];
