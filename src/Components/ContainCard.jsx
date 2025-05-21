import { useState } from 'react';
import Card from '../../Card ';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';




function ContainCard({ characters }) {

//function agregoNombre(e){
//  console.log(character)
//setCharacter({...character,fullName: e.target.value})
//}


  return (

   
<>
      
    



<CssBaseline />
      <Container maxWidth="false"sx={{color: "#f1f1f1", background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", height: '100%',display:"flex", flexDirection:"column ", justifyContent:"center", alignItems:"center" }}>
        <Box  />
        {
        characters.map(c =>

          <Card
            index={c.id}
            fullName={c.fullName}
            title={c.title}
            family={c.family}
            imageUrl={c.imageUrl}
          />
        )
      }
      </Container>
    
      </>

  )
}
export default ContainCard
