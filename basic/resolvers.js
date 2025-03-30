import { products, categories, stock } from './models.js';

const resolvers = {
  Product: {
    category: (parent) => categories.find(cat => cat.id === parent.category),
  },
  Category: {
  stock: (parent) => {
    const stockItem = stock.find(s => s.category_id === parent.id);
    if (!stockItem) throw new Error(`No stock found for category ${parent.id}`);
    return { id: stockItem.id, quantity: stockItem.quantity };
  }
},

  Query: {
    products: () => products,
    product: (_, { id }) => products.find(p => p.id === id),
    categories: () => categories,
    category: (_, { id }) => categories.find(c => c.id === id),
  }
};

export default resolvers;