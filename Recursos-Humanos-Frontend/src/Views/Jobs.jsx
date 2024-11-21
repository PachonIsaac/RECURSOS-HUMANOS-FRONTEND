import React, { useState, useEffect } from 'react';
import JobCard from '../components/jobCard/jobCard';
import JobDetailsModal from '../components/jobDetailsModal/jobDetailsModal';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, TextField, InputAdornment, Container, CircularProgress } from '@mui/material';
import { FaSearch, FaRegClock  } from 'react-icons/fa';
import { listarVacantes } from '../services/vacancies';


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
      const response = await listarVacantes();
      console.log('Trabajos:', response);
      setJobs(response);
      setFilteredJobs(response);
    } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    setFilteredJobs(
      jobs.filter((job) =>
        job.job.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleApply = (job) => {
    navigate(`/apply/${job.id}`, { state: { job } });
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
