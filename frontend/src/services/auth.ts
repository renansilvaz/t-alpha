import api from './app';

export interface AuthResponse {
  token: string;
}

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await api.post('/api/auth/login', { email, password });
  return response.data;
};

export const register = async (name: string, taxNumber: string, email: string, phone: string, password: string): Promise<AuthResponse> => {
  const response = await api.post('/api/auth/register', { name, taxNumber, email, phone, password });
  return response.data;
};
