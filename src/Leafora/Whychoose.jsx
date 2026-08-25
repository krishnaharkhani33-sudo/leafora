import React from 'react';

import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpaIcon from '@mui/icons-material/Spa';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WhyLeafora = () => {

  const features = [
    {
      icon: <FavoriteBorderIcon />,
      title: 'Personalized Care',
      description:
        'Get care suggestions designed around the unique needs of your plants.',
    },
    {
      icon: <AutoAwesomeIcon />,
      title: 'Easy Guidance',
      description:
        'Simple and clear plant care tips that make everyday plant care effortless.',
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Plant Growth Tracking',
      description:
        'Keep track of your plant journey and understand how your plants are growing.',
    },
    {
      icon: <SpaIcon />,
      title: 'Beginner Friendly',
      description:
        'Everything you need to start caring for plants with confidence.',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#0e200a',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          backgroundColor: 'rgba(168,198,159,0.06)',
          filter: 'blur(100px)',
          top: '-180px',
          right: '-150px',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          backgroundColor: 'rgba(168,198,159,0.04)',
          filter: 'blur(100px)',
          bottom: '-180px',
          left: '-150px',
        }}
      />

      <Container maxWidth="lg">

        {/* ================= HEADING ================= */}

        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '700px',
            mx: 'auto',
            mb: { xs: 6, md: 8 },
          }}
        >

          <Typography
            sx={{
              color: '#A8C69F',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Why Choose Leafora?
          </Typography>


          <Typography
            sx={{
              color: '#DCD6C4',
              fontWeight: 700,
              fontSize: {
                xs: '34px',
                sm: '42px',
                md: '52px',
              },
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Better Care.
            <br />

            <Box
              component="span"
              sx={{
                color: '#A8C69F',
              }}
            >
              Healthier Plants.
            </Box>
          </Typography>


          <Typography
            sx={{
              color: 'rgba(220,214,196,0.65)',
              fontSize: '16px',
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Leafora makes plant care simple, personal and
            enjoyable — whether you are just starting or
            already love growing plants.
          </Typography>

        </Box>


        {/* ================= FEATURE CARDS ================= */}

        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },

            gap: 3,
          }}
        >

          {features.map((feature, index) => (

            <Box
              key={index}
              sx={{
                position: 'relative',

                p: {
                  xs: 3,
                  md: 3.5,
                },

                minHeight: '330px',

                borderRadius: '20px',

                backgroundColor:
                  'rgba(168,198,159,0.05)',

                border:
                  '1px solid rgba(168,198,159,0.14)',

                display: 'flex',

                flexDirection: 'column',

                transition:
                  'all 0.4s ease',

                '&:hover': {
                  transform:
                    'translateY(-10px)',

                  backgroundColor:
                    'rgba(168,198,159,0.09)',

                  borderColor:
                    'rgba(168,198,159,0.35)',

                  boxShadow:
                    '0 20px 50px rgba(0,0,0,0.25)',
                },
              }}
            >

              {/* ================= NUMBER ================= */}

              <Typography
                sx={{
                  position: 'absolute',
                  top: 18,
                  right: 20,

                  color:
                    'rgba(168,198,159,0.20)',

                  fontSize: '30px',
                  fontWeight: 700,
                }}
              >
                0{index + 1}
              </Typography>


              {/* ================= ICON ================= */}

              <Box
                sx={{
                  width: '52px',
                  height: '52px',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: '14px',

                  backgroundColor:
                    'rgba(168,198,159,0.10)',

                  color: '#A8C69F',

                  mb: 3,

                  transition:
                    'all 0.4s ease',

                  '.MuiSvgIcon-root': {
                    fontSize: '25px',
                  },
                }}
              >
                {feature.icon}
              </Box>


              {/* ================= TITLE ================= */}

              <Typography
                sx={{
                  color: '#DCD6C4',
                  fontSize: '18px',
                  fontWeight: 700,
                  mb: 1.5,
                }}
              >
                {feature.title}
              </Typography>


              {/* ================= DESCRIPTION ================= */}

              <Typography
                sx={{
                  color:
                    'rgba(220,214,196,0.58)',

                  fontSize: '14px',

                  lineHeight: 1.7,

                  mb: 3,
                }}
              >
                {feature.description}
              </Typography>


              {/* ================= BUTTON ================= */}

              <Box
                sx={{
                  marginTop: 'auto',

                  display: 'flex',

                  justifyContent: 'center',
                }}
              >

                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: '#A8C69F',

                    borderColor:
                      'rgba(168,198,159,0.30)',

                    borderRadius: '50px',

                    px: 2.5,

                    py: 1,

                    fontSize: '13px',

                    fontWeight: 600,

                    textTransform: 'none',

                    '&:hover': {
                      backgroundColor:
                        '#A8C69F',

                      borderColor:
                        '#A8C69F',

                      color: '#0e200a',

                      transform:
                        'translateY(-2px)',
                    },

                    transition:
                      'all 0.3s ease',
                  }}
                >
                  Learn More
                </Button>

              </Box>

            </Box>

          ))}

        </Box>

      </Container>

    </Box>
  );
};

export default WhyLeafora;