


import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              flexGrow: 1 
            }}
          >
            <SchoolIcon 
              sx={{ 
                display: 'flex', 
                mr: 1, 
                color: '#2196F3',
                fontSize: '2rem'
              }} 
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#2196F3',
                textDecoration: 'none',
                '&:hover': {
                  color: '#1976D2'
                }
              }}
            >
              ACCREDIAN
            </Typography>
          </Box>
          <Button 
            color="primary" 
            variant="outlined"
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              px: 3
            }}
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 