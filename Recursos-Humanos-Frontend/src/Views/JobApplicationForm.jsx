import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Typography, TextField, Button, Grid,  Container, MenuItem, FormHelperText } from '@mui/material';

// Datos mock - En producción, estos vendrían del backend
const IDENTIFICATION_TYPES = [
  { id: 1, name: 'Cédula de Ciudadanía' },
  { id: 2, name: 'Pasaporte' },
  { id: 3, name: 'Cédula Extranjera' }
];

const BLOOD_TYPES = [
  { id: 1, name: 'A+' },
  { id: 2, name: 'A-' },
  { id: 3, name: 'B+' },
  { id: 4, name: 'B-' },
  { id: 5, name: 'O+' },
  { id: 6, name: 'O-' },
  { id: 7, name: 'AB+' },
  { id: 8, name: 'AB-' }
];

const JobApplicationForm = () => {
  const { jobId } = useParams();
  const { 
    control, 
    handleSubmit, 
    formState: { errors }, 
    watch 
  } = useForm({
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

  const onSubmit = (data) => {
    // Añadir el jobId a los datos de la aplicación
    const applicationData = {
      ...data,
      job_id: jobId,
      birth_date: new Date(data.birth_date)
    };

    console.log('Datos de la aplicación:', applicationData);
    // Aquí iría la llamada al endpoint de postulación
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <h2>Inscripción a Oferta de Trabajo </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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
                  {IDENTIFICATION_TYPES.map((type) => (
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
                  {BLOOD_TYPES.map((type) => (
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

          <Grid item xs={12} >
            <Button sx={{ backgroundColor: '#FB9016' }}
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
            >
              Enviar Solicitud
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default JobApplicationForm;