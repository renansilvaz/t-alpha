// src/services/productService.ts
import axios from 'axios';
import { Product } from '../types/Product';

const API_URL = 'https://interview.t-alpha.com.br/api/products';

export const getProducts = async () => {
  const response = await axios.get<Product[]>(`${API_URL}/`);
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await axios.get<Product>(`${API_URL}/${id}`);
  return response.data;
};

export const createProduct = async (product: Product) => {
  const response = await axios.post<Product>(`${API_URL}/create-product`, product);
  return response.data;
};

export const updateProduct = async (id: string, product: Product) => {
  const response = await axios.put<Product>(`${API_URL}/update-product/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  await axios.delete(`${API_URL}/delete-product/${id}`);
};
