import React, { useState, useEffect } from 'react';
import JobCard from '../Components/JobCard/JobCard';
import JobDetailsModal from '../Components/JobDetailsModal/JobDetailsModal';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, TextField, InputAdornment, Container, CircularProgress } from '@mui/material';
import { FaSearch } from 'react-icons/fa';


// Componente principal de Jobs
const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const navigate = useNavigate();

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
    navigate(`/apply/${jobId}`);
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
