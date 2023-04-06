const STREET = 'Lara Rodovia';
const SALE_DATE = '2023-04-04T20:18:22.000Z';

export const allSales = {
  data: [
    {
      id: 0,
      userId: 3,
      sellerId: 2,
      totalPrice: '80.93',
      deliveryAddress: STREET,
      deliveryNumber: '994',
      saleDate: SALE_DATE,
      status: 'Entregue',
      user_id: 3,
      seller_id: 2,
    },
    {
      id: 1,
      userId: 3,
      sellerId: 2,
      totalPrice: '80.93',
      deliveryAddress: STREET,
      deliveryNumber: '994',
      saleDate: '2023-04-04T20:22:22.000Z',
      status: 'Entregue',
      user_id: 3,
      seller_id: 2,
    },
  ],
};

export const pendingSale = {
  data: {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: '80.93',
    deliveryAddress: STREET,
    deliveryNumber: '994',
    saleDate: SALE_DATE,
    status: 'Pendente',
    user_id: 3,
    seller_id: 2,
    product: [
      {
        id: 4,
        name: 'Brahma 600ml',
        price: '7.50',
        urlImage: 'http://localhost:3001/images/brahma_600ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 4,
          quantity: 2,
          product_id: 4,
          sale_id: 1,
        },
      },
      {
        id: 5,
        name: 'Skol 269ml',
        price: '2.19',
        urlImage: 'http://localhost:3001/images/skol_269ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 5,
          quantity: 3,
          product_id: 5,
          sale_id: 1,
        },
      },
      {
        id: 7,
        name: 'Becks 330ml',
        price: '4.99',
        urlImage: 'http://localhost:3001/images/becks_330ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 7,
          quantity: 4,
          product_id: 7,
          sale_id: 1,
        },
      },
      {
        id: 8,
        name: 'Brahma Duplo Malte 350ml',
        price: '2.79',
        urlImage: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 8,
          quantity: 4,
          product_id: 8,
          sale_id: 1,
        },
      },
      {
        id: 10,
        name: 'Skol Beats Senses 269ml',
        price: '3.57',
        urlImage: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 10,
          quantity: 4,
          product_id: 10,
          sale_id: 1,
        },
      },
      {
        id: 11,
        name: 'Stella Artois 275ml',
        price: '3.49',
        urlImage: 'http://localhost:3001/images/stella_artois_275ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 11,
          quantity: 4,
          product_id: 11,
          sale_id: 1,
        },
      },
    ],
    userSeller: {
      id: 2,
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
      password: '3c28d2b0881bf46457a853e0b07531c6',
      role: 'seller',
    },
  },
};

export const preparingSale = {
  data: {
    id: 1,
    userId: 3,
    sellerId: 2,
    totalPrice: '80.93',
    deliveryAddress: STREET,
    deliveryNumber: '994',
    saleDate: SALE_DATE,
    status: 'Preparando',
    user_id: 3,
    seller_id: 2,
    product: [
      {
        id: 4,
        name: 'Brahma 600ml',
        price: '7.50',
        urlImage: 'http://localhost:3001/images/brahma_600ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 4,
          quantity: 2,
          product_id: 4,
          sale_id: 1,
        },
      },
      {
        id: 5,
        name: 'Skol 269ml',
        price: '2.19',
        urlImage: 'http://localhost:3001/images/skol_269ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 5,
          quantity: 3,
          product_id: 5,
          sale_id: 1,
        },
      },
      {
        id: 7,
        name: 'Becks 330ml',
        price: '4.99',
        urlImage: 'http://localhost:3001/images/becks_330ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 7,
          quantity: 4,
          product_id: 7,
          sale_id: 1,
        },
      },
      {
        id: 8,
        name: 'Brahma Duplo Malte 350ml',
        price: '2.79',
        urlImage: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 8,
          quantity: 4,
          product_id: 8,
          sale_id: 1,
        },
      },
      {
        id: 10,
        name: 'Skol Beats Senses 269ml',
        price: '3.57',
        urlImage: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 10,
          quantity: 4,
          product_id: 10,
          sale_id: 1,
        },
      },
      {
        id: 11,
        name: 'Stella Artois 275ml',
        price: '3.49',
        urlImage: 'http://localhost:3001/images/stella_artois_275ml.jpg',
        SaleProduct: {
          saleId: 1,
          productId: 11,
          quantity: 4,
          product_id: 11,
          sale_id: 1,
        },
      },
    ],
    userSeller: {
      id: 2,
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
      password: '3c28d2b0881bf46457a853e0b07531c6',
      role: 'seller',
    },
  },
};
