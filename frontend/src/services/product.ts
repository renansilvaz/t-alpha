// src/services/product.ts
import api from './app';

export interface Product {
  id?: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/api/products');
  return response.data;
};

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await api.post('/api/products/create-product', product);
  return response.data;
};

export const updateProduct = async (id: string, product: Product): Promise<Product> => {
  const response = await api.put(`/api/products/update-product/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete(`/api/products/delete-product/${id}`);
};
