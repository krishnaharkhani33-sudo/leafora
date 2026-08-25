import React from 'react';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';

import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GrassIcon from '@mui/icons-material/Grass';
import SpaIcon from '@mui/icons-material/Spa';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ContentCutIcon from '@mui/icons-material/ContentCut';


const CareSection = () => {

  const careItems = [
    {
      icon: <WaterDropIcon />,
      title: 'Watering',
      text: 'Give your plants the right amount of water.',
    },
    {
      icon: <WbSunnyIcon />,
      title: 'Sunlight',
      text: 'Find the perfect light for healthy growth.',
    },
    {
      icon: <GrassIcon />,
      title: 'Soil',
      text: 'Choose the right soil for your plants.',
    },
    {
      icon: <SpaIcon />,
      title: 'Fertilizer',
      text: 'Provide essential nutrients for growth.',
    },
    {
      icon: <LocalFloristIcon />,
      title: 'Repotting',
      text: 'Know when your plant needs a new home.',
    },
    {
      icon: <ContentCutIcon />,
      title: 'Pruning',
      text: 'Keep your plants healthy and beautiful.',
    },
  ];


  return (

    <Box
      sx={{
        backgroundColor: '#0e200a',
        py: { xs: 7, md: 10 },
      }}
    >

      <Container maxWidth="lg">

        {/* Heading */}

        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
          }}
        >

          <Typography
            sx={{
              color: '#A8C69F',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Care For Your Plants
          </Typography>


          <Typography
            variant="h3"
            sx={{
              color: '#DCD6C4',
              fontWeight: 700,
              fontSize: {
                xs: '30px',
                sm: '36px',
                md: '44px',
              },
              mb: 2,
            }}
          >
            Everything your plants need to thrive
          </Typography>


          <Typography
            sx={{
              color: '#B8C2B2',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '16px',
              lineHeight: 1.7,
            }}
          >
            Simple and practical plant care guidance to help
            your plants grow healthier and happier.
          </Typography>

        </Box>


        {/* Cards */}

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

          {careItems.map((item) => (

            <Card
              key={item.title}
              elevation={0}
              sx={{
                backgroundColor: '#142b10',
                borderRadius: '20px',
                border: '1px solid #1f4a38',
                transition: 'all 0.3s ease',

                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: '#A8C69F',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.25)',
                },
              }}
            >

              <CardContent
                sx={{
                  p: 4,
                  textAlign: 'center',
                }}
              >

                {/* Icon */}

                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: '16px',

                    backgroundColor: '#1f4a38',
                    color: '#A8C69F',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    mx: 'auto',
                    mb: 2,

                    '& svg': {
                      fontSize: 30,
                    },
                  }}
                >
                  {item.icon}
                </Box>


                {/* Title */}

                <Typography
                  variant="h6"
                  sx={{
                    color: '#DCD6C4',
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>


                {/* Description */}

                <Typography
                  sx={{
                    color: '#B8C2B2',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    mb: 2.5,
                  }}
                >
                  {item.text}
                </Typography>


                {/* Button */}

                <Button
                  sx={{
                    color: '#A8C69F',
                    textTransform: 'none',
                    fontWeight: 600,

                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#DCD6C4',
                    },
                  }}
                >
                  Learn More →
                </Button>

              </CardContent>

            </Card>

          ))}

        </Box>

      </Container>

    </Box>
  );
};

export default CareSection;