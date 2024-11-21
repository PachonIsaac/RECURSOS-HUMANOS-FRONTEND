import axios from "axios";
import { API_URL } from "../models";

const ENDPOINT_URL = `${API_URL}/vacantes`;

export const listarVacantes = async () => {
    try {
        const response = await axios.get(`${ENDPOINT_URL}/listar-vacantes`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo las vacantes:", error);
        throw error;
    }
    }

export const listarTrabajos = async () => {
    try {
        const response = await axios.get(`${ENDPOINT_URL}/listar-trabajos`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo los trabajos:", error);
        throw error;
    }
    }

    //Listar aspirantes con el offer_id
export const listarAspirantes = async (offer_id) => {
    try {
        const response = await axios.get(`${ENDPOINT_URL}/listar-aspirantes/${offer_id}`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo los aspirantes:", error);
        throw error;
    }
    }

