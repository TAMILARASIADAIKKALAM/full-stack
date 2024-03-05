import React, { useState, useEffect } from 'react';
import productsData from '../../../dp.json';
import ProductItem from './ProductItem';

const ProductList = ({ list }) => {
  const [products, setProducts] = useState(list);

  useEffect(() => {
    setProducts(list);
  }, [list]);

  const handleDelete = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.product_id !== productId));
  };

  const handleEdit = (updatedProduct) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.product_id === updatedProduct.product_id ? updatedProduct : product
      )
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductItem key={product.product_id} product={product} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default ProductList;
