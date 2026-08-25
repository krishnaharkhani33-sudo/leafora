import React from 'react';

import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import care from '../images/careguide/care.avif';

const PlantCareIntro = () => {

  return (
    <Box
      sx={{
        backgroundColor: '#0e200a',
        py: { xs: 7, md: 11 },
      }}
    >

      <Container maxWidth="lg">

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            alignItems: 'center',
            gap: { xs: 5, md: 8 },
          }}
        >

          {/* ================= LEFT SIDE ================= */}

          <Box>

            <Typography
              sx={{
                color: '#A8C69F',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Plant Care Made Simple
            </Typography>


            <Typography
              variant="h2"
              sx={{
                color: '#DCD6C4',
                fontWeight: 700,
                lineHeight: 1.15,
                fontSize: {
                  xs: '32px',
                  sm: '40px',
                  md: '52px',
                },
                mb: 3,
              }}
            >
              Give Your Plants
              <br />
              The Care They Deserve.
            </Typography>


            <Typography
              sx={{
                color: '#B8C2B2',
                fontSize: '16px',
                lineHeight: 1.8,
                maxWidth: '520px',
                mb: 4,
              }}
            >
              Healthy plants start with the right care.
              Leafora helps you understand what your plants
              need so you can help them grow beautifully.
            </Typography>


            {/* FEATURES */}

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                mb: 4,
              }}
            >

              {/* Feature 1 */}

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: '#A8C69F',
                    fontSize: 20,
                  }}
                />

                <Typography
                  sx={{
                    color: '#DCD6C4',
                    fontSize: '15px',
                  }}
                >
                  Personalized care tips
                </Typography>
              </Box>


              {/* Feature 2 */}

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: '#A8C69F',
                    fontSize: 20,
                  }}
                />

                <Typography
                  sx={{
                    color: '#DCD6C4',
                    fontSize: '15px',
                  }}
                >
                  Easy watering guidance
                </Typography>
              </Box>


              {/* Feature 3 */}

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: '#A8C69F',
                    fontSize: 20,
                  }}
                />

                <Typography
                  sx={{
                    color: '#DCD6C4',
                    fontSize: '15px',
                  }}
                >
                  Better plant growth
                </Typography>
              </Box>

            </Box>


            {/* BUTTON */}

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: '#A8C69F',
                color: '#0e200a',
                px: 3,
                py: 1.3,
                borderRadius: '10px',
                textTransform: 'none',
                fontWeight: 700,

                '&:hover': {
                  backgroundColor: '#DCD6C4',
                },
              }}
            >
              Explore Plant Care
            </Button>

          </Box>


          {/* ================= RIGHT SIDE ================= */}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >

            {/* PREMIUM IMAGE CARD */}

            <Box
              sx={{
                width: '100%',
                maxWidth: '460px',
                padding: '14px',
                backgroundColor: '#162f12',
                borderRadius: '28px',
                border: '1px solid #294b24',
                boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
                overflow: 'hidden',

                animation: 'cardFloat 5s ease-in-out infinite',

                '@keyframes cardFloat': {
                  '0%': {
                    transform: 'translateY(0px)',
                  },
                  '50%': {
                    transform: 'translateY(-10px)',
                  },
                  '100%': {
                    transform: 'translateY(0px)',
                  },
                },
              }}
            >

              {/* IMAGE WRAPPER */}

              <Box
                sx={{
                  width: '100%',
                  height: {
                    xs: '320px',
                    sm: '400px',
                    md: '480px',
                  },
                  overflow: 'hidden',
                  borderRadius: '20px',
                }}
              >

                {/* IMAGE */}

                <Box
                  component="img"
                  src={care}
                  alt="Plant care"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',

                    animation: 'imageZoom 6s ease-in-out infinite',

                    '@keyframes imageZoom': {
                      '0%': {
                        transform: 'scale(1)',
                      },
                      '50%': {
                        transform: 'scale(1.08)',
                      },
                      '100%': {
                        transform: 'scale(1)',
                      },
                    },
                  }}
                />

              </Box>

            </Box>

          </Box>

        </Box>

      </Container>

    </Box>
  );
};

export default PlantCareIntro;