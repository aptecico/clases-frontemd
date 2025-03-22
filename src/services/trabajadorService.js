import api from './api';

export const getTrabajadores = async () => {
  try {
    const response = await api.get('/trabajadores');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getTrabajador = async (id) => {
  try {
    const response = await api.get(`/trabajadores/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createTrabajador = async (trabajadorData) => {
  try {
    const response = await api.post('/trabajadores', trabajadorData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateTrabajador = async (id, trabajadorData) => {
  try {
    const response = await api.put(`/trabajadores/${id}`, trabajadorData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteTrabajador = async (id) => {
  try {
    const response = await api.delete(`/trabajadores/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};