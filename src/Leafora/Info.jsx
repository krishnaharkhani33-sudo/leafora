import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import infoimg from '../images/info/infoimg.jpg';

function Info() {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        backgroundColor: '#0e200a',
        position: 'relative',
        overflow: 'hidden',

        px: {
          xs: 2,
          sm: 4,
          md: 6,
          lg: 9,
        },

        py: {
          xs: 7,
          sm: 9,
          md: 12,
        },
      }}
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <Box
        sx={{
          position: 'absolute',

          width: {
            xs: '220px',
            sm: '300px',
            md: '500px',
          },

          height: {
            xs: '220px',
            sm: '300px',
            md: '500px',
          },

          borderRadius: '50%',

          backgroundColor:
            'rgba(168,198,159,0.08)',

          filter: {
            xs: 'blur(70px)',
            md: 'blur(100px)',
          },

          top: {
            xs: '-100px',
            md: '-150px',
          },

          left: {
            xs: '-100px',
            md: '-150px',
          },
        }}
      />


      {/* ================= MAIN CONTAINER ================= */}

      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',

          display: 'grid',

          gridTemplateColumns: {
            xs: '1fr',
            md: 'minmax(0, 1fr) minmax(0, 1fr)',
          },

          gap: {
            xs: 8,
            sm: 9,
            md: 10,
          },

          alignItems: 'center',
        }}
      >


        {/* ================================================= */}
        {/* LEFT IMAGE SECTION */}
        {/* ================================================= */}

        <Box
          sx={{
            position: 'relative',

            width: '100%',

            maxWidth: {
              xs: '100%',
              sm: '520px',
              md: '520px',
            },

            mx: 'auto',

            animation:
              'imageFloat 5s ease-in-out infinite',

            '@keyframes imageFloat': {
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


          {/* ================= IMAGE WRAPPER ================= */}

          <Box
            sx={{
              width: '100%',

              height: {
                xs: '350px',
                sm: '430px',
                md: '560px',
              },

              overflow: 'hidden',

              borderRadius: {
                xs: '18px',
                sm: '24px',
                md: '30px',
              },

              boxShadow:
                '0 30px 70px rgba(0,0,0,0.45)',
            }}
          >

            {/* ================= MAIN IMAGE ================= */}

            <Box
              component="img"
              src={infoimg}
              alt="Leafora plant care"
              sx={{
                width: '100%',

                height: '100%',

                objectFit: 'cover',

                objectPosition: 'center',

                display: 'block',

                animation:
                  'imageZoom 6s ease-in-out infinite',

                transition:
                  'transform 0.5s ease',

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

                '&:hover': {
                  transform: 'scale(1.12)',
                },
              }}
            />


            {/* ================= IMAGE OVERLAY ================= */}

            <Box
              sx={{
                position: 'absolute',

                inset: 0,

                borderRadius: {
                  xs: '18px',
                  sm: '24px',
                  md: '30px',
                },

                background:
                  'linear-gradient(to top, rgba(14,32,10,0.75), transparent 55%)',

                pointerEvents: 'none',
              }}
            />

          </Box>


          {/* ================================================= */}
          {/* FLOATING CARD */}
          {/* ================================================= */}

          <Box
            sx={{
              position: 'absolute',

              bottom: {
                xs: '15px',
                sm: '25px',
                md: '30px',
              },

              right: {
                xs: '10px',
                sm: '-15px',
                md: '-35px',
              },

              width: {
                xs: '155px',
                sm: '190px',
                md: '220px',
              },

              p: {
                xs: 1.8,
                sm: 2.2,
                md: 2.5,
              },

              borderRadius: {
                xs: '12px',
                md: '16px',
              },

              backgroundColor:
                'rgba(14,32,10,0.75)',

              border:
                '1px solid rgba(168,198,159,0.30)',

              backdropFilter:
                'blur(15px)',

              boxShadow:
                '0 15px 35px rgba(0,0,0,0.4)',

              transition:
                'all 0.3s ease',

              '&:hover': {
                transform:
                  'translateY(-6px)',
              },
            }}
          >

            <Typography
              sx={{
                color: '#A8C69F',

                fontSize: {
                  xs: '10px',
                  sm: '11px',
                  md: '12px',
                },

                letterSpacing: {
                  xs: '1px',
                  md: '2px',
                },

                fontWeight: 600,

                mb: 1,
              }}
            >
              PLANT CARE
            </Typography>


            <Typography
              sx={{
                color: '#DCD6C4',

                fontSize: {
                  xs: '19px',
                  sm: '21px',
                  md: '22px',
                },

                fontWeight: 700,
              }}
            >
              100%
            </Typography>


            <Typography
              sx={{
                color:
                  'rgba(220,214,196,0.65)',

                fontSize: {
                  xs: '10px',
                  sm: '11px',
                  md: '12px',
                },
              }}
            >
              Better plant habits
            </Typography>

          </Box>

        </Box>


        {/* ================================================= */}
        {/* RIGHT CONTENT SECTION */}
        {/* ================================================= */}

        <Box
          sx={{
            width: '100%',

            maxWidth: '560px',

            mx: {
              xs: 'auto',
              md: 0,
            },

            textAlign: {
              xs: 'center',
              md: 'left',
            },
          }}
        >

          {/* ================= SMALL HEADING ================= */}

          <Typography
            sx={{
              color: '#A8C69F',

              fontSize: {
                xs: '11px',
                sm: '13px',
                md: '15px',
              },

              fontWeight: 700,

              letterSpacing: {
                xs: '2px',
                sm: '3px',
                md: '4px',
              },

              mb: {
                xs: 1.5,
                md: 2,
              },
            }}
          >
            GROW WITH LEAFORA
          </Typography>


          {/* ================= MAIN HEADING ================= */}

          <Typography
            sx={{
              color: '#DCD6C4',

              fontSize: {
                xs: '34px',
                sm: '44px',
                md: '58px',
                lg: '62px',
              },

              fontWeight: 700,

              lineHeight: 1.08,

              mb: {
                xs: 2.5,
                md: 3,
              },
            }}
          >
            Turn Your Space
            <br />

            <Box
              component="span"
              sx={{
                color: '#A8C69F',
              }}
            >
              Into Nature.
            </Box>
          </Typography>


          {/* ================= DESCRIPTION ================= */}

          <Typography
            sx={{
              color:
                'rgba(220,214,196,0.70)',

              fontSize: {
                xs: '14px',
                sm: '15px',
                md: '17px',
              },

              lineHeight: 1.8,

              maxWidth: '500px',

              mx: {
                xs: 'auto',
                md: 0,
              },

              mb: {
                xs: 3,
                md: 4,
              },
            }}
          >
            Bring a sense of calm, freshness and
            natural beauty into your everyday life.
            Leafora makes plant care simple,
            meaningful and beautiful.
          </Typography>


          {/* ================= MINI FEATURES ================= */}

          <Box
            sx={{
              display: 'grid',

              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
              },

              gap: {
                xs: 1.5,
                sm: 2,
              },

              mb: {
                xs: 3,
                md: 4,
              },

              width: '100%',
            }}
          >

            {/* ================= FEATURE 1 ================= */}

            <Box
              sx={{
                p: {
                  xs: 1.7,
                  sm: 2,
                },

                borderRadius: '12px',

                backgroundColor:
                  'rgba(168,198,159,0.06)',

                border:
                  '1px solid rgba(168,198,159,0.15)',

                transition:
                  'all 0.3s ease',

                textAlign: {
                  xs: 'left',
                  sm: 'left',
                },

                '&:hover': {
                  backgroundColor:
                    'rgba(168,198,159,0.10)',

                  transform:
                    'translateY(-4px)',
                },
              }}
            >

              <Typography
                sx={{
                  fontSize: {
                    xs: '20px',
                    md: '22px',
                  },

                  mb: 1,
                }}
              >
                🌿
              </Typography>

              <Typography
                sx={{
                  color: '#DCD6C4',

                  fontWeight: 700,

                  fontSize: {
                    xs: '14px',
                    md: '15px',
                  },
                }}
              >
                Natural Living
              </Typography>

              <Typography
                sx={{
                  color:
                    'rgba(220,214,196,0.55)',

                  fontSize: {
                    xs: '11px',
                    md: '12px',
                  },

                  mt: 0.5,
                }}
              >
                Create a greener space
              </Typography>

            </Box>


            {/* ================= FEATURE 2 ================= */}

            <Box
              sx={{
                p: {
                  xs: 1.7,
                  sm: 2,
                },

                borderRadius: '12px',

                backgroundColor:
                  'rgba(168,198,159,0.06)',

                border:
                  '1px solid rgba(168,198,159,0.15)',

                transition:
                  'all 0.3s ease',

                textAlign: {
                  xs: 'left',
                  sm: 'left',
                },

                '&:hover': {
                  backgroundColor:
                    'rgba(168,198,159,0.10)',

                  transform:
                    'translateY(-4px)',
                },
              }}
            >

              <Typography
                sx={{
                  fontSize: {
                    xs: '20px',
                    md: '22px',
                  },

                  mb: 1,
                }}
              >
                💧
              </Typography>

              <Typography
                sx={{
                  color: '#DCD6C4',

                  fontWeight: 700,

                  fontSize: {
                    xs: '14px',
                    md: '15px',
                  },
                }}
              >
                Easy Care
              </Typography>

              <Typography
                sx={{
                  color:
                    'rgba(220,214,196,0.55)',

                  fontSize: {
                    xs: '11px',
                    md: '12px',
                  },

                  mt: 0.5,
                }}
              >
                Simple daily solutions
              </Typography>

            </Box>

          </Box>


          {/* ================= BUTTON ================= */}

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#A8C69F',

              color: '#0e200a',

              px: {
                xs: 3,
                sm: 3.5,
                md: 4,
              },

              py: {
                xs: 1.3,
                md: 1.5,
              },

              borderRadius: '8px',

              textTransform: 'none',

              fontWeight: 700,

              fontSize: {
                xs: '14px',
                md: '15px',
              },

              width: {
                xs: '100%',
                sm: 'auto',
              },

              maxWidth: {
                xs: '280px',
                sm: 'none',
              },

              boxShadow:
                '0 10px 30px rgba(168,198,159,0.18)',

              transition:
                'all 0.3s ease',

              '&:hover': {
                backgroundColor: '#DCD6C4',

                transform:
                  'translateY(-4px)',

                boxShadow:
                  '0 15px 35px rgba(168,198,159,0.30)',
              },
            }}
          >
            Explore Leafora
          </Button>

        </Box>

      </Box>

    </Box>
  );
}

export default Info;