import React from 'react'
import bannerImage from '../assets/banner.jpg';




import Container from '@mui/material/Container';


function Banner() {
  return (
    

    <React.Fragment>
   
    <Container maxWidth="xl" sx={{  background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', width: '100%',
        
       }}>
    <img
      src={bannerImage}
      alt="Banner de Game of Thrones"
      style={{  width: '100%',
      height: 'auto',         
      maxHeight: '600px',    
      objectFit: 'contain',   
      display: 'block', background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        display: 'flex',
        justifyContent: 'center',}}
    />
    </Container>
  </React.Fragment>
  )
}

export default Banner
