import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Product = () => {
  // Example array of image URLs
  const images = [
    '/images/Products/Painting.webp',
    '/images/Products/PhotoFrame.webp',
    '/images/Products/T-shirt.webp',
    '/images/Products/ThankYou.jpg',
    '/images/Products/ThankYou.jpg',
    '/images/Products/Painting.webp',
    '/images/Products/PhotoFrame.webp',
    '/images/Products/T-shirt.webp',
    '/images/Products/Painting.webp',
    '/images/Products/PhotoFrame.webp'
    // Add more image URLs as needed, remember to add a comma after each URL
  ];

  const [likes, setLikes] = useState(new Array(images.length).fill(0));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  const handleAddToCart = (index) => {
    // Handle adding the item to the cart
    console.log('Added to cart:', index);
  };

  const handleAddToWishlist = (index) => {
    // Handle adding the item to the wishlist
    console.log('Added to wishlist:', index);
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
      {images.map((image, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden mb-4">
          <Link to="/Description">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-full"
          />
          </Link>
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-2 flex justify-between">
            <button onClick={() => handleAddToCart(index)} className="bg-blue-50 hover:bg-red-950 text-white font-bold py-2 px-4 rounded">
              <svg class="h-8 w-8 text-red-950"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </button>
            <button onClick={() => handleAddToWishlist(index)} className="bg-red-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <svg class="h-8 w-8 text-red-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
            </button>
          </div>
          <div className="absolute top-0 right-0 p-2">
            <button onClick={() => handleLike(index)} className="bg-gray-200 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M12 6v14"/>
              </svg>
            </button>
            <span className="bg-gray-200 rounded-full p-2">{likes[index]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
