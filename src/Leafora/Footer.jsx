import React from 'react';

import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';

import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#091506',
        position: 'relative',
        overflow: 'hidden',
        color: '#DCD6C4',
        pt: { xs: 7, md: 10 },
        pb: 3,
      }}
    >

      {/* ================= DECORATIVE GLOW ================= */}

      <Box
        sx={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          backgroundColor: 'rgba(168,198,159,0.05)',
          filter: 'blur(100px)',
          top: '-280px',
          left: '-180px',
          pointerEvents: 'none',
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
          bottom: '-200px',
          right: '-150px',
          pointerEvents: 'none',
        }}
      />


      <Container maxWidth="lg">

        {/* ================================================= */}
        {/* PREMIUM CTA */}
        {/* ================================================= */}

        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',

            px: {
              xs: 3,
              sm: 6,
              md: 10,
            },

            py: {
              xs: 5,
              md: 6,
            },

            mb: {
              xs: 7,
              md: 9,
            },

            borderRadius: '28px',

            background:
              'linear-gradient(135deg, rgba(168,198,159,0.10), rgba(168,198,159,0.03))',

            border:
              '1px solid rgba(168,198,159,0.16)',

            boxShadow:
              '0 20px 60px rgba(0,0,0,0.20)',
          }}
        >

          <SpaOutlinedIcon
            sx={{
              color: '#A8C69F',
              fontSize: 34,
              mb: 1.5,
            }}
          />

          <Typography
            sx={{
              color: '#A8C69F',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '3px',
              mb: 1.5,
            }}
          >
            GROW SOMETHING BEAUTIFUL
          </Typography>


          <Typography
            sx={{
              color: '#DCD6C4',
              fontSize: {
                xs: '28px',
                sm: '36px',
                md: '44px',
              },
              fontWeight: 700,
              lineHeight: 1.15,
              mb: 1.5,
            }}
          >
            Your plants deserve
            <br />
            <Box
              component="span"
              sx={{
                color: '#A8C69F',
              }}
            >
              thoughtful care.
            </Box>
          </Typography>


          <Typography
            sx={{
              color: 'rgba(220,214,196,0.60)',
              fontSize: '14px',
              lineHeight: 1.8,
              maxWidth: '500px',
              mx: 'auto',
              mb: 3,
            }}
          >
            Simple guidance, better habits and a greener
            space — all with Leafora.
          </Typography>


          {/* CTA */}

          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,

              px: 2.5,
              py: 1.3,

              borderRadius: '10px',

              backgroundColor: '#A8C69F',
              color: '#0e200a',

              cursor: 'pointer',

              fontSize: '14px',
              fontWeight: 700,

              transition: 'all 0.35s ease',

              '&:hover': {
                backgroundColor: '#DCD6C4',
                transform: 'translateY(-4px)',
                boxShadow:
                  '0 12px 30px rgba(168,198,159,0.20)',
              },
            }}
          >
            Start Your Plant Journey

            <ArrowForwardIcon
              sx={{
                fontSize: 18,
              }}
            />
          </Box>

        </Box>


        {/* ================================================= */}
        {/* BRAND + LINKS */}
        {/* ================================================= */}

        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              sm: '1.5fr 1fr 1fr 1fr',
            },

            gap: {
              xs: 5,
              md: 8,
            },

            mb: 7,
          }}
        >

          {/* ================= BRAND ================= */}

          <Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 2,
              }}
            >

              <Box
                sx={{
                  width: 42,
                  height: 42,

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: '13px',

                  backgroundColor:
                    'rgba(168,198,159,0.10)',

                  border:
                    '1px solid rgba(168,198,159,0.18)',
                }}
              >
                <SpaOutlinedIcon
                  sx={{
                    color: '#A8C69F',
                    fontSize: 23,
                  }}
                />
              </Box>


              <Typography
                sx={{
                  color: '#DCD6C4',
                  fontSize: '25px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                }}
              >
                Leafora
              </Typography>

            </Box>


            <Typography
              sx={{
                color: 'rgba(220,214,196,0.55)',
                fontSize: '14px',
                lineHeight: 1.8,
                maxWidth: '300px',
                mb: 3,
              }}
            >
              A thoughtful space for plant lovers.
              Learn, care and grow a little greener
              every day.
            </Typography>


            {/* SOCIAL */}

            <Box
              sx={{
                display: 'flex',
                gap: 1,
              }}
            >

              <IconButton
                sx={{
                  width: 38,
                  height: 38,
                  color: '#A8C69F',
                  border:
                    '1px solid rgba(168,198,159,0.16)',

                  '&:hover': {
                    backgroundColor: '#A8C69F',
                    color: '#0e200a',
                    transform: 'translateY(-3px)',
                  },

                  transition: 'all 0.3s ease',
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>


              <IconButton
                sx={{
                  width: 38,
                  height: 38,
                  color: '#A8C69F',
                  border:
                    '1px solid rgba(168,198,159,0.16)',

                  '&:hover': {
                    backgroundColor: '#A8C69F',
                    color: '#0e200a',
                    transform: 'translateY(-3px)',
                  },

                  transition: 'all 0.3s ease',
                }}
              >
                <FacebookOutlinedIcon fontSize="small" />
              </IconButton>


              <IconButton
                sx={{
                  width: 38,
                  height: 38,
                  color: '#A8C69F',
                  border:
                    '1px solid rgba(168,198,159,0.16)',

                  '&:hover': {
                    backgroundColor: '#A8C69F',
                    color: '#0e200a',
                    transform: 'translateY(-3px)',
                  },

                  transition: 'all 0.3s ease',
                }}
              >
                <EmailOutlinedIcon fontSize="small" />
              </IconButton>

            </Box>

          </Box>


          {/* ================= EXPLORE ================= */}

          <Box>

            <Typography
              sx={{
                color: '#DCD6C4',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                mb: 2.5,
              }}
            >
              EXPLORE
            </Typography>

            {[
              'Home',
              'About',
              'Plant Care',
              'My Plants',
            ].map((item) => (

              <Typography
                key={item}
                sx={{
                  color:
                    'rgba(220,214,196,0.52)',
                  fontSize: '14px',
                  mb: 1.5,
                  cursor: 'pointer',
                  width: 'fit-content',

                  transition: 'all 0.3s ease',

                  '&:hover': {
                    color: '#A8C69F',
                    transform: 'translateX(5px)',
                  },
                }}
              >
                {item}
              </Typography>

            ))}

          </Box>


          {/* ================= CARE ================= */}

          <Box>

            <Typography
              sx={{
                color: '#DCD6C4',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                mb: 2.5,
              }}
            >
              PLANT CARE
            </Typography>

            {[
              'Watering',
              'Light & Sun',
              'Soil Guide',
              'Plant Nutrition',
            ].map((item) => (

              <Typography
                key={item}
                sx={{
                  color:
                    'rgba(220,214,196,0.52)',
                  fontSize: '14px',
                  mb: 1.5,
                  cursor: 'pointer',
                  width: 'fit-content',

                  transition: 'all 0.3s ease',

                  '&:hover': {
                    color: '#A8C69F',
                    transform: 'translateX(5px)',
                  },
                }}
              >
                {item}
              </Typography>

            ))}

          </Box>


          {/* ================= CONTACT ================= */}

          <Box>

            <Typography
              sx={{
                color: '#DCD6C4',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                mb: 2.5,
              }}
            >
              CONTACT
            </Typography>


            <Typography
              sx={{
                color:
                  'rgba(220,214,196,0.52)',
                fontSize: '14px',
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              Need help with your
              plant care journey?
            </Typography>


            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >

              <EmailOutlinedIcon
                sx={{
                  color: '#A8C69F',
                  fontSize: 18,
                }}
              />

              <Typography
                sx={{
                  color: '#DCD6C4',
                  fontSize: '13px',
                }}
              >
                hello@leafora.com
              </Typography>

            </Box>

          </Box>

        </Box>


        {/* ================= DIVIDER ================= */}

        <Divider
          sx={{
            borderColor:
              'rgba(220,214,196,0.09)',
          }}
        />


        {/* ================================================= */}
        {/* BOTTOM BAR */}
        {/* ================================================= */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            gap: 2,

            pt: 3,

            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >

          <Typography
            sx={{
              color:
                'rgba(220,214,196,0.38)',
              fontSize: '12px',
            }}
          >
            © 2026 Leafora. All rights reserved.
          </Typography>


          <Typography
            sx={{
              color:
                'rgba(220,214,196,0.38)',
              fontSize: '12px',
            }}
          >
            Made with 🌿 for plant lovers
          </Typography>


          <IconButton
            onClick={scrollTop}
            sx={{
              width: 36,
              height: 36,

              color: '#A8C69F',

              border:
                '1px solid rgba(168,198,159,0.16)',

              '&:hover': {
                backgroundColor: '#A8C69F',
                color: '#0e200a',
                transform: 'translateY(-3px)',
              },

              transition: 'all 0.3s ease',
            }}
          >
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>

        </Box>

      </Container>

    </Box>
  );
};

export default Footer;