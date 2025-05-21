

import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';






function  Header({}) {
  return (
  <>
  <Typography  variant="h4" component="section" sx={{color: "#f1f1f1",background:" #1c1c1c", p: 2, border: '1px dashed grey',mt:5,fontWeight:'bold',mb:4 ,display:"flex",justifyContent:"center"}}>
  Game Of Thrones
  
    </Typography>
   
  </>
  )
}

export default  Header
