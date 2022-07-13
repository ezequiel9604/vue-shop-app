import { Orders, Purchases } from '../assets/data/Orders';

import { getByClientIdApi } from '../apis/Orders';

export async function GetOrdersByClientId (clientid) {
  const res = await getByClientIdApi(clientid);

  return res;
}

export function GetOrders (clientid) {
  // returns all orders made by this client
  const ords = [...Orders].filter((current) => {
    if (current.clientId === clientid) {
      return current;
    }
  });

  return ords;
}

export function GetOrdersFilterByAll (orders, allitems, orderstatus, ordernumber) {
  let ords = [...orders];

  // adds an array field called 'purchases', this array will contains the purchased items.
  ords.forEach((current) => {
    current.purchases = [];
  });

  // fill the array 'purchases' with objects that contains 'id', 'amount', 'condition', 'item'
  ords.forEach((current) => {
    for (let i = 0; i < Purchases.length; i++) {
      if (Purchases[i].orderId === current.id) {
        for (let j = 0; j < allitems.length; j++) {
          if (allitems[j].id === Purchases[i].itemId) { // checks for item
            for (let x = 0; x < allitems[j].subItemDtos.length; x++) {
              if (allitems[j].subItemDtos[x].id === Purchases[i].subItemId) { // checks for subitem
                current.purchases.push({
                  id: Purchases[i].id,
                  amount: Purchases[i].amount,
                  condition: Purchases[i].condition,
                  item: allitems[j],
                  subitem: allitems[j].subItemDtos[x]
                });
              }
            }
          }
        }
      }    
    }
  });

  // filter orders by order number
  if (ordernumber !== '') {
    ords = ords.filter((current) => {
      if (current.id === ordernumber) {
        return current; 
      }    
    });
  }

  // filter orders by order status
  if (orderstatus !== 'all') {
    ords = ords.filter((current) => {
      if (current.status === orderstatus) {
        return current; 
      }    
    }); 
  }

  return ords;
}

export function GetOrderByOrderNumber (ordernumber) {
  // returns all orders made by this client
  const ords = [...Orders].filter((current) => {
    if (current.id === ordernumber) {
      return current;
    }
  });

  return ords;
}

export function GetSetsOfItems (items, num) {
  const sets = items.length / num;

  if (sets < 1) {
    return 1; 
  }

  if (sets > parseInt(sets)) {
    return parseInt(sets) + 1; 
  }
    
  return parseInt(sets);
}

export function GetItemsByOrderNumber (ordernumber, items) {
  let arr = [...Purchases];

  arr = arr.filter((current) => {
    if (current.orderId === ordernumber) {
      return current; 
    }
  });

  arr.forEach((current) => {
    current.item = {};
    current.subitem = {};
  });

  arr.forEach((current) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === current.itemId) {
        current.item = (items[i]); 
        for (let j = 0; j < items[i].subItemDtos.length; j++) {
          if (items[i].subItemDtos[j].id === current.subItemId) {
            current.subitem = items[i].subItemDtos[j];
          }
        }
      }
    }
  });

  return arr;
}

export const Status = ['all', 'received', 'canceled', 'on its way', 'payment error'];
