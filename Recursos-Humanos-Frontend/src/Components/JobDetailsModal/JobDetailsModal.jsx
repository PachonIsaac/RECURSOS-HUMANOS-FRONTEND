import React from 'react';
import { 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Chip,
  Button,
  Box,
  Grid
} from '@mui/material';
import { FaBuilding, FaMoneyBillWave, FaUsers } from 'react-icons/fa';

// Componente del modal de detalles
const JobDetailsModal = ({ isOpen, job, onClose, onApply }) => {
    if (!job) return null;
  
    return (
      <Dialog 
        open={isOpen} 
        onClose={onClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h5" fontWeight="bold">
            {job.title}
          </Typography>
        </DialogTitle>
  
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <FaBuilding />
              <Typography variant="h6">
                {job.company}
              </Typography>
            </Box>
  
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
              {job.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  variant="outlined"
                />
              ))}
            </Box>
  
            <Typography variant="h6" gutterBottom>
              Descripción del puesto
            </Typography>
            <Typography variant="body1" paragraph>
              {job.description}
            </Typography>
  
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FaMoneyBillWave />
                  <Typography>
                    Salario: {job.salary}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <FaUsers />
                  <Typography>
                    {job.applicants} aplicantes
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
  
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={onClose} variant="outlined">
            Cerrar
          </Button>
          <Button sx={{ backgroundColor: '#FB9016' }}
            onClick={() => onApply(job.id)} 
            variant="contained"
            color="primary"
          >
            Postularme
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

export default JobDetailsModal;