// import React, { useState } from 'react';
// import productsData from '../../../dp.json';

// const Home = () => {
//   const [products, setProducts] = useState(productsData.products);

//   const handleDelete = (productId) => {
//     setProducts(prevProducts => prevProducts.filter(product => product.product_id !== productId));
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-8">List of Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {products.map(product => (
//           <div key={product.product_id} className="bg-white rounded shadow-md p-4 relative">
//             <button onClick={() => handleDelete(product.product_id)} className="absolute top-0 right-0 px-2 py-1 bg-red-500 text-white rounded">Delete</button>
//             <img src={product.image} alt={product.name} className="w-full h-auto mb-2" />
//             <h3 className="text-xl font-bold mb-2">{product.name}</h3>
//             <p className="text-gray-700 mb-2">Price: ${product.price}</p>
//             <p className="text-gray-700 mb-4">Quantity: {product.quantity}</p>
//             <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">Edit</button>
//             <button className="px-2 py-1 bg-green-500 text-white rounded">Add</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import { useState } from 'react';
import dp from '../../../dp.json';

const Home = () => {
  const [products, setProducts] = useState(dp.products);
    
  console.log(typeof (products));

  const handleAddProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  console.log(products);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">List of Products</h1>
      <ProductList list={products} setPro={setProducts}/>
      <AddProductForm handleAddProduct={handleAddProduct} />
    </div>
  );
};

export default Home;

