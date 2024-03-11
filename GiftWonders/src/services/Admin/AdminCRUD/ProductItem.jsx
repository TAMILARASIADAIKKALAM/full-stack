// import React, { useState } from 'react';

// const ProductItem = ({ product, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProduct, setEditedProduct] = useState(product);

//   const handleSaveEdit = () => {
//     onEdit(editedProduct);
//     setIsEditing(false);
//   };

//   return (
//     <div className="bg-white rounded shadow-md p-4 relative">
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={editedProduct.name}
//             onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <input
//             type="number"
//             value={editedProduct.price}
//             onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <input
//             type="number"
//             value={editedProduct.quantity}
//             onChange={(e) => setEditedProduct({ ...editedProduct, quantity: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <input
//             type="text"
//             value={editedProduct.image}
//             onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <button onClick={handleSaveEdit} className="px-2 py-1 bg-orange-950 text-white rounded mr-2">Save</button>
//         </>
//       ) : (
//         <>
//           <button onClick={() => onDelete(product.product_id)} className="absolute top-0 right-0 px-2 py-1 bg-orange-950 text-white rounded">Delete</button>
//           <button onClick={() => setIsEditing(true)} className="absolute top-0 left-0 px-2 py-1 bg-gray-500 text-white rounded">Edit</button>
//           <img src={product.image} alt={product.name} className="w-full h-auto mb-2" />
//           <h3 className="text-xl font-bold mb-2">{product.name}</h3>
//           <p className="text-gray-700 mb-2">Price: ${product.price}</p>
//           <p className="text-gray-700 mb-4">Quantity: {product.quantity}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductItem;



// import React, { useState } from 'react';
// import axios from 'axios';

// const ProductItem = ({ product, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProduct, setEditedProduct] = useState(product);

//   const handleSaveEdit = () => {
//     axios.post('/api/products', editedProduct)
//       .then(response => {
//         const addedProduct = response.data;
//         onEdit(addedProduct);
//         setIsEditing(false);
//       })
//       .catch(error => {
//         console.error('Error adding product:', error);
//       });
//   };

//   return (
//     <div className="bg-white rounded shadow-md p-4 relative">
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={editedProduct.giftname}
//             onChange={(e) => setEditedProduct({ ...editedProduct, giftname: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <input
//             type="text"
//             value={editedProduct.GiftImageUrl}
//             onChange={(e) => setEditedProduct({ ...editedProduct, GiftImageUrl: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <textarea
//             value={editedProduct.giftDetails}
//             onChange={(e) => setEditedProduct({ ...editedProduct, giftDetails: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           ></textarea>
//           <input
//             type="number"
//             value={editedProduct.giftPrice}
//             onChange={(e) => setEditedProduct({ ...editedProduct, giftPrice: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <button onClick={handleSaveEdit} className="px-2 py-1 bg-orange-950 text-white rounded mr-2">Save</button>
//         </>
//       ) : (
//         <>
//           <button onClick={() => onDelete(product.giftid)} className="absolute top-0 right-0 px-2 py-1 bg-orange-950 text-white rounded">Delete</button>
//           <button onClick={() => setIsEditing(true)} className="absolute top-0 left-0 px-2 py-1 bg-gray-500 text-white rounded">Edit</button>
//           <img src={product.GiftImageUrl} alt={product.giftname} className="w-full h-auto mb-2" />
//           <h3 className="text-xl font-bold mb-2">{product.giftname}</h3>
//           <p className="text-gray-700 mb-2">Price: ${product.giftPrice}</p>
//           <p className="text-gray-700 mb-4">Details: {product.giftDetails}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductItem;


// import React, { useState } from 'react';
// import axios from 'axios';

// const ProductItem = ({ product, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProduct, setEditedProduct] = useState(product);

//   const handleSaveEdit = async () => {
//     try {
//       const response = await axios.put(`http://localhost:8080/api/gift/${editedProduct.giftid}`, editedProduct);
//       const updatedProduct = response.data;
//       onEdit(updatedProduct);
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   return (
//     <div className="bg-white rounded shadow-md p-4 relative">
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={editedProduct.giftname}
//             onChange={(e) => setEditedProduct({ ...editedProduct, giftname: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <input
//             type="text"
//             value={editedProduct.GiftImageUrl}
//             onChange={(e) => setEditedProduct({ ...editedProduct, GiftImageUrl: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <textarea
//             value={editedProduct.giftDetails}
//             onChange={(e) => setEditedProduct({ ...editedProduct, giftDetails: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           ></textarea>
//           <input
//             type="number"
//             value={editedProduct.giftPrice}
//             onChange={(e) => setEditedProduct({ ...editedProduct, giftPrice: e.target.value })}
//             className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
//           />
//           <button onClick={handleSaveEdit} className="px-2 py-1 bg-orange-950 text-white rounded mr-2">Save</button>
//         </>
//       ) : (
//         <>
//           <button onClick={() => onDelete(product.giftid)} className="absolute top-0 right-0 px-2 py-1 bg-orange-950 text-white rounded">Delete</button>
//           <button onClick={() => setIsEditing(true)} className="absolute top-0 left-0 px-2 py-1 bg-gray-500 text-white rounded">Edit</button>
//           <img src={product.GiftImageUrl} alt={product.giftname} className="w-full h-auto mb-2" />
//           <h3 className="text-xl font-bold mb-2">{product.giftname}</h3>
//           <p className="text-gray-700 mb-2">Price: ${product.giftPrice}</p>
//           <p className="text-gray-700 mb-4">Details: {product.giftDetails}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductItem;


import React, { useState } from 'react';
import axios from 'axios';

const ProductItem = ({ product, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/gifts/${editedProduct.giftid}`, editedProduct);
      const updatedProduct = response.data;
      onEdit(updatedProduct);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="bg-white rounded shadow-md p-4 relative">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedProduct.giftName}
            onChange={(e) => setEditedProduct({ ...editedProduct, giftName: e.target.value })}
            className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
          />
        
          <textarea
            value={editedProduct.giftDetails}
            onChange={(e) => setEditedProduct({ ...editedProduct, giftDetails: e.target.value })}
            className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
          ></textarea>
          <input
            type="number"
            value={editedProduct.giftPrice}
            onChange={(e) => setEditedProduct({ ...editedProduct, giftPrice: e.target.value })}
            className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
          />
          <button onClick={handleSaveEdit} className="px-2 py-1 bg-orange-950 text-white rounded mr-2">Save</button>
        </>
      ) : (
        <>
          <button onClick={() => onDelete(product.giftid)} className="absolute top-0 right-0 px-2 py-1 bg-orange-950 text-white rounded">Delete</button>
          <button onClick={() => setIsEditing(true)} className="absolute top-0 left-0 px-2 py-1 bg-gray-500 text-white rounded">Edit</button>
      
          <h3 className="text-xl font-bold mb-2">Name: {product.giftName}</h3>
          <p className="text-gray-700 mb-2">Price: ${product.giftPrice}</p>
          <p className="text-gray-700 mb-4">Details: {product.giftDetails}</p>
        </>
      )}
    </div>
  );
};

export default ProductItem;

