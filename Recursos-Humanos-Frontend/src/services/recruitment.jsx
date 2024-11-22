import axios from 'axios';
import { API_URL } from '../models';

const ENDPOINT_URL = `${API_URL}/contratacion`;

export const guardarInfoPersonal = async (data) => {
    try {
      const response = await axios.post(`${ENDPOINT_URL}/guardar-informacion-personal`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data; 
    } catch (error) {
      console.error('Error guardando la información personal:', error);
      throw error;
    }
  }

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
  }

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

  // Función para guardar un documento mandando el enrrolled_id y el archivo, mandandolo en json
  export const guardarDocumento = async (enrolledId, file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(`${ENDPOINT_URL}/guardar-documento/${enrolledId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error guardando el documento:', error);
      throw error;
    }
  }