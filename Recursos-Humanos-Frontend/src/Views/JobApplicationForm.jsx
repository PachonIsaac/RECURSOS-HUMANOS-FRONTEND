import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm, Controller, set } from 'react-hook-form';
import { Typography, TextField, Button, Grid,  Container, MenuItem, FormHelperText, Box } from '@mui/material';
import { guardarInfoPersonal, guardarInscripcion, getTiposDocumento, getTiposSangre, guardarDocumento, generarDocumentos } from '../services/recruitment';


const JobApplicationForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { job } = location.state || {};
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      identification_document: '',
      identification_type_id: '',
      first_name: '',
      second_name: '',
      first_surname: '',
      second_surname: '',
      birth_date: '',
      birth_city: '',
      birth_department: '',
      birth_country: '',
      residence_city: '',
      residence_address: '',
      email: '',
      phone: '',
      blood_type_id: ''
    }
  });

  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [tiposSangre, setTiposSangre] = useState([]);
  const [files, setFiles] = useState({});
  const [documentos, setDocumentos] = useState([]);
  const [step, setStep] = useState(1);
  const [enrolled_id, setEnrolled_id] = useState(null);
 

  useEffect(() => {
    const fetchDocumentBloodTypes = async () => {
      try {
        const tiposDocumento = await getTiposDocumento();
        const tiposSangre = await getTiposSangre();
        setTiposDocumento(tiposDocumento);
        setTiposSangre(tiposSangre);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchDocumentBloodTypes();
  }, []);

  const handleFileChange = (e, documentId) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [documentId]: e.target.files[0]
    }));
  };

  const onSubmitStep1 = async (data) => {
    try {
      //Guardar la información personal y obtener el persons.Id
      const personId = await guardarInfoPersonal({
        identification_document: data.identification_document,
        identification_type_id: data.identification_type_id,
        first_name: data.first_name,
        second_name: data.second_name,
        first_surname: data.first_surname,
        second_surname: data.second_surname,
        birth_date: data.birth_date,
        birth_city: data.birth_city,
        birth_department: data.birth_department,
        birth_country: data.birth_country,
        residence_city: data.residence_city,
        residence_address: data.residence_address,
        email: data.email,
        phone: data.phone,
        blood_type_id: data.blood_type_id
      });

      // Guardar la inscripción a la oferta de trabajo con el persons.Id y jobId
      const enrolled_id = await guardarInscripcion({
        person_id: personId,
        offer_id: job.id,
        period : job.period
      });
      console.log('guardarInscripción exitoso');
      console.log('enrolled_id:', enrolled_id);
      //Llamar a generarDocumentos y traer la lista de documentos que se deben cargar
      const documentos = await generarDocumentos(enrolled_id.id);
      setDocumentos(documentos);
      setEnrolled_id(enrolled_id);
      console.log('Documentos generados exitosamente');
      setStep(2);
    } catch (error) {
      console.error('generarDocumentos:', error);
    }
  };
  
  const onSubmitStep2 = async () => {
     try { 
      //Guardar los documentos uno por uno
      for (const documento of documentos) {
        const file = files[documento.id];
        console.log(documento)
        if (file) {
          await guardarDocumento(enrolled_id, documento.id, file);
          console.log(`Documento ${documento.name} guardado exitosamente`);
        }
      }

      console.log('Documentos guardados exitosamente');
      navigate('/success');
    } catch (error) {
      console.error('Error en la inscripción:', error);
    }
  };


  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <h2>Inscripción a Oferta de Trabajo </h2>
      
      {step === 1 && (
        <form onSubmit={handleSubmit(onSubmitStep1)}>
          <Grid container spacing={3}>
            {/* Tipo y Número de Identificación */}
            <Grid item xs={12} md={4}>
              <Controller
                name="identification_type_id"
                control={control}
                rules={{ required: 'Seleccione un tipo de identificación' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label="Tipo de Documento"
                    error={!!errors.identification_type_id}
                    helperText={errors.identification_type_id?.message}
                  >
                    {tiposDocumento.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Controller
                name="identification_document"
                control={control}
                rules={{
                  required: 'Número de documento es requerido',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Solo se permiten números'
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Número de Documento"
                    error={!!errors.identification_document}
                    helperText={errors.identification_document?.message}
                  />
                )}
              />
            </Grid>

            {/* Nombres */}
            <Grid item xs={12} md={6}>
              <Controller
                name="first_name"
                control={control}
                rules={{ required: 'Primer nombre es requerido' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Primer Nombre"
                    error={!!errors.first_name}
                    helperText={errors.first_name?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="second_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Segundo Nombre (Opcional)"
                  />
                )}
              />
            </Grid>

            {/* Apellidos */}
            <Grid item xs={12} md={6}>
              <Controller
                name="first_surname"
                control={control}
                rules={{ required: 'Primer apellido es requerido' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Primer Apellido"
                    error={!!errors.first_surname}
                    helperText={errors.first_surname?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="second_surname"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Segundo Apellido (Opcional)"
                  />
                )}
              />
            </Grid>

            {/* Fecha de Nacimiento */}
            <Grid item xs={12} md={4}>
              <Controller
                name="birth_date"
                control={control}
                rules={{ required: 'Fecha de nacimiento es requerida' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Fecha de Nacimiento"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.birth_date}
                    helperText={errors.birth_date?.message}
                  />
                )}
              />
            </Grid>

            {/* Lugar de Nacimiento */}
            <Grid item xs={12} md={4}>
              <Controller
                name="birth_city"
                control={control}
                rules={{ required: 'Ciudad de nacimiento es requerida' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Ciudad de Nacimiento"
                    error={!!errors.birth_city}
                    helperText={errors.birth_city?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Controller
                name="birth_department"
                control={control}
                rules={{ required: 'Departamento de nacimiento es requerido' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Departamento de Nacimiento"
                    error={!!errors.birth_department}
                    helperText={errors.birth_department?.message}
                  />
                )}
              />
            </Grid>

            {/* País de Nacimiento */}
            <Grid item xs={12} md={4}>
              <Controller
                name="birth_country"
                control={control}
                rules={{ required: 'País de nacimiento es requerido' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="País de Nacimiento"
                    error={!!errors.birth_country}
                    helperText={errors.birth_country?.message}
                  />
                )}
              />
            </Grid>

            {/* Residencia */}
            <Grid item xs={12} md={4}>
              <Controller
                name="residence_city"
                control={control}
                rules={{ required: 'Ciudad de residencia es requerida' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Ciudad de Residencia"
                    error={!!errors.residence_city}
                    helperText={errors.residence_city?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Controller
                name="residence_address"
                control={control}
                rules={{ required: 'Dirección de residencia es requerida' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Dirección de Residencia"
                    error={!!errors.residence_address}
                    helperText={errors.residence_address?.message}
                  />
                )}
              />
            </Grid>

            {/* Tipo de Sangre */}
            <Grid item xs={12} md={4}>
              <Controller
                name="blood_type_id"
                control={control}
                rules={{ required: 'Tipo de sangre es requerido' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    fullWidth
                    label="Tipo de Sangre"
                    error={!!errors.blood_type_id}
                    helperText={errors.blood_type_id?.message}
                  >
                    {tiposSangre.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>

            {/* Contacto */}
            <Grid item xs={12} md={6}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email es requerido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Teléfono (Opcional)"
                    type="tel"
                  />
                )}
              />
            
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
                Siguiente
              </Button>
            </Grid>

          </Grid>
            
            </form>
            )}

          {step === 2 && (
        <form onSubmit={handleSubmit(onSubmitStep2)}>
          <Grid container spacing={3}>
            {/* Campos para subir archivos */}
            {documentos.map((documento) => (
              <Grid item xs={12} key={documento.id}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6">{documento.name}</Typography>
                  <input type="file" onChange={(e) => handleFileChange(e, documento.id)} />
                </Box>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Container>
  );
};

export default JobApplicationForm;