
import Card from '../../Card ';

import * as React from 'react';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';

function ContainCard({ characters ,onDeleteCharacter}) {
  return (
    <>
      
      <Container
        maxWidth="xl"
        sx={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#f1f1f1",
          minHeight: '100vh',
          pt: 6,
          mt: 2
         
        }}
      >
        <Grid container spacing={4} justifyContent="center"sx={{ mt: 2 }}>
          {characters.map((c) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={c.id}>
              <Card
                id={c.id}
                fullName={c.fullName}
                title={c.title}
                family={c.family}
                imageUrl={c.imageUrl}
                onDelete={onDeleteCharacter}
               
              />
            </Grid>
          ))}
          
        </Grid>
      </Container>
    </>
  );
}
export default ContainCard
