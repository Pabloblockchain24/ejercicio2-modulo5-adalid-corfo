import axios from "axios";

const API_URL = "http://localhost:3001";

export const getAppointments = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/appointments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        return response.data;
      } catch (error) {
        console.error("Error al obtener los datos protegidos", error);
        throw error; 
      }
}

export const getDoctors = async() => {
    const response = await axios.get(`${API_URL}/doctores`);
    return response.data;
}

export const getServices = async() => {
    const response = await axios.get(`${API_URL}/servicios_medicos`);
    return response.data;
}