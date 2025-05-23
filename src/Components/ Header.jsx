import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';




function  Header({}) {
  return (
  <>
 <Box
      maxWidth="xl"
      component="section"
      sx={{
        color: "#f1f1f1",
        background: "#1c1c1c",
        fontWeight: 'bold',
        display: "flex",
        justifyContent: "center",
        py: 4,
      }}
    >
  <Typography
        variant="h2"
        component="section"
        sx={{
          fontFamily: "'Cinzel', serif",
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          color: "#e0dede",
        }}
      >
        Game Of Thrones
      </Typography>
    </Box>
  </>
  )
}

export default  Header
