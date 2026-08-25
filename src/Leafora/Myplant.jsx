import React from 'react';

import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';

import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MyPlants = () => {

  const plants = [
    {
      name: 'Monstera',
      type: 'Indoor Plant',
      watering: 'Every 5 Days',
      light: 'Bright Indirect',
      nextCare: 'Tomorrow',
    },
    {
      name: 'Snake Plant',
      type: 'Low Maintenance',
      watering: 'Every 10 Days',
      light: 'Low to Bright',
      nextCare: 'In 3 Days',
    },
    {
      name: 'Peace Lily',
      type: 'Flowering Plant',
      watering: 'Every 4 Days',
      light: 'Indirect Light',
      nextCare: 'Today',
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
          backgroundColor: 'rgba(168,198,159,0.05)',
          filter: 'blur(100px)',
          left: '-180px',
          top: '50%',
        }}
      />


      <Container maxWidth="lg">

        {/* ================= SECTION HEADING ================= */}

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
            My Plant Collection
          </Typography>


          <Typography
            sx={{
              color: '#DCD6C4',
              fontWeight: 700,
              fontSize: {
                xs: '34px',
                sm: '42px',
                md: '50px',
              },
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Take Care Of Your
            <br />

            <Box
              component="span"
              sx={{
                color: '#A8C69F',
              }}
            >
              Green Companions.
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
            Keep all your plants organized and never miss
            an important care routine again.
          </Typography>

        </Box>


        {/* ================= PLANT CARDS ================= */}

        <Box
          sx={{
            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },

            gap: 3,
          }}
        >

          {plants.map((plant, index) => (

            <Box
              key={index}
              sx={{
                position: 'relative',

                p: { xs: 3, md: 3.5 },

                borderRadius: '22px',

                backgroundColor:
                  'rgba(168,198,159,0.05)',

                border:
                  '1px solid rgba(168,198,159,0.14)',

                transition: 'all 0.4s ease',

                '&:hover': {
                  transform: 'translateY(-8px)',

                  backgroundColor:
                    'rgba(168,198,159,0.09)',

                  borderColor:
                    'rgba(168,198,159,0.35)',

                  boxShadow:
                    '0 20px 50px rgba(0,0,0,0.25)',
                },
              }}
            >

              {/* ================= PLANT ICON ================= */}

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 3,
                }}
              >

                <Box
                  sx={{
                    width: '58px',
                    height: '58px',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    borderRadius: '16px',

                    backgroundColor:
                      'rgba(168,198,159,0.10)',

                    color: '#A8C69F',
                  }}
                >
                  <LocalFloristIcon
                    sx={{
                      fontSize: '29px',
                    }}
                  />
                </Box>


                <Typography
                  sx={{
                    color:
                      'rgba(168,198,159,0.20)',

                    fontSize: '30px',
                    fontWeight: 700,
                  }}
                >
                  0{index + 1}
                </Typography>

              </Box>


              {/* ================= PLANT NAME ================= */}

              <Typography
                sx={{
                  color: '#DCD6C4',
                  fontSize: '22px',
                  fontWeight: 700,
                  mb: 0.5,
                }}
              >
                {plant.name}
              </Typography>


              <Typography
                sx={{
                  color:
                    'rgba(168,198,159,0.65)',

                  fontSize: '13px',
                  mb: 3,
                }}
              >
                {plant.type}
              </Typography>


              {/* ================= PLANT DETAILS ================= */}

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >

                {/* WATERING */}

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >

                  <WaterDropOutlinedIcon
                    sx={{
                      color: '#A8C69F',
                      fontSize: '21px',
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color:
                          'rgba(220,214,196,0.45)',
                        fontSize: '11px',
                      }}
                    >
                      WATERING
                    </Typography>

                    <Typography
                      sx={{
                        color: '#DCD6C4',
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      {plant.watering}
                    </Typography>
                  </Box>

                </Box>


                {/* LIGHT */}

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >

                  <WbSunnyOutlinedIcon
                    sx={{
                      color: '#A8C69F',
                      fontSize: '21px',
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color:
                          'rgba(220,214,196,0.45)',
                        fontSize: '11px',
                      }}
                    >
                      LIGHT
                    </Typography>

                    <Typography
                      sx={{
                        color: '#DCD6C4',
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      {plant.light}
                    </Typography>
                  </Box>

                </Box>


                {/* NEXT CARE */}

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >

                  <CalendarTodayOutlinedIcon
                    sx={{
                      color: '#A8C69F',
                      fontSize: '20px',
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color:
                          'rgba(220,214,196,0.45)',
                        fontSize: '11px',
                      }}
                    >
                      NEXT CARE
                    </Typography>

                    <Typography
                      sx={{
                        color: '#DCD6C4',
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      {plant.nextCare}
                    </Typography>
                  </Box>

                </Box>

              </Box>


              {/* ================= VIEW DETAILS BUTTON ================= */}

              <Button
                fullWidth
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: 3,

                  py: 1.2,

                  borderRadius: '50px',

                  border:
                    '1px solid rgba(168,198,159,0.20)',

                  color: '#A8C69F',

                  fontSize: '13px',

                  fontWeight: 600,

                  textTransform: 'none',

                  '&:hover': {
                    backgroundColor:
                      '#A8C69F',

                    color: '#0e200a',

                    borderColor:
                      '#A8C69F',
                  },

                  transition:
                    'all 0.3s ease',
                }}
              >
                View Plant Details
              </Button>

            </Box>

          ))}

        </Box>


        {/* ================= ADD PLANT BUTTON ================= */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 5,
          }}
        >

          <Button
            variant="contained"
            startIcon={<LocalFloristIcon />}
            sx={{
              px: 4,
              py: 1.5,

              borderRadius: '50px',

              backgroundColor: '#A8C69F',

              color: '#0e200a',

              fontSize: '14px',

              fontWeight: 700,

              textTransform: 'none',

              boxShadow: 'none',

              '&:hover': {
                backgroundColor: '#DCD6C4',

                boxShadow:
                  '0 10px 30px rgba(168,198,159,0.20)',

                transform:
                  'translateY(-2px)',
              },

              transition:
                'all 0.3s ease',
            }}
          >
            Add New Plant
          </Button>

        </Box>

      </Container>

    </Box>
  );
};

export default MyPlants;