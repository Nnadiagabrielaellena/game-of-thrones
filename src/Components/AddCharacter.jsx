import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(20, 'Máximo 20 caracteres')
    .required('Nombre es requerido'),
  title: Yup.string()
    .max(20, 'Máximo 20 caracteres')
    .required('Título es requerido'),
  family: Yup.string()
    .max(20, 'Máximo 20 caracteres')
    .required('Familia es requerida'),
  imageUrl: Yup.string()
    .url('Debe ser una URL válida')
    .required('La imagen es requerida'),
});

const AddCharacter = ({ onAddCharacter }) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      title: '',
      family: '',
      imageUrl: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onAddCharacter(values);   
      resetForm();             
    },
  });

  return (
    <Container
      maxWidth="xl"
      sx={{
        width: '100%',
        objectFit: 'cover',
        height: 'auto',
        background: 'linear-gradient(135deg, #f6d365, #fda085)',
        display: 'flex',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          p: { xs: 2, sm: 4 },
          color: '#f1f1f1',
          background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
          
          flexDirection: 'column',
          gap: 2,
          boxShadow: 2,
          width: '100%',
          maxWidth: 600,
        }}
      >
        <label htmlFor="fullName">Nombre</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div style={{ color: 'red' }}>{formik.errors.fullName}</div>
        )}

        <label htmlFor="title">Título</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title && (
          <div style={{ color: 'red' }}>{formik.errors.title}</div>
        )}

        <label htmlFor="family">Familia</label>
        <input
          id="family"
          name="family"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          value={formik.values.family}
        />
        {formik.touched.family && formik.errors.family && (
          <div style={{ color: 'red' }}>{formik.errors.family}</div>
        )}

        <label htmlFor="imageUrl">Imagen</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="url"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          value={formik.values.imageUrl}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl && (
          <div style={{ color: 'red' }}>{formik.errors.imageUrl}</div>
        )}

        <button type="submit">Agregar Personaje</button>
      </Box>


      
    </Container>
  );
};

export default AddCharacter;

