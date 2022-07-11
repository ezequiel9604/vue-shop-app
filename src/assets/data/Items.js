import ItemImage3 from '../imgs/samples/tablet.png';
import ItemImage4 from '../imgs/samples/tablet-2.png';
import ItemImage1 from '../imgs/samples/smart-tv-2.png';
import ItemImage2 from '../imgs/samples/smart-tv-3.png';

export const Items = [
  { 
    id: 'ART-0001',
    title: `1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1400,
    images: [ItemImage1, ItemImage2, ItemImage3, ItemImage4, ItemImage2],
    descount: 25,
    state: 'new',
    color: 'gray',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 1400,
        descount: 25,
        color: 'gray',
        capacity: '2g',
        size: '22i',
        stock: 5
      },
      {
        id: 2,
        price: 1100,
        descount: 25,
        color: 'red',
        capacity: '4g',
        size: '22i',
        stock: 3
      },
      {
        id: 3,
        price: 1900,
        descount: 25,
        color: 'black',
        capacity: '4g',
        size: '32i',
        stock: 8
      }
    ],
    quality: 3,
    stock: 5
  },
  { 
    id: 'ART-0002',
    title: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1400,
    images: [ItemImage1, ItemImage2],
    descount: 25,
    state: 'used',
    color: 'blue',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 1400,
        descount: 25,
        color: 'purple',
        capacity: '2g',
        size: '5i',
        stock: 2
      },
      {
        id: 2,
        price: 2500,
        descount: 25,
        color: 'red',
        capacity: '6g',
        size: '6i',
        stock: 5
      },
      {
        id: 3,
        price: 1600,
        descount: 25,
        color: 'green',
        capacity: '4g',
        size: '5i',
        stock: 6
      }
    ],
    quality: 1,
    stock: 6
  },
  { 
    id: 'ART-0003',
    title: `3Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1400,
    images: [ItemImage1, ItemImage2],
    descount: 25,
    state: 'repair',
    color: 'green',
    category: 'shoes',
    subitems: [
      {
        id: 1,
        price: 1400,
        descount: 25,
        color: 'black',
        capacity: null,
        size: '37',
        stock: 6
      },
      {
        id: 2,
        price: 1400,
        descount: 25,
        color: 'brown',
        capacity: null,
        size: '30',
        stock: 2
      },
      {
        id: 3,
        price: 1900,
        descount: 25,
        color: 'white',
        capacity: null,
        size: '41',
        stock: 6
      }
    ],
    quality: 5,
    stock: 6
  },
  { 
    id: 'ART-0004',
    title: `4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1400,
    images: [ItemImage1, ItemImage2],
    descount: 25,
    state: 'new',
    color: 'purple',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 1400,
        descount: 25,
        color: 'gray',
        capacity: '2g',
        size: '5i',
        stock: 1
      },
      {
        id: 2,
        price: 1600,
        descount: 25,
        color: 'gray',
        capacity: '2g',
        size: '6i',
        stock: 2
      },
      {
        id: 3,
        price: 1400,
        descount: 25,
        color: 'gray',
        capacity: '1g',
        size: '4i',
        stock: 9
      }
    ],
    quality: 4,
    stock: 6
  },
  { 
    id: 'ART-0005',
    title: `5 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1400,
    images: [ItemImage1, ItemImage2],
    descount: 25,
    state: 'new',
    color: 'gray',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 600,
        descount: 25,
        color: 'gray',
        capacity: '2g',
        size: '5i',
        stock: 8
      },
      {
        id: 2,
        price: 1600,
        descount: 25,
        color: 'gray',
        capacity: '16g',
        size: '6i',
        stock: 3
      },
      {
        id: 3,
        price: 450,
        descount: 25,
        color: 'gray',
        capacity: '4g',
        size: '4i',
        stock: 2
      }
    ],
    quality: 2,
    stock: 6
  },
  { 
    id: 'ART-0006',
    title: `6 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1400,
    images: [ItemImage1, ItemImage2],
    descount: 25,
    state: 'used',
    color: 'brown',
    category: 'shoes',
    subitems: [
      {
        id: 1,
        price: 960,
        descount: 25,
        color: 'blue',
        capacity: null,
        size: '22',
        stock: 6
      },
      {
        id: 2,
        price: 1200,
        descount: 25,
        color: 'gray',
        capacity: null,
        size: '28',
        stock: 6
      },
      {
        id: 3,
        price: 2500,
        descount: 25,
        color: 'black',
        capacity: null,
        size: '38',
        stock: 6
      }
    ],
    quality: 3,
    stock: 6
  },
  { 
    id: 'ART-0007',
    title: `7 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1400,
    images: [ItemImage1, ItemImage2],
    descount: 0,
    state: 'repair',
    color: 'green',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 1400,
        descount: 11,
        color: 'gray',
        capacity: '2g',
        size: '22i',
        stock: 6
      },
      {
        id: 2,
        price: 1900,
        descount: 12,
        color: 'black',
        capacity: '2g',
        size: '32i',
        stock: 6
      },
      {
        id: 3,
        price: 2900,
        descount: 25,
        color: 'black',
        capacity: '8g',
        size: '42i',
        stock: 6
      }
    ],
    quality: 4,
    stock: 6
  },
  { 
    id: 'ART-0008',
    title: `8 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 800,
    images: [ItemImage1, ItemImage2],
    descount: 0,
    state: 'repair',
    color: 'white',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 1600,
        descount: 25,
        color: 'gray',
        capacity: '16g',
        size: '6i',
        stock: 6
      },
      {
        id: 2,
        price: 2700,
        descount: 25,
        color: 'gray',
        capacity: '32g',
        size: '6i',
        stock: 2
      },
      {
        id: 3,
        price: 70,
        descount: 25,
        color: 'gray',
        capacity: '2g',
        size: '5i',
        stock: 8
      }
    ],
    quality: 3,
    stock: 12
  },
  { 
    id: 'ART-0009',
    title: `9 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 960,
    images: [ItemImage1, ItemImage2],
    descount: 5,
    state: 'used',
    color: 'black',
    category: 'clothing',
    subitems: [
      {
        id: 1,
        price: 800,
        descount: 25,
        color: 'gray',
        capacity: null,
        size: 'small',
        stock: 6
      },
      {
        id: 2,
        price: 1100,
        descount: 25,
        color: 'blue',
        capacity: null,
        size: 'large',
        stock: 3
      },
      {
        id: 3,
        price: 450,
        descount: 25,
        color: 'red',
        capacity: null,
        size: 'medium',
        stock: 8
      }
    ],
    quality: 2,
    stock: 3
  },
  { 
    id: 'ART-00010',
    title: `10 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1230,
    images: [ItemImage1, ItemImage2],
    descount: 10,
    state: 'new',
    color: 'green',
    category: 'clothing',
    subitems: [
      {
        id: 1,
        price: 700,
        descount: 25,
        color: 'gray',
        capacity: null,
        size: 'medium',
        stock: 2
      },
      {
        id: 2,
        price: 810,
        descount: 25,
        color: 'blue',
        capacity: null,
        size: 'small',
        stock: 2
      },
      {
        id: 3,
        price: 1400,
        descount: 25,
        color: 'red',
        capacity: null,
        size: 'large',
        stock: 6
      }
    ],
    quality: 4,
    stock: 6
  },
  { 
    id: 'ART-00011',
    title: `11 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1710,
    images: [ItemImage1, ItemImage2],
    descount: 0,
    state: 'new',
    color: 'black',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 1400,
        descount: 25,
        color: 'black',
        capacity: '2g',
        size: '32i',
        stock: 2
      },
      {
        id: 2,
        price: 1400,
        descount: 25,
        color: 'black',
        capacity: '4g',
        size: '44i',
        stock: 9
      },
      {
        id: 3,
        price: 1400,
        descount: 25,
        color: 'black',
        capacity: '2g',
        size: '52i',
        stock: 4
      }
    ],
    quality: 5,
    stock: 17
  },   
  { 
    id: 'ART-00012',
    title: `12 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 970,
    images: [ItemImage1, ItemImage2],
    descount: 30,
    state: 'used',
    color: 'white',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 5100,
        descount: 25,
        color: 'gray',
        capacity: '2g',
        size: '17i',
        stock: 6
      },
      {
        id: 2,
        price: 7300,
        descount: 25,
        color: 'gray',
        capacity: '2g',
        size: '22i',
        stock: 6
      },
      {
        id: 3,
        price: 9800,
        descount: 25,
        color: 'gray',
        capacity: '2g',
        size: '32i',
        stock: 6
      }
    ],
    quality: 2,
    stock: 9
  },
  { 
    id: 'ART-00013',
    title: `13 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1900,
    images: [ItemImage1, ItemImage2],
    descount: 17,
    state: 'new',
    color: 'green',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 2600,
        descount: 25,
        color: 'gray',
        capacity: '4g',
        size: '5i',
        stock: 6
      },
      {
        id: 2,
        price: 4500,
        descount: 25,
        color: 'gray',
        capacity: '4g',
        size: '6i',
        stock: 6
      },
      {
        id: 3,
        price: 7000,
        descount: 25,
        color: 'gray',
        capacity: '4g',
        size: '8i',
        stock: 6
      }
    ],
    quality: 3,
    stock: 4
  },
  { 
    id: 'ART-00014',
    title: `14 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 824,
    images: [ItemImage1, ItemImage2],
    descount: 5,
    state: 'repair',
    color: 'white',
    category: 'clothing',
    subitems: [
      {
        id: 1,
        price: 1700,
        descount: 25,
        color: 'gray',
        capacity: null,
        size: 'extraLarge',
        stock: 6
      },
      {
        id: 2,
        price: 1100,
        descount: 25,
        color: 'gray',
        capacity: null,
        size: 'small',
        stock: 6
      },
      {
        id: 3,
        price: 1500,
        descount: 25,
        color: 'gray',
        capacity: null,
        size: 'large',
        stock: 6
      }
    ],
    quality: 4,
    stock: 9
  },
  { 
    id: 'ART-00015',
    title: `15 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 1900,
    images: [ItemImage1, ItemImage2],
    descount: 2,
    state: 'new',
    color: 'green',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 1400,
        descount: 25,
        color: 'gray',
        capacity: '2g',
        size: '17i',
        stock: 6
      },
      {
        id: 2,
        price: 1700,
        descount: 25,
        color: 'gray',
        capacity: '4g',
        size: '19i',
        stock: 6
      },
      {
        id: 3,
        price: 2400,
        descount: 25,
        color: 'gray',
        capacity: '16g',
        size: '32i',
        stock: 6
      }
    ],
    quality: 5,
    stock: 4
  },
  { 
    id: 'ART-00016',
    title: `16 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis quae vel recusandae dolorem velit delectus unde facere 
                libero maiores inventore, Quis quae vel recusandae dolorem
                 velit delectus unde facere libero maiores inventore.`,
    price: 679,
    images: [ItemImage1, ItemImage2],
    descount: 7,
    state: 'new',
    color: 'white',
    category: 'technology',
    subitems: [
      {
        id: 1,
        price: 4200,
        descount: 25,
        color: 'gray',
        capacity: '16g',
        size: '6i',
        stock: 6
      },
      {
        id: 2,
        price: 6200,
        descount: 25,
        color: 'gray',
        capacity: '32g',
        size: '6i',
        stock: 6
      },
      {
        id: 3,
        price: 8200,
        descount: 25,
        color: 'gray',
        capacity: '64g',
        size: '6i',
        stock: 6
      }
    ],
    quality: 5,
    stock: 4
  }
];
