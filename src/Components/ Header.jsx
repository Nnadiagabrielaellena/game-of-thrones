import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function  Header({}) {
  return (
  <>
  <Box maxWidth="xl" component="section" sx={{color: "#f1f1f1",background:" #1c1c1c",fontWeight:'bold' ,display:"flex",justifyContent:"center"}}>
    <Typography  variant="h2" component="section" >
  Game Of Thrones
  </Typography>
    </Box>
  </>
  )
}

export default  Header
