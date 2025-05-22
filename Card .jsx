import React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function Card({ id, fullName, title, family, imageUrl }) {
  return (
    <>
      <Box component="section" sx={{ p: 2, width: "100%" }}>
        <Typography variant="subtitle1">Index: {id}</Typography>
        <Typography variant="h5">Nombre: {fullName}</Typography>
        <Typography variant="subtitle1">Título: {title}</Typography>
        <Typography variant="subtitle1">Familia: {family}</Typography>
        <Avatar
          alt={`Imagen de ${fullName}`}
          src={imageUrl}
          sx={{ width: 200, height: 200, mt: 2 }}
        />
      </Box>
    </>
  ); n
}

export default Card;