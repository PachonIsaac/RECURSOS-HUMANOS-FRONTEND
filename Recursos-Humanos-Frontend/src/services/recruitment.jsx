import axios from 'axios';
import { API_URL } from '../Models/routes';

const ENDPOINT_URL = `${API_URL}/contratacion`;

export const guardarInfoPersonal = async (data) => {
    try {
      const response = await axios.post(`${ENDPOINT_URL}/guardar-informacion-personal`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data.id; // Asume que el backend retorna el persons.id en response.data.id
    } catch (error) {
      console.error('Error guardando la información personal:', error);
      throw error;
    }
  };

  export const guardarInscripcion = async (data) => {
    try {
      const response = await axios.post(`${ENDPOINT_URL}/guardar-inscripcion`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error guardando la inscripción:', error);
      throw error;
    }
  };

  export const getTiposDocumento = async () => {
    try {
      const response = await axios.get(`${ENDPOINT_URL}/tipos-documento`);
      return response.data;
    } catch (error) {
      console.error('Error obteniendo los tipos de documento:', error);
      throw error;
    }
  }

  export const getTiposSangre = async () => {
    try {
      const response = await axios.get(`${ENDPOINT_URL}/tipos-sangre`);
      return response.data;
    } catch (error) {
      console.error('Error obteniendo los tipos de sangre:', error);
      throw error;
    }
  }