import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import CardMUI from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Card({ id, fullName, title, family, imageUrl, onDelete }) {
  return (
    <>
      <CardMUI sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300, objectFit: 'cover', width: '100%', borderBottom: '1px solid #ccc' }}
          image={imageUrl}
          title="personaje"
        />
        <CardContent sx={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#f1f1f1", fontFamily: "'Cinzel', serif",
          letterSpacing: 2,

        }}>
          <Typography variant="subtitle1">Index: {id}

          </Typography>
          <Typography variant="h5"> {fullName}
            Lizard
          </Typography>
          <Typography variant="subtitle1">Título: {title}

          </Typography>
          <Typography variant="subtitle1">Familia: {family}

          </Typography>      </CardContent>
        <Button
          variant="error"
          color="error"
          sx={{
            alignSelf: 'flex-end',
            mx: 2,
            mb: 2,
            fontSize: '0.75rem',           // Más pequeño
            px: 2,
            py: 0.5,
            textTransform: 'none',
            background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // Mismo fondo
            color: '#f1f1f1',              // Texto claro
            border: '1px solid #2c5364',  // Borde sutil
            borderRadius: 1,
            boxShadow: '0 0 4px rgba(0,0,0,0.4)',
            '&:hover': {
              background: 'linear-gradient(135deg, #1b2a33, #2a4458, #3b5d75)',
              boxShadow: '0 0 6px rgba(255,255,255,0.2)',
            }
          }}
          onClick={() => onDelete(id)}
        >
          Eliminar
        </Button>
      </CardMUI>



    </>
  );
}

export default Card;