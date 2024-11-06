import axios from 'axios';

const login = async (username, password) => {
  try {

    const data = {
      username: username,
      password: password
    };
    const response = await axios.post('https://ssnbt34f-3000.brs.devtunnels.ms/auth/iniciar-sesion', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //const token = response.data.access_token;
    //localStorage.setItem('token', token);
    //console.log('Inicio de sesión exitoso:', token);
    //return token;

    console.log('Inicio de sesión exitoso:', response.data);
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    console.log('Error de inicio de sesión:', error);
    throw error;
  }
};

export default login;