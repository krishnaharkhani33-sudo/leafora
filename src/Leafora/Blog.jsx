import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import HealingIcon from '@mui/icons-material/Healing';

import bolg from '../images/bolg/bolg.avif';

const PlantCareBlog = () => {

  const smallBlogs = [
    {
      icon: <LocalFloristIcon />,
      title: 'Best Indoor Plants',
      description:
        'Beautiful and easy-care plants for your indoor space.',
    },
    {
      icon: <HealingIcon />,
      title: 'Signs Your Plant Needs Help',
      description:
        'Learn the common signs that your plant needs attention.',
    },
    {
      icon: <WaterDropIcon />,
      title: 'How to Keep Plants Healthy',
      description:
        'Simple habits for healthier and happier plants.',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box',

        backgroundColor: '#0e200a',

        position: 'relative',
        overflow: 'hidden',

        px: {
          xs: 2,
          sm: 3,
          md: 5,
          lg: 7,
          xl: 10,
        },

        py: {
          xs: 5,
          sm: 6,
          md: 8,
          lg: 10,
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
            md: '450px',
            lg: '500px',
          },

          height: {
            xs: '220px',
            sm: '300px',
            md: '450px',
            lg: '500px',
          },

          borderRadius: '50%',

          backgroundColor:
            'rgba(168,198,159,0.08)',

          filter: 'blur(100px)',

          top: {
            xs: '-100px',
            md: '-150px',
          },

          right: {
            xs: '-100px',
            md: '-150px',
          },
        }}
      />


      {/* ================= MAIN CONTAINER ================= */}

      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >


        {/* ================================================= */}
        {/*                    TOP HEADING                    */}
        {/* ================================================= */}

        <Box
          sx={{
            width: '100%',

            display: 'flex',

            flexDirection: 'column',

            alignItems: 'center',

            justifyContent: 'center',

            textAlign: 'center',

            mb: {
              xs: 4,
              sm: 5,
              md: 6,
            },

            gap: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >

          {/* ================= SMALL TITLE ================= */}

          <Typography
            sx={{
              color: '#A8C69F',

              fontSize: {
                xs: '11px',
                sm: '13px',
                md: '14px',
              },

              fontWeight: 700,

              letterSpacing: {
                xs: '2px',
                sm: '3px',
                md: '4px',
              },

              textAlign: 'center',
            }}
          >
            FROM OUR JOURNAL
          </Typography>


          {/* ================= MAIN TITLE ================= */}

          <Typography
            sx={{
              color: '#DCD6C4',

              fontSize: {
                xs: '30px',
                sm: '38px',
                md: '48px',
                lg: '52px',
              },

              fontWeight: 700,

              lineHeight: 1.1,

              textAlign: 'center',

              width: '100%',
            }}
          >
            Little Tips,
            <br />

            <Box
              component="span"
              sx={{
                color: '#A8C69F',
              }}
            >
              Big Growth.
            </Box>
          </Typography>


          {/* ================= DESCRIPTION ================= */}

          <Typography
            sx={{
              width: '100%',

              maxWidth: {
                xs: '100%',
                sm: '600px',
                md: '680px',
              },

              color:
                'rgba(220,214,196,0.70)',

              fontSize: {
                xs: '13px',
                sm: '14px',
                md: '15px',
              },

              lineHeight: 1.8,

              textAlign: 'center',

              mx: 'auto',
            }}
          >
            Explore simple plant care knowledge, helpful guides
            and practical tips designed to make plant parenting
            easier and more meaningful.
          </Typography>

        </Box>


        {/* ================================================= */}
        {/*                 MAIN BLOG LAYOUT                  */}
        {/* ================================================= */}

        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: '1.15fr 0.85fr',
            },

            gap: {
              xs: 2.5,
              sm: 3,
              md: 4,
            },

            width: '100%',
          }}
        >


          {/* ================================================= */}
          {/*              FEATURED BLOG CARD                   */}
          {/* ================================================= */}

          <Box
            sx={{
              position: 'relative',

              width: '100%',

              minHeight: {
                xs: '400px',
                sm: '450px',
                md: '500px',
                lg: '520px',
              },

              borderRadius: {
                xs: '18px',
                sm: '22px',
                md: '28px',
              },

              overflow: 'hidden',

              border:
                '1px solid rgba(168,198,159,0.20)',

              boxShadow:
                '0 25px 60px rgba(0,0,0,0.35)',

              transition:
                'all 0.35s ease',

              '&:hover': {
                transform: {
                  xs: 'none',
                  md: 'translateY(-6px)',
                },
              },

              '&:hover img': {
                transform: {
                  xs: 'none',
                  md: 'scale(1.06)',
                },
              },
            }}
          >


            {/* ================= PLANT IMAGE ================= */}

            <Box
              component="img"
              src={bolg}
              alt="Plant care"
              sx={{
                position: 'absolute',

                inset: 0,

                width: '100%',

                height: '100%',

                objectFit: 'cover',

                objectPosition: 'center',

                transition:
                  'transform 0.6s ease',
              }}
            />


            {/* ================= IMAGE OVERLAY ================= */}

            <Box
              sx={{
                position: 'absolute',

                inset: 0,

                background:
                  'linear-gradient(to top, rgba(14,32,10,0.96) 5%, rgba(14,32,10,0.55) 48%, rgba(14,32,10,0.10) 100%)',
              }}
            />


            {/* ================= WATER ICON ================= */}

            <Box
              sx={{
                position: 'absolute',

                top: {
                  xs: 18,
                  sm: 24,
                  md: 30,
                },

                left: {
                  xs: 18,
                  sm: 24,
                  md: 30,
                },

                width: {
                  xs: 48,
                  sm: 55,
                  md: 60,
                },

                height: {
                  xs: 48,
                  sm: 55,
                  md: 60,
                },

                borderRadius: {
                  xs: '13px',
                  md: '18px',
                },

                backgroundColor:
                  'rgba(14,32,10,0.70)',

                border:
                  '1px solid rgba(168,198,159,0.30)',

                backdropFilter:
                  'blur(10px)',

                display: 'flex',

                alignItems: 'center',

                justifyContent: 'center',

                color: '#A8C69F',

                '& svg': {
                  fontSize: {
                    xs: 23,
                    sm: 26,
                    md: 29,
                  },
                },
              }}
            >
              <WaterDropIcon />
            </Box>


            {/* ================================================= */}
            {/*             FEATURED BLOG CONTENT                */}
            {/* ================================================= */}

            <Box
              sx={{
                position: 'absolute',

                left: {
                  xs: 18,
                  sm: 25,
                  md: 40,
                },

                right: {
                  xs: 18,
                  sm: 25,
                  md: 40,
                },

                bottom: {
                  xs: 20,
                  sm: 28,
                  md: 40,
                },

                zIndex: 2,
              }}
            >


              {/* ================= FEATURED TITLE ================= */}

              <Typography
                sx={{
                  color: '#A8C69F',

                  fontSize: {
                    xs: '10px',
                    sm: '12px',
                    md: '13px',
                  },

                  fontWeight: 700,

                  letterSpacing: {
                    xs: '1.5px',
                    md: '2px',
                  },

                  mb: 1.2,
                }}
              >
                FEATURED GUIDE
              </Typography>


              {/* ================= FEATURED HEADING ================= */}

              <Typography
                sx={{
                  color: '#DCD6C4',

                  fontSize: {
                    xs: '23px',
                    sm: '28px',
                    md: '36px',
                    lg: '38px',
                  },

                  fontWeight: 700,

                  lineHeight: 1.2,

                  mb: 1.5,
                }}
              >
                How Often Should You Water Your Plants?
              </Typography>


              {/* ================= FEATURED DESCRIPTION ================= */}

              <Typography
                sx={{
                  color:
                    'rgba(220,214,196,0.70)',

                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  },

                  lineHeight: 1.7,

                  maxWidth: '520px',

                  mb: 2.2,
                }}
              >
                Find the perfect watering routine and learn
                how to understand what your plants really need.
              </Typography>


              {/* ================= READ GUIDE BUTTON ================= */}

              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: '#0e200a',

                  backgroundColor: '#A8C69F',

                  borderRadius: '8px',

                  px: {
                    xs: 1.8,
                    sm: 2.2,
                    md: 2.5,
                  },

                  py: {
                    xs: 0.9,
                    sm: 1,
                    md: 1.2,
                  },

                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  },

                  textTransform: 'none',

                  fontWeight: 700,

                  transition:
                    'all 0.3s ease',

                  '&:hover': {
                    backgroundColor: '#DCD6C4',

                    transform:
                      'translateY(-3px)',
                  },

                  '& .MuiButton-endIcon': {
                    transition:
                      'transform 0.3s ease',
                  },

                  '&:hover .MuiButton-endIcon': {
                    transform:
                      'translateX(5px)',
                  },
                }}
              >
                Read Guide
              </Button>

            </Box>

          </Box>


          {/* ================================================= */}
          {/*                    SMALL BLOGS                   */}
          {/* ================================================= */}

          <Box
            sx={{
              display: 'flex',

              flexDirection: 'column',

              gap: {
                xs: 1.5,
                sm: 2,
              },

              width: '100%',
            }}
          >

            {smallBlogs.map((blog, index) => (

              <Box
                key={index}
                sx={{
                  width: '100%',

                  boxSizing: 'border-box',

                  backgroundColor:
                    'rgba(168,198,159,0.06)',

                  borderRadius: {
                    xs: '15px',
                    sm: '18px',
                    md: '20px',
                  },

                  p: {
                    xs: 1.8,
                    sm: 2.5,
                    md: 3,
                  },

                  minHeight: {
                    xs: '115px',
                    sm: '130px',
                    md: '145px',
                  },

                  display: 'flex',

                  alignItems: 'center',

                  gap: {
                    xs: 1.5,
                    sm: 2,
                    md: 2.5,
                  },

                  border:
                    '1px solid rgba(168,198,159,0.15)',

                  transition:
                    'all 0.3s ease',

                  '&:hover': {
                    backgroundColor:
                      'rgba(168,198,159,0.10)',

                    borderColor:
                      'rgba(168,198,159,0.30)',

                    transform: {
                      xs: 'none',
                      md: 'translateX(6px)',
                    },

                    boxShadow:
                      '0 15px 35px rgba(0,0,0,0.20)',
                  },
                }}
              >


                {/* ================= ICON ================= */}

                <Box
                  sx={{
                    minWidth: {
                      xs: 42,
                      sm: 48,
                      md: 54,
                    },

                    width: {
                      xs: 42,
                      sm: 48,
                      md: 54,
                    },

                    height: {
                      xs: 42,
                      sm: 48,
                      md: 54,
                    },

                    borderRadius: {
                      xs: '11px',
                      md: '15px',
                    },

                    backgroundColor:
                      'rgba(168,198,159,0.10)',

                    border:
                      '1px solid rgba(168,198,159,0.15)',

                    color: '#A8C69F',

                    display: 'flex',

                    alignItems: 'center',

                    justifyContent: 'center',

                    '& svg': {
                      fontSize: {
                        xs: 20,
                        sm: 22,
                        md: 25,
                      },
                    },
                  }}
                >
                  {blog.icon}
                </Box>


                {/* ================= BLOG CONTENT ================= */}

                <Box
                  sx={{
                    flexGrow: 1,

                    minWidth: 0,
                  }}
                >

                  <Typography
                    sx={{
                      color: '#DCD6C4',

                      fontSize: {
                        xs: '14px',
                        sm: '16px',
                        md: '18px',
                      },

                      fontWeight: 700,

                      mb: 0.7,

                      lineHeight: 1.3,
                    }}
                  >
                    {blog.title}
                  </Typography>


                  <Typography
                    sx={{
                      color:
                        'rgba(220,214,196,0.55)',

                      fontSize: {
                        xs: '11px',
                        sm: '12px',
                        md: '13px',
                      },

                      lineHeight: 1.6,
                    }}
                  >
                    {blog.description}
                  </Typography>

                </Box>


                {/* ================= ARROW ================= */}

                <ArrowForwardIcon
                  sx={{
                    color: '#A8C69F',

                    fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 22,
                    },

                    flexShrink: 0,
                  }}
                />

              </Box>

            ))}

          </Box>

        </Box>

      </Container>

    </Box>
  );
};

export default PlantCareBlog;