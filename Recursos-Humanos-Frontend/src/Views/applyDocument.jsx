import React, { useState } from 'react';
import { Box, Paper, Typography, Button, List, ListItem, ListItemIcon, ListItemText, IconButton, Alert, CircularProgress, Tooltip, Grid
} from '@mui/material';
import { MdCloudUpload, MdDelete, MdPictureAsPdf, MdImage, MdDescription, MdCheckCircle, MdError
} from 'react-icons/md';

const ApplyDocument = () => {
  const [files, setFiles] = useState({
    cv: null,
    certifications: [],
    coverLetter: null
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Configuración de tipos de archivos y límites
  const fileConfig = {
    cv: {
      accept: '.pdf,.doc,.docx',
      maxSize: 5 * 1024 * 1024, // 5MB
      required: true,
      label: 'Curriculum Vitae',
      icon: <MdPictureAsPdf size={24} />,
      multiple: false
    },
    certifications: {
      accept: '.pdf,.jpg,.jpeg,.png',
      maxSize: 10 * 1024 * 1024, // 10MB
      required: false,
      label: 'Certificaciones',
      icon: <MdDescription size={24} />,
      multiple: true
    },
    coverLetter: {
      accept: '.pdf,.doc,.docx',
      maxSize: 3 * 1024 * 1024, // 3MB
      required: false,
      label: 'Carta de Presentación',
      icon: <MdDescription size={24} />,
      multiple: false
    }
  };

  const validateFile = (file, type) => {
    const config = fileConfig[type];
    const errors = [];

    if (file.size > config.maxSize) {
      errors.push(`El archivo excede el tamaño máximo de ${config.maxSize / (1024 * 1024)}MB`);
    }

    const fileExtension = `.${file.name.split('.').pop().toLowerCase()}`;
    const acceptedExtensions = config.accept.split(',');
    if (!acceptedExtensions.includes(fileExtension)) {
      errors.push(`Tipo de archivo no permitido. Use: ${config.accept}`);
    }

    return errors;
  };

  const handleFileChange = (event, type) => {
    const selectedFiles = Array.from(event.target.files);
    const config = fileConfig[type];
    let newErrors = { ...errors };
    
    if (config.multiple) {
      const validFiles = selectedFiles.filter(file => {
        const fileErrors = validateFile(file, type);
        if (fileErrors.length > 0) {
          newErrors[`${type}-${file.name}`] = fileErrors;
          return false;
        }
        return true;
      });
      
      setFiles(prev => ({
        ...prev,
        [type]: [...(prev[type] || []), ...validFiles]
      }));
    } else {
      if (selectedFiles.length > 0) {
        const file = selectedFiles[0];
        const fileErrors = validateFile(file, type);
        
        if (fileErrors.length > 0) {
          newErrors[type] = fileErrors;
        } else {
          setFiles(prev => ({
            ...prev,
            [type]: file
          }));
          delete newErrors[type];
        }
      }
    }
    
    setErrors(newErrors);
  };

  const removeFile = (type, index = null) => {
    if (index !== null) {
      setFiles(prev => ({
        ...prev,
        [type]: prev[type].filter((_, i) => i !== index)
      }));
    } else {
      setFiles(prev => ({
        ...prev,
        [type]: null
      }));
    }
    
    // Limpiar errores relacionados
    const newErrors = { ...errors };
    delete newErrors[type];
    setErrors(newErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Validar archivos requeridos
    const newErrors = {};
    Object.entries(fileConfig).forEach(([type, config]) => {
      if (config.required && !files[type]) {
        newErrors[type] = [`${config.label} es requerido`];
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Aquí iría tu lógica para enviar los archivos al servidor
      // const formData = new FormData();
      // Object.entries(files).forEach(([type, file]) => {
      //   if (Array.isArray(file)) {
      //     file.forEach((f) => formData.append(type, f));
      //   } else if (file) {
      //     formData.append(type, file);
      //   }
      // });
      // await uploadFiles(formData);

      // Simulamos una carga
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Archivos subidos exitosamente');
    } catch (error) {
      setErrors({
        submit: ['Error al subir los archivos. Por favor, intente nuevamente.']
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: '0 auto' }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Carga de Documentos
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {Object.entries(fileConfig).map(([type, config]) => (
              <Grid item xs={12} key={type}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {config.label} {config.required && <span style={{ color: 'red' }}>*</span>}
                  </Typography>
                  
                  <Box
                    sx={{
                      border: '2px dashed #ccc',
                      borderRadius: 2,
                      p: 2,
                      textAlign: 'center',
                      bgcolor: 'background.default',
                      '&:hover': {
                        bgcolor: 'action.hover',
                        cursor: 'pointer'
                      }
                    }}
                    component="label"
                  >
                    <input
                      type="file"
                      hidden
                      accept={config.accept}
                      multiple={config.multiple}
                      onChange={(e) => handleFileChange(e, type)}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <MdCloudUpload size={24} />
                      <Typography>
                        {config.multiple ? 'Arrastra o selecciona archivos' : 'Arrastra o selecciona un archivo'}
                      </Typography>
                    </Box>
                    <Typography variant="caption" display="block" color="textSecondary">
                      Máximo {config.maxSize / (1024 * 1024)}MB. Formatos: {config.accept}
                    </Typography>
                  </Box>

                  {/* Lista de archivos */}
                  {files[type] && (
                    <List dense>
                      {Array.isArray(files[type]) ? (
                        files[type].map((file, index) => (
                          <ListItem
                            key={index}
                            secondaryAction={
                              <IconButton edge="end" onClick={() => removeFile(type, index)}>
                                <MdDelete />
                              </IconButton>
                            }
                          >
                            <ListItemIcon>{config.icon}</ListItemIcon>
                            <ListItemText 
                              primary={file.name}
                              secondary={`${(file.size / (1024 * 1024)).toFixed(2)} MB`}
                            />
                          </ListItem>
                        ))
                      ) : (
                        <ListItem
                          secondaryAction={
                            <IconButton edge="end" onClick={() => removeFile(type)}>
                              <MdDelete />
                            </IconButton>
                          }
                        >
                          <ListItemIcon>{config.icon}</ListItemIcon>
                          <ListItemText 
                            primary={files[type].name}
                            secondary={`${(files[type].size / (1024 * 1024)).toFixed(2)} MB`}
                          />
                        </ListItem>
                      )}
                    </List>
                  )}

                  {/* Errores */}
                  {errors[type] && (
                    <Alert severity="error" sx={{ mt: 1 }}>
                      {errors[type].map((error, index) => (
                        <div key={index}>{error}</div>
                      ))}
                    </Alert>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>

          {errors.submit && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errors.submit}
            </Alert>
          )}

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button sx={{ backgroundColor: '#FB9016'}}
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading || Object.keys(errors).length > 0}
              startIcon={loading ? <CircularProgress size={20} /> : <MdCheckCircle />}
            >
              {loading ? 'Subiendo...' : 'Subir Archivos'}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default ApplyDocument;