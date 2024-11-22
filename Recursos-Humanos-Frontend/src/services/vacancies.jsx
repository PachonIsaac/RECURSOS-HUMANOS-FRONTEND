import axios from "axios";
import { API_URL } from "../models";

const ENDPOINT_URL = `${API_URL}/vacantes`;

export const listarVacantes = async () => {
    try {
        const response = await axios.get(`${ENDPOINT_URL}/listar-vacantes`);
        if (response && response.data) {
            return response.data;
        } else {
            throw new Error("Respuesta inesperada del servidor");
        }
    } catch (error) {
        console.error("Error obteniendo las vacantes:", error);
        throw error;
    }
};

export const listarTrabajos = async () => {
    try {
        const response = await axios.get(`${ENDPOINT_URL}/listar-trabajos`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo los trabajos:", error);
        throw error;
    }
};

    
export const listarAspirantes = async (offer_id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${ENDPOINT_URL}/listar-aspirantes/${offer_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error obteniendo los aspirantes:", error);
      throw error;
    }
  };

