// src/components/ProductList.tsx
import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../services/productService';
import { Product } from '../../types/Product';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} - Stock: {product.stock}
            <button onClick={() => handleDelete(product.id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
