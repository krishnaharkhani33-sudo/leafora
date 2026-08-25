import React from 'react';

import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';

import bottom1 from '../images/bottom/bottom1.jpg';
import bottom2 from '../images/bottom/bottom2.webp';
import bottom3 from '../images/bottom/bottom3.webp';


const plans = [
  {
    id: 1,
    title: 'Starter Care',
    price: '19.36',
    saveText: 'Perfect for 2–3 plants',
    image: bottom1,
    featured: false,

    features: [
      'Basic Watering Guidance',
      'Light Requirement Tips',
      'Weekly Care Reminders',
      'Plant Health Check',
    ],

    description:
      'Simple care essentials for beginners.',
  },

  {
    id: 2,
    title: 'Complete Plant Care',
    price: '39.47',
    saveText: 'Most Popular • Best for plant lovers',
    image: bottom2,
    featured: true,

    features: [
      'Personalized Care Routine',
      'Smart Watering Guidance',
      'Light & Soil Recommendations',
      'Plant Health Support',
    ],

    description:
      'A complete routine for healthy and happy plants.',
  },

  {
    id: 3,
    title: 'Plant Lover',
    price: '92.36',
    saveText: 'Perfect for a growing plant collection',
    image: bottom3,
    featured: false,

    features: [
      'Advanced Plant Care Tips',
      'Multiple Plant Tracking',
      'Detailed Care Schedule',
      'Priority Plant Guidance',
    ],

    description:
      'For plant lovers with a growing collection.',
  },
];


const Pricing = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#0e200a',
        py: {
          xs: 6,
          sm: 8,
          md: 10,
          lg: 12,
        },
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <Box
        sx={{
          position: 'absolute',

          width: {
            xs: '220px',
            sm: '320px',
            md: '450px',
            lg: '550px',
          },

          height: {
            xs: '220px',
            sm: '320px',
            md: '450px',
            lg: '550px',
          },

          borderRadius: '50%',

          backgroundColor:
            'rgba(168,198,159,0.07)',

          filter: 'blur(100px)',

          top: {
            xs: '-100px',
            md: '-180px',
          },

          right: {
            xs: '-100px',
            md: '-150px',
          },

          pointerEvents: 'none',
        }}
      />


      {/* ================= MAIN CONTAINER ================= */}

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',

          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
            xl: 6,
          },
        }}
      >


        {/* ================= HEADER ================= */}

        <Box
          sx={{
            textAlign: 'center',
            width: '100%',

            maxWidth: {
              xs: '100%',
              sm: '650px',
              md: '700px',
            },

            mx: 'auto',

            mb: {
              xs: 4,
              sm: 5,
              md: 7,
            },
          }}
        >

          {/* SMALL TITLE */}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.7,

              mb: {
                xs: 1,
                sm: 1.5,
              },
            }}
          >

            <YardOutlinedIcon
              sx={{
                color: '#A8C69F',

                fontSize: {
                  xs: 18,
                  sm: 20,
                },
              }}
            />

            <Typography
              sx={{
                color: '#A8C69F',

                fontSize: {
                  xs: '11px',
                  sm: '13px',
                },

                fontWeight: 700,

                letterSpacing: {
                  xs: '2px',
                  sm: '3px',
                },

                textTransform: 'uppercase',
              }}
            >
              Plant Care Plans
            </Typography>

          </Box>


          {/* MAIN TITLE */}

          <Typography
            sx={{
              color: '#DCD6C4',
              fontWeight: 700,

              fontSize: {
                xs: '29px',
                sm: '38px',
                md: '46px',
                lg: '48px',
              },

              lineHeight: 1.15,

              mb: {
                xs: 1.5,
                sm: 2,
              },
            }}
          >
            Choose the Right Care

            <br />

            <Box
              component="span"
              sx={{
                color: '#A8C69F',
              }}
            >
              For Your Plants
            </Box>
          </Typography>


          {/* DESCRIPTION */}

          <Typography
            sx={{
              color:
                'rgba(220,214,196,0.58)',

              fontSize: {
                xs: '13px',
                sm: '14px',
                md: '15px',
              },

              lineHeight: 1.8,

              maxWidth: {
                xs: '100%',
                sm: '580px',
              },

              mx: 'auto',

              px: {
                xs: 1,
                sm: 0,
              },
            }}
          >
            Whether you are caring for your first plant
            or building your own indoor jungle, choose
            a care plan that fits your green lifestyle.
          </Typography>

        </Box>


        {/* ================= PRICING CARDS ================= */}

        <Box
          sx={{
            display: 'grid',

            width: '100%',

            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: 'repeat(3, minmax(0, 1fr))',
            },

            gap: {
              xs: 3,
              sm: 3,
              md: 2.5,
              lg: 3,
            },

            alignItems: 'stretch',

            maxWidth: '1400px',

            mx: 'auto',
          }}
        >

          {plans.map((plan) => {

            const isFeatured = plan.featured;

            return (
              <Card
                key={plan.id}
                elevation={0}
                sx={{
                  width: '100%',
                  minWidth: 0,

                  minHeight: {
                    xs: 'auto',
                    sm: 'auto',
                    md: '650px',
                  },

                  borderRadius: {
                    xs: '18px',
                    sm: '20px',
                    md: '24px',
                  },

                  p: {
                    xs: 1.5,
                    sm: 1.7,
                    md: 2,
                  },

                  boxSizing: 'border-box',

                  backgroundColor:
                    isFeatured
                      ? '#17351b'
                      : '#142b11',

                  border:
                    isFeatured
                      ? '1px solid rgba(168,198,159,0.40)'
                      : '1px solid rgba(168,198,159,0.12)',

                  display: 'flex',
                  flexDirection: 'column',

                  transition:
                    'all 0.35s ease',

                  '&:hover': {
                    transform:
                      'translateY(-8px)',

                    boxShadow:
                      '0 25px 55px rgba(0,0,0,0.40)',
                  },
                }}
              >

                {/* ================= IMAGE ================= */}

                <Box
                  sx={{
                    width: '100%',

                    height: {
                      xs: '200px',
                      sm: '230px',
                      md: '200px',
                      lg: '220px',
                    },

                    borderRadius: {
                      xs: '14px',
                      sm: '16px',
                      md: '18px',
                    },

                    overflow: 'hidden',

                    backgroundColor: '#e8eee4',

                    position: 'relative',
                  }}
                >

                  <CardMedia
                    component="img"
                    image={plan.image}
                    alt={plan.title}
                    sx={{
                      width: '100%',
                      height: '100%',

                      objectFit: 'cover',

                      display: 'block',

                      transition:
                        'transform 0.5s ease',

                      '&:hover': {
                        transform:
                          'scale(1.06)',
                      },
                    }}
                  />

                  {/* IMAGE OVERLAY */}

                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,

                      background:
                        'linear-gradient(to top, rgba(14,32,10,0.35), transparent 55%)',

                      pointerEvents: 'none',
                    }}
                  />

                </Box>


                {/* ================= CONTENT ================= */}

                <CardContent
                  sx={{
                    px: {
                      xs: 0.5,
                      sm: 0.8,
                      md: 1,
                    },

                    pt: {
                      xs: 2,
                      sm: 2.5,
                      md: 3,
                    },

                    pb: 1,

                    textAlign: 'center',

                    display: 'flex',
                    flexDirection: 'column',

                    flexGrow: 1,
                  }}
                >

                  {/* TITLE */}

                  <Typography
                    sx={{
                      color: '#DCD6C4',

                      fontSize: {
                        xs: '19px',
                        sm: '20px',
                        md: '21px',
                      },

                      fontWeight: 700,

                      mb: 1,
                    }}
                  >
                    {plan.title}
                  </Typography>


                  {/* MOST POPULAR */}

                  {isFeatured && (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#0e200a',

                          backgroundColor:
                            '#A8C69F',

                          px: 1.5,
                          py: 0.5,

                          borderRadius: '20px',

                          fontSize: '10px',

                          fontWeight: 800,

                          letterSpacing: '1px',
                        }}
                      >
                        MOST POPULAR
                      </Typography>
                    </Box>
                  )}


                  {/* DESCRIPTION */}

                  <Typography
                    sx={{
                      color:
                        'rgba(220,214,196,0.48)',

                      fontSize: '12px',

                      lineHeight: 1.6,

                      minHeight: {
                        xs: 'auto',
                        md: '38px',
                      },

                      mb: 2,
                    }}
                  >
                    {plan.description}
                  </Typography>


                  {/* ================= FEATURES ================= */}

                  <List
                    sx={{
                      py: 0,
                      mb: 2,
                    }}
                  >

                    {plan.features.map(
                      (feature, index) => (
                        <ListItem
                          key={index}
                          disableGutters
                          sx={{
                            py: {
                              xs: 0.65,
                              sm: 0.7,
                            },
                          }}
                        >

                          <ListItemIcon
                            sx={{
                              minWidth: {
                                xs: 26,
                                sm: 28,
                              },
                            }}
                          >
                            <CheckCircleIcon
                              sx={{
                                fontSize: {
                                  xs: 17,
                                  sm: 18,
                                },

                                color: '#A8C69F',
                              }}
                            />
                          </ListItemIcon>

                          <ListItemText
                            primary={feature}
                            sx={{
                              '& .MuiListItemText-primary': {
                                fontSize: {
                                  xs: '12px',
                                  sm: '13px',
                                },

                                fontWeight: 500,

                                color:
                                  '#A8C69F !important',

                                lineHeight: 1.4,
                              },
                            }}
                          />

                        </ListItem>
                      )
                    )}

                  </List>


                  {/* ================= PRICE ================= */}

                  <Box
                    sx={{
                      display: 'flex',

                      justifyContent: 'center',

                      alignItems: 'baseline',

                      mt: 'auto',

                      mb: {
                        xs: 2,
                        sm: 2.5,
                        md: 3,
                      },
                    }}
                  >

                    <Typography
                      sx={{
                        color: '#A8C69F',

                        fontWeight: 700,

                        fontSize: '18px',

                        mr: 0.5,
                      }}
                    >
                      $
                    </Typography>

                    <Typography
                      sx={{
                        color: '#A8C69F',

                        fontSize: {
                          xs: '36px',
                          sm: '40px',
                          md: '42px',
                        },

                        fontWeight: 800,
                      }}
                    >
                      {plan.price}
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          'rgba(220,214,196,0.40)',

                        fontSize: '12px',

                        ml: 0.5,
                      }}
                    >
                      / month
                    </Typography>

                  </Box>


                  {/* ================= BUTTON ================= */}

                  <Button
                    fullWidth
                    sx={{
                      py: {
                        xs: 1.1,
                        sm: 1.2,
                        md: 1.3,
                      },

                      borderRadius: '10px',

                      textTransform: 'none',

                      fontSize: {
                        xs: '13px',
                        sm: '14px',
                      },

                      fontWeight: 700,

                      backgroundColor:
                        isFeatured
                          ? '#A8C69F'
                          : 'transparent',

                      color:
                        isFeatured
                          ? '#0e200a'
                          : '#A8C69F',

                      border:
                        isFeatured
                          ? 'none'
                          : '1px solid rgba(168,198,159,0.35)',

                      transition:
                        'all 0.3s ease',

                      '&:hover': {
                        backgroundColor:
                          '#DCD6C4',

                        color: '#0e200a',

                        transform:
                          'translateY(-2px)',
                      },
                    }}
                  >
                    Start Care Plan
                  </Button>


                  {/* ================= SAVE TEXT ================= */}

                  <Typography
                    sx={{
                      mt: 1.5,

                      fontSize: {
                        xs: '10px',
                        sm: '11px',
                      },

                      color:
                        'rgba(220,214,196,0.38)',
                    }}
                  >
                    {plan.saveText}
                  </Typography>


                  {/* ================= BOTTOM ICON ================= */}

                  <Box
                    sx={{
                      position: 'relative',

                      height: '45px',

                      mt: 1,
                    }}
                  >

                    <Box
                      sx={{
                        position: 'absolute',

                        right: 0,
                        bottom: 0,

                        width: '38px',
                        height: '38px',

                        borderRadius: '50%',

                        backgroundColor:
                          isFeatured
                            ? '#17351b'
                            : '#142b11',

                        border:
                          '1px solid rgba(168,198,159,0.20)',

                        display: 'flex',

                        alignItems: 'center',
                        justifyContent: 'center',

                        transition:
                          'all 0.3s ease',

                        '&:hover': {
                          transform:
                            'scale(1.08)',

                          borderColor:
                            '#A8C69F',
                        },
                      }}
                    >
                      <YardOutlinedIcon
                        sx={{
                          fontSize: 18,
                          color: '#A8C69F',
                        }}
                      />
                    </Box>

                  </Box>

                </CardContent>

              </Card>
            );
          })}

        </Box>


        {/* ================= BOTTOM TEXT ================= */}

        <Box
          sx={{
            textAlign: 'center',

            mt: {
              xs: 4,
              sm: 5,
              md: 6,
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

              letterSpacing: '0.5px',
            }}
          >
            Simple care. Healthier plants. A greener everyday.
          </Typography>

        </Box>

      </Container>

    </Box>
  );
};

export default Pricing;