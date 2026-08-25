import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import collection1 from '../images/collection/collection1.jpg';
import imges2 from '../images/collection/imgs2.jpg';
import imges3 from '../images/collection/imges3.webp';
import imges4 from '../images/collection/imges4.webp';
import imges5 from '../images/collection/imges5.avif';
import imges6 from '../images/collection/imges6.jpg';

function PlantSlider() {

  const plants = [
    {
      image:collection1,
      name: 'Snake Plant',
      price: '$24.99',
    },
    {
      image:
        imges2,
      name: 'ZZ Plant',
      price: '$22.99',
    },
    {
      image:
        imges3,
      name: 'Pothos',
      price: '$19.99',
    },
    {
      image:
        imges4,
      name: 'Peace Lily',
      price: '$26.99',
    },
    {
      image:
        imges5,
      name: 'Rubber Plant',
      price: '$29.99',
    },
    {
      image:
        imges6,
      name: 'Fiddle Leaf',
      price: '$34.99',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#0e200a',
        py: {
          xs: 7,
          md: 10,
        },
        overflow: 'hidden',
      }}
    >

      {/* ================= INTRO ================= */}

      <Box
        sx={{
          maxWidth: '900px',
          mx: 'auto',

          px: {
            xs: 3,
            md: 4,
          },

          textAlign: 'center',

          mb: {
            xs: 7,
            md: 9,
          },
        }}
      >

        <Typography
          sx={{
            color: '#A8C69F',

            fontSize: {
              xs: '11px',
              md: '13px',
            },

            fontWeight: 700,

            letterSpacing: '4px',

            mb: 2,
          }}
        >
          BRING NATURE HOME
        </Typography>


        <Typography
          sx={{
            color: '#DCD6C4',

            fontSize: {
              xs: '34px',
              sm: '45px',
              md: '58px',
            },

            fontWeight: 700,

            lineHeight: 1.1,

            mb: 2,
          }}
        >
          Find Your
          <Box
            component="span"
            sx={{
              color: '#A8C69F',

              display: {
                xs: 'block',
                sm: 'inline',
              },

              ml: {
                xs: 0,
                sm: 1.5,
              },
            }}
          >
            Perfect Green Companion.
          </Box>
        </Typography>


        <Typography
          sx={{
            color:
              'rgba(220,214,196,0.65)',

            fontSize: {
              xs: '14px',
              md: '16px',
            },

            lineHeight: 1.8,

            maxWidth: '650px',

            mx: 'auto',

            mb: 3,
          }}
        >
          Discover beautiful plants carefully selected
          to bring freshness, natural beauty and a
          peaceful feeling into your everyday space.
        </Typography>


        {/* SMALL INFO */}

        <Box
          sx={{
            display: 'flex',

            justifyContent: 'center',

            alignItems: 'center',

            flexWrap: 'wrap',

            gap: {
              xs: 1.5,
              md: 3,
            },
          }}
        >

          <Typography
            sx={{
              color: '#A8C69F',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            🌿 Easy Care
          </Typography>

          <Box
            sx={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: '#A8C69F',
            }}
          />

          <Typography
            sx={{
              color: '#A8C69F',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            🌱 Fresh Living
          </Typography>

          <Box
            sx={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: '#A8C69F',
            }}
          />

          <Typography
            sx={{
              color: '#A8C69F',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            ✨ Natural Beauty
          </Typography>

        </Box>

      </Box>


      {/* ================= BEST SELLERS ================= */}

      <Box
        sx={{
          maxWidth: '850px',

          mx: 'auto',

          px: {
            xs: 2,
            md: 4,
          },

          textAlign: 'center',

          mb: {
            xs: 4,
            md: 5,
          },
        }}
      >

        <Typography
          sx={{
            color: '#A8C69F',

            fontSize: '12px',

            fontWeight: 700,

            letterSpacing: '3px',

            mb: 1.2,
          }}
        >
          LEAFORA COLLECTION
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

            lineHeight: 1.2,

            mb: 1.5,
          }}
        >
          Best Sellers
        </Typography>


        <Typography
          sx={{
            color:
              'rgba(220,214,196,0.60)',

            fontSize: {
              xs: '13px',
              md: '15px',
            },

            lineHeight: 1.7,

            maxWidth: '580px',

            mx: 'auto',
          }}
        >
          Discover our most loved plants, carefully
          selected to bring freshness and natural
          beauty into your space.
        </Typography>

      </Box>


      {/* ================= SLIDER ================= */}

      <Box
        sx={{
          width: '100%',

          overflow: 'hidden',

          '&:hover .plant-track': {
            animationPlayState: 'paused',
          },
        }}
      >

        <Box
          className="plant-track"
          sx={{
            display: 'flex',

            gap: {
              xs: 2,
              md: 3,
            },

            width: 'max-content',

            animation:
              'plantSlider 22s linear infinite',

            '@keyframes plantSlider': {

              '0%': {
                transform: 'translateX(0)',
              },

              '100%': {
                transform: 'translateX(-50%)',
              },

            },
          }}
        >

          {/* FIRST SET */}

          {plants.map((plant, index) => (

            <PlantCard
              key={`first-${index}`}
              plant={plant}
            />

          ))}


          {/* SECOND SET */}

          {plants.map((plant, index) => (

            <PlantCard
              key={`second-${index}`}
              plant={plant}
            />

          ))}

        </Box>

      </Box>

    </Box>
  );
}


/* ================================================= */
/* PLANT CARD */
/* ================================================= */

function PlantCard({ plant }) {

  return (
    <Box
      sx={{
        position: 'relative',

        width: {
          xs: '260px',
          sm: '280px',
          md: '340px',
        },

        height: {
          xs: '350px',
          sm: '370px',
          md: '410px',
        },

        flexShrink: 0,

        borderRadius: {
          xs: '16px',
          md: '20px',
        },

        overflow: 'hidden',

        backgroundColor:
          'rgba(168,198,159,0.07)',

        border:
          '1px solid rgba(168,198,159,0.18)',

        transition:
          'all 0.35s ease',

        '&:hover': {
          borderColor: '#A8C69F',

          boxShadow:
            '0 20px 45px rgba(0,0,0,0.35)',

          transform:
            'translateY(-6px)',
        },

        '&:hover .plant-image': {
          transform: 'scale(1.08)',
        },
      }}
    >

      {/* IMAGE */}

      <Box
        sx={{
          position: 'relative',

          height: '75%',

          overflow: 'hidden',
        }}
      >

        <Box
          component="img"
          className="plant-image"
          src={plant.image}
          alt={plant.name}
          sx={{
            width: '100%',

            height: '100%',

            objectFit: 'cover',

            display: 'block',

            transition:
              'transform 0.6s ease',
          }}
        />


        {/* OVERLAY */}

        <Box
          sx={{
            position: 'absolute',

            inset: 0,

            background:
              'linear-gradient(to top, rgba(14,32,10,0.70), transparent 55%)',
          }}
        />


        {/* HEART */}

        <Box
          sx={{
            position: 'absolute',

            top: 12,

            right: 12,

            width: 36,

            height: 36,

            borderRadius: '50%',

            display: 'flex',

            alignItems: 'center',

            justifyContent: 'center',

            backgroundColor:
              'rgba(14,32,10,0.65)',

            backdropFilter:
              'blur(8px)',

            cursor: 'pointer',

            transition:
              'all 0.3s ease',

            '&:hover': {
              backgroundColor: '#A8C69F',

              '& svg': {
                color: '#0e200a',
              },
            },
          }}
        >

          <FavoriteBorderIcon
            sx={{
              color: '#DCD6C4',

              fontSize: 19,
            }}
          />

        </Box>

      </Box>


      {/* PRODUCT INFO */}

      <Box
        sx={{
          height: '25%',

          px: 2,

          display: 'flex',

          alignItems: 'center',

          justifyContent:
            'space-between',
        }}
      >

        <Box>

          <Typography
            sx={{
              color: '#DCD6C4',

              fontSize: {
                xs: '14px',
                md: '16px',
              },

              fontWeight: 700,

              mb: 0.5,
            }}
          >
            {plant.name}
          </Typography>

          <Typography
            sx={{
              color: '#A8C69F',

              fontSize: '13px',

              fontWeight: 600,
            }}
          >
            {plant.price}
          </Typography>

        </Box>


        {/* BUY BUTTON */}

        <Button
          startIcon={
            <ShoppingCartOutlinedIcon
              sx={{
                fontSize:
                  '15px !important',
              }}
            />
          }
          sx={{
            minWidth: 'auto',

            color: '#DCD6C4',

            border:
              '1px solid rgba(168,198,159,0.25)',

            borderRadius: '7px',

            px: {
              xs: 1,
              md: 1.5,
            },

            py: 0.7,

            fontSize: '11px',

            textTransform: 'none',

            transition:
              'all 0.3s ease',

            '&:hover': {
              backgroundColor:
                '#A8C69F',

              color: '#0e200a',

              borderColor:
                '#A8C69F',
            },
          }}
        >
          Buy Now
        </Button>

      </Box>

    </Box>
  );
}

export default PlantSlider;