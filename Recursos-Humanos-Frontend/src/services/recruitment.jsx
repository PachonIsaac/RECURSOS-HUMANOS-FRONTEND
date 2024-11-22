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

 // Función para generar los documentos mandando el enrolled_id en un JSON
export const generarDocumentos = async (enrolled_id) => {
  try {
    const response = await axios.post(`${ENDPOINT_URL}/generar-documentos`, { enrolled_id }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error generando los documentos:', error);
    throw error;
  }
};

// Función para guardar un documento mandando el enrolled_id y el archivo, mandándolo en FormData
export const guardarDocumento = async (enrolled_id, document_id, file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('enrolleddoc_id', Number(document_id));
    console.log('enrolled_id:', enrolled_id);
    console.log('enrolleddoc_id:', document_id);
    console.log('file:', file);

    const response = await axios.post(`${ENDPOINT_URL}/guardar-documento`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error guardando el documento:', error);
    throw error;
  }
};

