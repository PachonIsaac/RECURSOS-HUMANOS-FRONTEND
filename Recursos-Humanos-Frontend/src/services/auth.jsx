import axios from 'axios';
import { API_URL } from '../models';

const ENDPOINT_URL = `${API_URL}/auth`;

export const auth = async (username, password) => {
  try {
    const response = await axios.post(`${ENDPOINT_URL}/iniciar-sesion`, { username, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Inicio de sesión exitoso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error de autenticación:', error);
    throw error;
  }
};

export const listarEmpleado = async () => {
  try {
    const response = await axios.get(`${ENDPOINT_URL}/listar-empleado`);
    return response;
  } catch (error) {
    console.error('Error obteniendo los empleados:', error);
    throw error;
  }
}
