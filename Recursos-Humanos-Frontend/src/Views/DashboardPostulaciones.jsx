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
  Button,
  IconButton
} from '@mui/material';
import { generarEmpleado } from '../services/auth';
import { Check as CheckIcon } from '@mui/icons-material';

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
      console.log('Aplicantes:', response);
      setSelectedOffer(offer);
      setApplicants(response);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    }
  };

  const handleCloseApplicantsDialog = () => {
    setSelectedOffer(null);
    setApplicants([]);
  };

  const handleHireApplicant = async (applicant, offer) => {
    const empleadoData = {
      person_id: applicant.person_id,
      firstName: applicant.first_name,
      firstSurname: applicant.first_surname,
      identification: applicant.identification_document,
      email: applicant.email,
      offer_id: offer.id,
      enrolled_id: applicant.enrolled_id
    }
    
    try {
      console.log ('empleadoData:', empleadoData);
      const response = await generarEmpleado(empleadoData);
      console.log('Contratación exitosa:', response);
    } catch (error) {
      console.error("Error contratando aspirante:", error);
    }
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
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell>{applicant.first_name}</TableCell>
                    <TableCell>{applicant.email}</TableCell>
                    <TableCell>{applicant.identification_document}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleHireApplicant(applicant, selectedOffer)}>
                        <CheckIcon />
                      </IconButton>
                    </TableCell>
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