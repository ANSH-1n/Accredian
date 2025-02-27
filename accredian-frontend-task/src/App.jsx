import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReferralModal from './components/ReferralModal';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#21CBF3',
    },
  },
});

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Accredian - Refer & Earn';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box component="div" role="presentation">
        <Navbar />
        <Hero onReferClick={() => setModalOpen(true)} />
        <ReferralModal 
          open={modalOpen} 
          onClose={() => setModalOpen(false)} 
        />
      </Box>
    </ThemeProvider>
  );
}

export default App; 


