import { Orders, Purchases } from '../assets/data/Orders';

import { get_by_client_id } from '../apis/Orders';

export async function GetOrdersByClientId(clientid){

    const res = await get_by_client_id(clientid);

    return res;

}

export function GetOrders(clientid){

    // returns all orders made by this client
    let ords = [...Orders].filter((current) => {
        if(current.clientId == clientid){
            return current;
        }
    });

    return ords;
}

export function GetOrdersFilterByAll(orders, allitems, orderstatus, ordernumber){

    let ords = [...orders];

    // adds an array field called 'purchases', this array will contains the purchased allitems.
    ords.forEach((current) => {
        current['purchases'] = [];
    });

    // fill the array 'purchases' with objects that contains 'id', 'amount', 'condition', 'item'
    ords.forEach((current) => {  

        for (let i = 0; i < Purchases.length; i++) {    

            if(Purchases[i].orderId == current.id){
    
                for (let j = 0; j < allitems.length; j++) {

                    if(allitems[j].id == Purchases[i].itemId){

                        current.purchases.push({
                            id: Purchases[i].id,
                            amount: Purchases[i].amount,
                            condition: Purchases[i].condition,
                            item: allitems[j]
                        });

                    }
                }

                
            }    
        }
    });

    // filter orders by order number
    if(ordernumber != ""){
        ords = [...ords.filter((current) => {
            if(current.id == ordernumber)
                return current;    
        })];
    }

    // filter orders by order status
    if(orderstatus != "All"){
        ords = [...ords.filter((current) => {
            if(current.status == orderstatus)
                return current;    
        })]; 
    }

    return ords;

}

export function GetOrderByOrderNumber(ordernumber){

    // returns all orders made by this client
    let ords = [...Orders].filter((current) => {
        if(current.id == ordernumber){
            return current;
        }
    });

    return ords;
}

export function GetSetsOfItems(items, num){
    let sets = items.length / num;

    if(sets < 1)
        return 1;

    if(sets > parseInt(sets))
        return parseInt(sets) + 1;
    
    return parseInt(sets);
}

export function GetItemsByOrderNumber(ordernumber, items){

    const arr = [...Purchases.filter((current) => {
        if(current.orderId == ordernumber)
            return current;
    })];

    arr.forEach((current) => {
        current['item'] = {};
    });

    arr.forEach((current) => {
        for (let i = 0; i < items.length; i++) {
            if(items[i].id == current.itemId)
                current.item = (items[i]);
        }
    });

    return arr;

}
