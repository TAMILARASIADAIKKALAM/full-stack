// import React, { useEffect, useState } from 'react';
// import DesktopCart from './DesktopCart';

// const initialProductItems = [
//   {
//     name: 'ITALIAN BED',
//     image:'https://i.imgur.com/74oR13w.jpg',
//     size: 'XL',
//     price: 120,
//   },
//   {
//     name: 'ITALIAN BED',
//     image: 'https://i.imgur.com/74oR13w.jpg',
//     size: 'XL',
//     price: 30,
//   },
//   {
//     name: 'ITALIAN BED',
//     image: 'https://i.imgur.com/82cs9j1.jpg',
//     size: 'XL',
//     price: 220,
//   },
//   {
//     name: 'ITALIAN BED',
//     image: 'https://i.imgur.com/dejlILO.jpg',
//     size: 'XL',
//     price: 90,
//   },
//   // Add more product items as needed
// ];

// const CartPage = () => {
//   const [subtotal, setSubtotal] = useState(0);
//   const [productItems, setProductItems] = useState(initialProductItems); // Assuming initialProductItems is your initial array

//   // Initialize quantity state for each product
//   const initialQuantities = productItems.map(() => 1);
//   const [quantities, setQuantities] = useState(initialQuantities);

//   // Function to update quantity
//   const updateQuantity = (index, newQuantity) => {
//     if (newQuantity <= 0) {
//       return;
//     }
//     setQuantities(
//       quantities.map((qty, i) => (i === index ? newQuantity : qty))
//     );
//   };
//   const calculateSubtotal = () => {
//     return productItems.reduce((total, item, index) => {
//       return total + item.price * quantities[index];
//     }, 0);
//   };
//   const removeItem = (index) => {
//     const newProductItems = [...productItems];
//     const newQuantities = [...quantities];

//     newProductItems.splice(index, 1);
//     newQuantities.splice(index, 1);

//     setProductItems(newProductItems);
//     setQuantities(newQuantities);
//   };
//   useEffect(() => {
//     setSubtotal(calculateSubtotal());
//   }, [quantities]);

//   return (
//     <>
//       <section className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
     
//         <DesktopCart
//           product={productItems}
//           quantities={quantities}
//           updateQuantity={updateQuantity}
//           removeItem={removeItem}
//         />

//         {/* Order summary */}
//         <section className="mx-auto w-full px-4 md:max-w-[400px]">
//           <div className="">
//             <div className="border py-5 px-4 shadow-md">
//               <p className="font-bold">ORDER SUMMARY</p>
//               <div className="flex justify-between border-b py-5">
//                 <p>Subtotal</p>
//                 <p>${subtotal.toFixed(2)}</p> {/* Display updated subtotal */}
//               </div>
//               <div className="flex justify-between border-b py-5">
//                 <p>Shipping</p>
//                 <p>Free</p>
//               </div>
//               <div className="flex justify-between py-5">
//                 <p>Total</p>
//                 <p>${subtotal.toFixed(2)}</p> {/* Display updated subtotal */}
//               </div>
//               {/* <a href="checkout-address.html"> */}
//                 <button className="w-full bg-violet-900 px-5 py-2 text-white  rounded-md">
//                   Proceed to checkout
//                 </button>
//               {/* </a> */}
//             </div>
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

//export default CartPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DesktopCart from './DesktopCart'; // Assuming DesktopCart is in the same directory

// const CartPage = () => {
//   const [products, setProducts] = useState([]);
//   const [quantities, setQuantities] = useState([]);

//   useEffect(() => {
//     fetchGiftById();
//   }, []);

//   const fetchGiftById = async (giftId) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/gift/${giftId}`);
//       const gift = response.data;
//       console.log('Gift details:', gift);
//       return gift;
//     } catch (error) {
//       console.error('Error fetching gift:', error);
//       return null;
//     }
//   };
  

//   const updateQuantity = (index, quantity) => {
//     // Update the quantities state with the new quantity at the specified index
//     const updatedQuantities = [...quantities];
//     updatedQuantities[index] = quantity;
//     setQuantities(updatedQuantities);
//   };

//   const removeItem = (index) => {
//     // Remove the product and its quantity from the cart
//     const updatedProducts = [...products];
//     const updatedQuantities = [...quantities];

//     updatedProducts.splice(index, 1);
//     updatedQuantities.splice(index, 1);

//     setProducts(updatedProducts);
//     setQuantities(updatedQuantities);
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-semibold mb-8">Your Order</h1>
//       <DesktopCart
//         product={products}
//         quantities={quantities}
//         updateQuantity={updateQuantity}
//         removeItem={removeItem}
//       />
//     </div>
//   );
// };

// export default CartPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DesktopCart from './DesktopCart';

// const CartPage = () => {
//   const [products, setProducts] = useState([]);
//   const [quantities, setQuantities] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/gift');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const fetchGiftById = async (giftId) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/gift/${giftId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching gift:', error);
//       return null;
//     }
//   };

//   const updateQuantity = (index, quantity) => {
//     const updatedQuantities = [...quantities];
//     updatedQuantities[index] = quantity;
//     setQuantities(updatedQuantities);
//   };

//   const removeItem = (index) => {
//     const updatedProducts = [...products];
//     const updatedQuantities = [...quantities];

//     updatedProducts.splice(index, 1);
//     updatedQuantities.splice(index, 1);

//     setProducts(updatedProducts);
//     setQuantities(updatedQuantities);
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-semibold mb-8">Your Order</h1>
//       <DesktopCart
//         product={products}
//         quantities={quantities}
//         updateQuantity={updateQuantity}
//         removeItem={removeItem}
//         fetchGiftById={fetchGiftById} // Pass the fetchGiftById function to DesktopCart
//       />
//     </div>
//   );
// };

// export default CartPage;

// CartPage.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DesktopCart from './DesktopCart';

// const CartPage = () => {
//   const [products, setProducts] = useState([]);
//   const [quantities, setQuantities] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/gift');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const fetchGiftById = async (giftId) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/gift/${giftId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching gift:', error);
//       return null;
//     }
//   };

//   const updateQuantity = (index, quantity) => {
//     const updatedQuantities = [...quantities];
//     updatedQuantities[index] = quantity;
//     setQuantities(updatedQuantities);
//   };

//   const removeItem = (index) => {
//     const updatedProducts = [...products];
//     const updatedQuantities = [...quantities];

//     updatedProducts.splice(index, 1);
//     updatedQuantities.splice(index, 1);

//     setProducts(updatedProducts);
//     setQuantities(updatedQuantities);
//   };

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-semibold mb-8">Your Order</h1>
//       <DesktopCart
//         product={products}
//         quantities={quantities}
//         updateQuantity={updateQuantity}
//         removeItem={removeItem}
//         fetchGiftById={fetchGiftById} // Pass the fetchGiftById function to DesktopCart
//       />
//     </div>
//   );
// };

// export default CartPage;

// import React from 'react';
// import DesktopCart from './DesktopCart';

// const CartPage = ({ selectedProduct }) => {
//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-3xl font-semibold mb-8">Your Order</h1>
//       <DesktopCart product={[selectedProduct]} quantities={[1]} />
//     </div>
//   );
// };

// export default CartPage;

import React from 'react';
import DesktopCart from './DesktopCart';

const CartPage = ({ cartItems }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-8">Your Order</h1>
      <DesktopCart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
