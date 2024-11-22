import React, { useState, useEffect } from 'react';
import { listarAspirantes, listarVacantes } from '../services/vacancies';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography, 
  Dialog, 
  DialogTitle, 
  DialogContent,
  Button
} from '@mui/material';

const DashboardPostulaciones = () => {
  const [offers, setOffers] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [applicants, setApplicants] = useState([]);

  
  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await listarVacantes();
      console.log('Trabajos:', response);
      setOffers(response);
    } catch (error) {
        console.error("Error fetching jobs:", error);
      }
  };

  const handleOfferSelect = async (offer) => {
    try {
      const response = await listarAspirantes(offer.id);
      setSelectedOffer(offer);
      // Asegúrate de que response.data sea un array
      setApplicants(response?.data || []);
      console.log('Aplicantes:', response?.data);
    } catch (error) {
      console.error('Error fetching applicants:', error);
      setApplicants([]); // Asegúrate de que applicants sea siempre un array
    }
  };

  const handleCloseApplicantsDialog = () => {
    setSelectedOffer(null);
    setApplicants([]);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard de Postulaciones
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre de la Oferta</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map((offer) => (
              <TableRow key={offer.id}>
                <TableCell>{offer.job}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleOfferSelect(offer)}>
                    Ver Aplicantes
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={!!selectedOffer} onClose={handleCloseApplicantsDialog}>
        <DialogTitle>Aplicantes para {selectedOffer?.nombre}</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Fecha de Aplicación</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell>{applicant.nombre}</TableCell>
                    <TableCell>{applicant.email}</TableCell>
                    <TableCell>{applicant.fechaAplicacion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardPostulaciones;