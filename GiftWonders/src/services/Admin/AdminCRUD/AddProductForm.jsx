// import React, { useState } from 'react';

// const AddProductForm = ({ handleAddProduct }) => {
//   const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '', image: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const productId = generateRandomId(); 
//     console.log(newProduct);
//     handleAddProduct({ ...newProduct, product_id: productId });
//     setNewProduct({ name: '', price: '', quantity: '', image: '' });
//   };

//   const generateRandomId = () => {
//     return Math.random().toString(36).substr(2, 9); 
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold mb-4">Add New Product</h2> 
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={newProduct.name}
//           onChange={handleChange}
//           placeholder="Name"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <input
//           type="number"
//           name="price"
//           value={newProduct.price}
//           onChange={handleChange}
//           placeholder="Price"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <input
//           type="number"
//           name="quantity"
//           value={newProduct.quantity}
//           onChange={handleChange}
//           placeholder="Quantity"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="image"
//           value={newProduct.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <button type="submit" className="px-2 py-1 bg-orange-950 text-white rounded">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProductForm = ({ handleAddProduct }) => {
//   const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '', image: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/gift', newProduct);
//       const addedProduct = response.data;
//       handleAddProduct(addedProduct);
//       setNewProduct({ name: '', price: '', quantity: '', image: '' });
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold mb-4">Add New Product</h2> 
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={newProduct.name}
//           onChange={handleChange}
//           placeholder="Name"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <input
//           type="number"
//           name="price"
//           value={newProduct.price}
//           onChange={handleChange}
//           placeholder="Price"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <input
//           type="number"
//           name="quantity"
//           value={newProduct.quantity}
//           onChange={handleChange}
//           placeholder="Quantity"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="image"
//           value={newProduct.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <button type="submit" className="px-2 py-1 bg-orange-950 text-white rounded">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;

import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ handleAddProduct }) => {
  const [newProduct, setNewProduct] = useState({ giftName: '', giftDetails: '', giftPrice: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/gifts', newProduct);
      const addedGift = response.data;
      handleAddProduct(addedGift);
      setNewProduct({ giftName: '', giftDetails: '', giftPrice: '' });
      //console.log(giftDetails);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Add New Gift</h2> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="giftName"
          value={newProduct.giftName}
          onChange={handleChange}
          placeholder="Name"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
      
        <input
          type="text"
          name="giftDetails"
          value={newProduct.giftDetails}
          onChange={handleChange}
          placeholder="Details"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="giftPrice"
          value={newProduct.giftPrice}
          onChange={handleChange}
          placeholder="Price"
          className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
        />
        <button type="submit" className="px-2 py-1 bg-orange-950 text-white rounded">Add Gift</button>
      </form>
    </div>
  );
};

export default AddProductForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddProductForm = ({ handleAddProduct }) => {
//   const [newProduct, setNewProduct] = useState({ giftname: '', giftImageUrl: '', giftDetails: '', giftPrice: '', imageFile: null });

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     const newValue = type === 'file' ? e.target.files[0] : value;
//     setNewProduct(prevProduct => ({ ...prevProduct, [name]: newValue }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('file', newProduct.imageFile);
//       const uploadResponse = await axios.post('http://localhost:8080/api/images/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       const uploadedImageUrl = uploadResponse.data.imageUrl;

//       const response = await axios.post('http://localhost:8080/api/gift', {
//         ...newProduct,
//         giftImageUrl: uploadedImageUrl
//       });

//       const addedGift = response.data;
//       handleAddProduct(addedGift);
//       setNewProduct({ giftname: '', giftImageUrl: '', giftDetails: '', giftPrice: '', imageFile: null });
//     } catch (error) {
//       console.error('Error adding gift:', error);
//     }
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold mb-4">Add New Gift</h2> 
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="giftname"
//           value={newProduct.giftname}
//           onChange={handleChange}
//           placeholder="Name"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <input
//           type="file"
//           name="imageFile"
//           onChange={handleChange}
//           accept="image/*"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="giftDetails"
//           value={newProduct.giftDetails}
//           onChange={handleChange}
//           placeholder="Details"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <input
//           type="number"
//           name="giftPrice"
//           value={newProduct.giftPrice}
//           onChange={handleChange}
//           placeholder="Price"
//           className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//         />
//         <button type="submit" className="px-2 py-1 bg-orange-950 text-white rounded">Add Gift</button>
//       </form>
//     </div>
//   );
// };

// export default AddProductForm;
