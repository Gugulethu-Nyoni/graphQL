const products = [
  {id: '1', name: 'T-shirt', category: '1'},
  {id: '2', name: 'Pants', category: '2'}, 
];

const categories = [
  {id: '1', name: 'Menswear'},
  {id: '2', name: 'Womenswear'}
];

const stock = [
  {id: '1', category_id: '1', quantity: 30},  // Added missing comma
  {id: '2', category_id: '2', quantity: 50}   // Fixed quantity spelling
];

export { products, categories, stock };  // Proper named exports