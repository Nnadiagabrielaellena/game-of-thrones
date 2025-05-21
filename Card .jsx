import React from 'react';

import Box from '@mui/material/Box';

function Card({ id, fullName, title, family, imageUrl }) {
  return (
    <>
      

      <Box component="section" sx={{ p: 2, width:"100%" }}>
      <h2>Index: {id}</h2>
      <h1>Nombre: {fullName}</h1>
      <h2>Título: {title}</h2>
      <h2>Familia: {family}</h2>
      <img src={imageUrl} alt={`Imagen de ${fullName}`} />
    </Box>
    </>
  );
}

export default Card;