import axios from 'axios';
import { API_URL } from '../Models/routes';

const login = async (username, password) => {
  const endpoint_url = `${API_URL}/auth/iniciar-sesion`;
   try {

     const data = {
       username: username,
       password: password
     };
     const response = await axios.post({endpoint_url}, data, {
       headers: {
         'Content-Type': 'application/json'
       }
     });
     const token = response.data.access_token;
     localStorage.setItem('token', token);
     console.log('Inicio de sesión exitoso:', token);
     console.log('Inicio de sesión exitoso:', response.data);
     return token;

   } catch (error) {
     console.error('Error de inicio de sesión:', error);
     console.log('Error de inicio de sesión:', error);
     throw error;
   }
 };

export default login;