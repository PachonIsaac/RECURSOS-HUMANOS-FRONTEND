import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Box, IconButton } from '@mui/material';
import { MdArrowBack } from 'react-icons/md';
import employeesData from '../datosPrueba/employees.json'; // Importa el archivo JSON con los datos de ejemplo

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula la obtención de datos del usuario por ID
    const fetchUser = async () => {
      const userData = employeesData.find(employee => employee.identification_document === id);
      setUser(userData);
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <Typography variant="h6">Cargando...</Typography>;
  }

  const handleBackClick = () => {
    navigate(-1); // Navega a la vista anterior
  };

  return (
    <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
        <IconButton onClick={handleBackClick} sx={{  position: 'absolute', top: 25, left: 25  }}>
          <MdArrowBack />
        </IconButton>
      <Paper sx={{ p: 3 }}>

        <Typography variant="h4" gutterBottom>
          Detalles del Usuario
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Documento:</Typography>
          <Typography>{user.identification_document}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Nombre:</Typography>
          <Typography>{`${user.first_name} ${user.second_name}`}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Apellido:</Typography>
          <Typography>{`${user.first_surname} ${user.second_surname}`}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Rol:</Typography>
          <Typography>{user.rol}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Fecha de Contratación:</Typography>
          <Typography>{user.hiring_date}</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserDetails;