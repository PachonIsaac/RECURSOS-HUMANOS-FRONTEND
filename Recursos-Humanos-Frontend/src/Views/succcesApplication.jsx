import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../models';


const SuccessApplication = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate(`/${PublicRoutes.LANDING}`);
    }
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <CheckCircleOutlineIcon style={{ fontSize: 100, color: 'green' }} />
                <Typography variant="h4" gutterBottom>
                    ¡Postulación Exitosa!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Gracias por postularte. Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.
                </Typography>
                <Button style={{backgroundColor: '#FB9016'}}variant="contained" color="primary" onClick={handleBackToHome}>
                    Volver al Inicio
                </Button>
            </Box>
        </Container>
    );
};

export default SuccessApplication;