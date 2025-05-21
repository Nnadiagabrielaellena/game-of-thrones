
import { useFormik } from 'formik';

import * as React from 'react';
import Box from '@mui/material/Box';


import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

const AddCharacter = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Container maxWidth="xl" sx={{Width: '100%',objectFit: 'cover',height: 'auto',  background:"linear-gradient(135deg, #f6d365, #fda085)", display: "flex", justifyContent: "center" }}>
        <Box component="section" sx={{  p: { xs: 2, sm: 4 },  color: "#f1f1f1", background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", p: 2, border: '1px dashed grey', display: "flex",flexDirection:"column" , gap: 2, mb: 4,
     boxShadow: 2,}}>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Nombre</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />

          </form>
          <form onSubmit={formik.handleSubmit}>
             <div className=""></div><label htmlFor="email">  Titulo</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />

           
          </form>
          
        </Box>
        <Box component="section" sx={{color: "#f1f1f1",background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", p: 2, border: '1px dashed grey', display: "flex", flexDirection: "column", gap: 2, mb: 4  }}>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Familia</label>
            <input
              id="family"
              name="family"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.family}
            />

           
          </form>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Imagen</label>
            <input
              id="imageUrl"
              name="imageUrl"
              type=""
              onChange={formik.handleChange}
              value={formik.values.imageUrl}
            />

            <button type="submit">Agregar Personaje</button>
          </form>
    </Box>


      </Container>
    </>
  );
};
export default AddCharacter