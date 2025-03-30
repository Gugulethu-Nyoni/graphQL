import { request } from 'graphql-request';

const API_URL = 'http://localhost:4000';

const query = `
  {
    products {
      id
      name
      category {
        name
        stock {
          id
          quantity
        }
      }
    }
  }
`;

async function fetchData() {
  try {
    const data = await request(API_URL, query);
    console.log('=== Products with Stock ===');
    data.products.forEach(product => {
      console.log(`
      Product: ${product.name}
      Category: ${product.category.name}
      Stock Quantity: ${product.category.stock.quantity}
      ====================`);
    });
  } catch (error) {
    console.error('Error:', error.response?.errors || error.message);
  }
}

fetchData();