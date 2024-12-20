import {Card, CardContent, CardActions, Typography, Button, Chip, Box, Grid} from '@mui/material';
import { FaClock, FaUsers, FaBuilding, FaMoneyBillWave, FaSearch } from 'react-icons/fa';

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
          {job.job}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <FaBuilding />
          <Typography variant="subtitle1" color="text.secondary">
            {job.company}
          </Typography>
        </Box>
  
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          <Chip
            label={job.city}
            variant="outlined"
            size="small"
          />
        </Box>
  
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {job.description}
        </Typography>
      </CardContent>
  
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FaMoneyBillWave />
          <Typography variant="subtitle1" fontWeight="medium">
            ${job.salary.toLocaleString()}
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

export default JobCard;