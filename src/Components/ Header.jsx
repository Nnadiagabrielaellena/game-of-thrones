

import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function  Header({}) {
  return (
  <>
 
    <Box maxWidth="xl" component="section" sx={{color: "#f1f1f1",background:" #1c1c1c", p: 2, border: '1px dashed grey',mt:5,fontWeight:'bold',mb:4 ,display:"flex",justifyContent:"center"}}>
    <Typography  variant="h2" component="section" >
  Game Of Thrones
  
    </Typography>
    </Box>
  </>
  )
}

export default  Header
