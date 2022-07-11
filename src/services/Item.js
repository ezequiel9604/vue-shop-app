import { getAllApi, getByIdApi } from '../apis/Items';

export async function GetAll () {
  const items = await getAllApi();

  return items;
}

export async function GetById (id) {
  const item = await getByIdApi(id);

  return item;
}

export function GetAllColors (items) {
  const colors = new Set();

  items.forEach((current) => {
    for (let i = 0; i < current.subItemDtos.length; i++) {
      colors.add(current.subItemDtos[i].color);
    }
  });

  return Array.from(colors);
}

export function GetItemsFilterByAll (
  items, searchtext, isOffered, maxPrice, quality, states, colors, category) {
  let arr = [...items];

  if (searchtext !== '') {
    // adding search text filter
    arr = arr.filter((current) => {
      if (current.title.search(searchtext) !== -1) {
        return current;
      }     
    });
  }

  // adding category filter
  if (category !== 'all') {
    arr = arr.filter((current) => {
      if (current.category === category) { return current; }
    });
  }

  // adding state filter
  arr = arr.filter((current) => {
    if (isOffered) { return current.subItemDtos[0].descount > 0; } else { return current.subItemDtos[0].descount >= 0; }
  });

  // adding price filter
  if (maxPrice > 0) {
    arr = arr.filter((current) => {
      if (current.subItemDtos[0].price >= 0 && current.subItemDtos[0].price <= maxPrice) { return current; }
    });
  }
    
  // adding quality filter
  arr = arr.filter((current) => {
    return current.quality <= quality;
  });

  // adding states filter
  if (states.length !== 0) {
    arr = arr.filter((current) => {
      for (let i = 0; i < states.length; i++) {
        if (current.state === states[i]) { return current; }
      }
    });
  }

  // adding color filter
  if (colors.length !== 0) {
    arr = arr.filter((current) => {
      for (let i = 0; i < colors.length; i++) {
        if (current.color === colors[i]) { return current; }
      }
    });
  }

  return arr;
}

export function GetCharacteriscFromSubitems (subitems, charac) {
  const set = new Set();
  [...subitems].forEach((current) => {
    set.add(current[charac]);
  });
  return Array.from(set);
}

export function GetAllElementsFromItems (items, charac, categ) {
  const elements = new Set();
  items.forEach((current) => {
    for (let i = 0; i < current.subItemDtos.length; i++) {
      if (current.subItemDtos[i][charac] != null && current.category === categ &&
                current.subItemDtos[i][charac] !== '') { elements.add(current.subItemDtos[i][charac]); }
    }
  });

  return Array.from(elements);
}

export function GetSetsOfItems (items, num) {
  const sets = items.length / num;

  if (sets < 1) { return 1; }

  if (sets > parseInt(sets)) { return parseInt(sets) + 1; }
    
  return parseInt(sets);
}

export function checkingInputChecks (arr, value) {
  const result = false;
  for (let i = 0; i < arr.length; i++) {  
    if (arr[i] === value) { return true; }
  }
  return result;
}

export function formatedNumber (num) {
  if (num >= 1000 && num < 10000) {
    const newNum = num + '';
    let formated = '';
  
    for (let x = 0; x < newNum.length; x++) {
      if (x === 1) {
        formated += ',';
      }
      formated += newNum.charAt(x);
    }
  
    return formated;
  } else if (num >= 10000) {
    const newNum = num + '';
    let formated = '';
  
    for (let x = 0; x < newNum.length; x++) {
      if (x === 2) {
        formated += ',';
      }
      formated += newNum.charAt(x);
    }
  
    return formated;
  }
  
  return num;
}

export function calculateDescountPrice (price, descount) {
  return price - price * (descount / 100);
};

export function calculateSubtotal (price, amount, descount) {
  const subtotal = price * amount;
  return subtotal - subtotal * (descount / 100);
}
