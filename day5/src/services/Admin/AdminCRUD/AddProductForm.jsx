import React, { useState } from 'react';

const AddProductForm = ({ handleAddProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productId = generateRandomId(); 
    console.log(newProduct);
    handleAddProduct({ ...newProduct, product_id: productId });
    setNewProduct({ name: '', price: '', quantity: '', image: '' });
  };

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9); 
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="quantity"
          value={newProduct.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
        <button type="submit" className="px-2 py-1 bg-orange-950 text-white rounded">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
