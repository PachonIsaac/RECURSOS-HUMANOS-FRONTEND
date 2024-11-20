import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Box,
  TextField,
  InputAdornment,
  Container,
  CircularProgress
} from '@mui/material';
import { 
  FaClock, 
  FaUsers, 
  FaBuilding, 
  FaMoneyBillWave,
  FaSearch
} from 'react-icons/fa';

// Componente para la tarjeta de trabajo individual
const JobCard = ({ job, onOpenDetails }) => (
  <Card sx={{ 
    mb: 2, 
    '&:hover': { 
      boxShadow: 6,
      transition: 'box-shadow 0.3s ease-in-out'
    }
  }}>
    <CardContent>
      <Typography variant="h5" component="div" gutterBottom fontWeight="bold">
        {job.title}
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <FaBuilding />
        <Typography variant="subtitle1" color="text.secondary">
          {job.company}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
        {job.tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            variant="outlined"
            size="small"
          />
        ))}
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {job.description}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FaUsers />
            <Typography variant="body2" color="text.secondary">
              {job.applicants} aplicantes
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FaClock />
            <Typography variant="body2" color="text.secondary">
              {job.posted}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </CardContent>

    <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <FaMoneyBillWave />
        <Typography variant="subtitle1" fontWeight="medium">
          {job.salary}
        </Typography>
      </Box>
      <Button sx={{ backgroundColor: '#FB9016'}}
        variant="contained" 
        onClick={() => onOpenDetails(job)}
      >
        Ver detalles
      </Button>
    </CardActions>
  </Card>
);

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

// Componente principal de Jobs
const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      // Simulación de llamada a API
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            jobs: [
              {
                id: 1,
                title: "Desarrollador Frontend",
                company: "Tech Solutions",
                applicants: 45,
                tags: ["Remoto", "Tiempo completo"],
                description: "Desarrollar y mantener aplicaciones web utilizando React y tecnologías modernas del frontend.",
                salary: "$3.000.000",
                posted: "Hace 2 días"
              },
              {
                id: 2,
                title: "Diseñador UX/UI",
                company: "Creative Minds",
                applicants: 20,
                tags: ["Presencial", "Beneficios"],
                description: "Diseñar interfaces de usuario atractivas y funcionales para aplicaciones web y móviles.",
                salary: "$2.500.000",
                posted: "Hace 5 días"
              }
            ]
          });
        }, 1000);
      });
      setJobs(response.jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFilteredJobs(
      jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, jobs]);

  const handleOpenDetails = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleApply = (jobId) => {
    // Aquí irá la lógica para postularse cuando esté disponible el endpoint
    console.log(`Postulación para el trabajo con ID: ${jobId}`);
    handleCloseDetails();
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        gutterBottom
        fontWeight="bold"
      >
        Encuentra el trabajo de tus sueños
      </Typography>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Buscar trabajos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: '100%' }}
        />
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </Box>
      )}

      <JobDetailsModal
        isOpen={isModalOpen}
        job={selectedJob}
        onClose={handleCloseDetails}
        onApply={handleApply}
      />
    </Container>
  );
};

export default Jobs;
