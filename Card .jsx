import React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


import Button from '@mui/material/Button';



function Card({ id, fullName, title, family, imageUrl,onDelete  }) {
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
        <Button
  variant=""
  color="error"
  sx={{ mt: 2 }}
  onClick={() => onDelete(id)}
>
  Eliminar
</Button>
        
      </Box>
    </>
  ); n
}

export default Card;