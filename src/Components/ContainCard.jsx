import { useState } from 'react';
import Card from '../../Card ';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


;


import Grid from '@mui/material/Grid';



function ContainCard({ characters }) {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#f1f1f1",
          minHeight: '100vh',
          py: 5,
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {characters.map((c) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={c.id}>
              <Card
                index={c.id}
                fullName={c.fullName}
                title={c.title}
                family={c.family}
                imageUrl={c.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
export default ContainCard
