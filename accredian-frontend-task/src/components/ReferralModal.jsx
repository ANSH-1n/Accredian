
import React from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReferralForm from './ReferralForm';

const ReferralModal = ({ open, onClose }) => {
  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth={false}
      fullScreen
      PaperProps={{
        sx: {
          background: 'transparent',
          boxShadow: 'none',
        }
      }}
    >
      <IconButton
        aria-label="close dialog"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: '#2196F3',
          background: 'white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          zIndex: 1,
          '&:hover': {
            background: 'white',
            transform: 'scale(1.1)',
          }
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 0 }}>
        <ReferralForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ReferralModal; 