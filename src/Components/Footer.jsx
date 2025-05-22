import React from 'react';
import { Box, IconButton, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
    component="footer"
    sx={{
      background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      color: '#f1f1f1',
      py: 3,
      px: 4,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      borderTop: '1px solid #444',
      mt: 'auto',
    }}
  >
    <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
      © {new Date().getFullYear()} Nadia Ellena
    </Typography>

    <Box sx={{ display: 'flex', gap: 1 }}>
      <IconButton
        component={Link}
        href="mailto:nadiaell@hotmail.com"
        color="inherit"
        aria-label="Correo"
        sx={{
          transition: 'color 0.3s ease',
          '&:hover': { color: '#f6d365' }, // tono dorado
        }}
      >
        <EmailIcon />
      </IconButton>

      <IconButton
        component={Link}
        href="https://github.com/Nnadiagabrielaellena"
        target="_blank"
        color="inherit"
        aria-label="GitHub"
        sx={{
          transition: 'color 0.3s ease',
          '&:hover': { color: '#fda085' }, // tono rojo fuego
        }}
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        component={Link}
        href="https://www.linkedin.com/in/nadia-gabriela-ellena-87677921b/"
        target="_blank"
        color="inherit"
        aria-label="LinkedIn"
        sx={{
          transition: 'color 0.3s ease',
          '&:hover': { color: '#00a0dc' }, // color oficial LinkedIn
        }}
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  </Box>
  )
}

export default Footer
