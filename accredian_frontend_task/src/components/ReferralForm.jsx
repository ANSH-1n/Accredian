import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Box, 
  Alert, 
  CircularProgress, 
  Grid, 
  Paper,
  Typography,
  Fade,
  Grow
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';

const validationSchema = Yup.object({
  referrerName: Yup.string().required('Referrer name is required'),
  referrerEmail: Yup.string().email('Invalid email').required('Referrer email is required'),
  refereeName: Yup.string().required('Friend\'s name is required'),
  refereeEmail: Yup.string().email('Invalid email').required('Friend\'s email is required'),
  courseId: Yup.number().required('Course ID is required'),
  courseName: Yup.string().required('Course name is required'),
});

const ReferralForm = ({ onClose }) => {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
      courseId: '',
      courseName: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/referrals/create`, values);
        setStatus({ type: 'success', message: 'Referral sent successfully!' });
        setTimeout(() => onClose(), 2000);
      } catch (error) {
        setStatus({ 
          type: 'error', 
          message: error.response?.data?.error || 'Failed to send referral'
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      <Grow in timeout={800}>
        <Paper 
          elevation={6}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 800,
            borderRadius: 3,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            sx={{ 
              mb: 4,
              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            Refer a Friend
          </Typography>

          {status.message && (
            <Fade in>
              <Alert 
                severity={status.type} 
                sx={{ 
                  mb: 3,
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              >
                {status.message}
              </Alert>
            </Fade>
          )}

          <Box component="form" onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="referrerName"
                  label="Your Name"
                  value={formik.values.referrerName}
                  onChange={formik.handleChange}
                  error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
                  helperText={formik.touched.referrerName && formik.errors.referrerName}
                  autoFocus
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="referrerEmail"
                  label="Your Email"
                  type="email"
                  value={formik.values.referrerEmail}
                  onChange={formik.handleChange}
                  error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
                  helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="refereeName"
                  label="Friend's Name"
                  value={formik.values.refereeName}
                  onChange={formik.handleChange}
                  error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
                  helperText={formik.touched.refereeName && formik.errors.refereeName}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="refereeEmail"
                  label="Friend's Email"
                  type="email"
                  value={formik.values.refereeEmail}
                  onChange={formik.handleChange}
                  error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
                  helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="courseId"
                  label="Course ID"
                  type="number"
                  value={formik.values.courseId}
                  onChange={formik.handleChange}
                  error={formik.touched.courseId && Boolean(formik.errors.courseId)}
                  helperText={formik.touched.courseId && formik.errors.courseId}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="courseName"
                  label="Course Name"
                  value={formik.values.courseName}
                  onChange={formik.handleChange}
                  error={formik.touched.courseName && Boolean(formik.errors.courseName)}
                  helperText={formik.touched.courseName && formik.errors.courseName}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }
                    }
                  }}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              sx={{ 
                mt: 4,
                py: 2,
                borderRadius: 2,
                fontSize: '1.1rem',
                textTransform: 'none',
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
              {loading ? 'Sending...' : 'Submit Referral'}
            </Button>
          </Box>
        </Paper>
      </Grow>
    </Box>
  );
};

export default ReferralForm; 