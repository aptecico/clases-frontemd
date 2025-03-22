import api from './api';

export const login = async (email, password) => {
  try {
    //ruta de la api donde esta el login
    const response = await api.post('/auth/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', JSON.stringify(response.data.name));
    }
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('name'));
};