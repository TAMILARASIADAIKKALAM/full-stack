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

// import React from 'react';
// import ProductList from './ProductList';
// import AddProductForm from './AddProductForm';
// import { useState } from 'react';
// import dp from '../../../dp.json';

// const Home = () => {
//   const [products, setProducts] = useState(dp.products);
    
//   console.log(typeof (products));

//   const handleAddProduct = (newProduct) => {
//     setProducts(prevProducts => [...prevProducts, newProduct]);
//   };

//   console.log(products);
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-8">List of Products</h1>
//       <ProductList list={products} setPro={setProducts}/>
//       <AddProductForm handleAddProduct={handleAddProduct} />
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {

      const response = await axios.get('http://localhost:8080/api/gift');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async (newProduct) => {
    const token = sessionStorage.getItem('token')
    try {
      const response = await axios.post('http://localhost:8080/api/gifts', newProduct);
      const addedProduct = response.data;
      setProducts(prevProducts => [...prevProducts, addedProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
    }

  //    const handleAddProduct = (newProduct) => 
  //    {
  //       setProducts(prevProducts => [...prevProducts, newProduct]);
  //    };
   };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/gifts/${productId}`);
      setProducts(prevProducts => prevProducts.filter(product => product.giftid !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

// const handleEditProduct = async (updatedProduct) => {
//   try {
//     const headers = {
//       'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Include your access token here
//       'Content-Type': 'application/json' // Specify the content type of the request body
//     };

//     await axios.put(`http://localhost:8080/api/gift/${updatedProduct.giftid}`, updatedProduct, { headers });
    
//     setProducts(prevProducts =>
//       prevProducts.map(product =>
//         product.giftid === updatedProduct.giftid ? updatedProduct : product
//       )
//     );
//   } catch (error) {
//     console.error('Error updating product:', error);
//   }
// };


const handleEditProduct = async (updatedProduct) => {
  try {
    const token = sessionStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json' // Specify the content type of the request body
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await axios.put(`http://localhost:8080/api/gifts/${updatedProduct.giftid}`, updatedProduct, { headers });

    const updatedProductData = response.data;

    // Assuming setProducts is a state setter function
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.giftid === updatedProductData.giftid ? updatedProductData : product
      )
    );
  } catch (error) {
    console.error('Error updating product:', error);
  }
};



  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">List of Products</h1>
      <ProductList list={products} onDelete={handleDeleteProduct} onEdit={handleEditProduct} />
      <AddProductForm handleAddProduct={handleAddProduct} />
    </div>
  );
};

export default Home;
