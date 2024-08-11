import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct, getProductById } from '../../services/productService';
import { Product } from '../../types/Product';
import { useNavigate } from 'react-router-dom';

interface ProductFormProps {
  productId?: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ productId }) => {
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      loadProduct();
    }
  }, [productId]);

  const loadProduct = async () => {
    const product = await getProductById(productId!);
    setProduct(product);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (productId) {
      await updateProduct(productId, product);
    } else {
      await createProduct(product);
    }
    navigate('/product')

    setProduct({ name: '', description: '', price: 0, stock: 0 });
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <form 
    className='flex flex-col' 
    onSubmit={handleSubmit}>
    <label>Produto</label>
      <input
       className="w-full border-2 rounded-md h-11 px-2 outline-none mb-2"
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <label>Descrição</label>
      <input
        className="w-full border-2 rounded-md h-11 px-2 outline-none mb-2"
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description (optional)"
      />
      <label>Preço</label>
      <input
        className="w-full border-2 rounded-md h-11 px-2 outline-none mb-2"
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <label>Estoque</label>
      <input
        className="w-full border-2 rounded-md h-11 px-2 outline-none mb-2"
        type="number"
        name="stock"
        value={product.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
      />
      <button 
      className='mt-2 w-full bg-blue-300 rounded-lg p-1 font-semibold'
      type="submit">{productId ? 'Update' : 'Novo'} Produto</button>
    </form>
    </div>
  );
};

export default ProductForm;
