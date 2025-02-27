import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Typography
      variant="h6"
      sx={{
        color: '#1976D2',
        fontWeight: 500,
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#2196F3',
          marginRight: '10px'
        }
      }}
    >
      {text}
    </Typography>
  </motion.div>
);

const Hero = ({ onReferClick }) => {
  const referralBenefits = [
    "Earn rewards for every successful referral",
    "Help friends access quality education",
    "Track your referral status in real-time",
    "Get exclusive bonuses for multiple referrals",
    "Join our community of successful referrers"
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Left Side - White Background with Animated Text */}
      <Box
        sx={{
          width: '50%',
          background: 'white',
          padding: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '100%',
            background: 'linear-gradient(to left, white, transparent)',
            zIndex: 1
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#1976D2',
              fontWeight: 700,
              mb: 4
            }}
          >
            Why Refer?
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {referralBenefits.map((benefit, index) => (
            <AnimatedText 
              key={index} 
              text={benefit} 
              delay={0.2 * (index + 1)} 
            />
          ))}
        </Box>

        {/* Floating Circles Animation */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            opacity: 0.1,
            zIndex: 0,
            overflow: 'hidden',
            '& .circle': {
              position: 'absolute',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
              animation: 'float 15s infinite ease-in-out'
            }
          }}
        >
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              className="circle"
              sx={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Right Side - Gradient Background with Main Content */}
      <Box
        sx={{
          width: '50%',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          padding: '4rem',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              className="gradient-text"
              sx={{ 
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              Share & Earn Rewards
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'text.secondary',
                mb: 6,
                lineHeight: 1.6
              }}
            >
              Refer your friends to our courses and earn exciting rewards for every successful enrollment.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={onReferClick}
                startIcon={<ShareIcon />}
                sx={{
                  py: 2,
                  px: 6,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 12px rgba(33, 203, 243, .4)'
                  }
                }}
              >
                Refer Now
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero; 