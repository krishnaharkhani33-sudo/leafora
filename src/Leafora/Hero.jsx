import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import heroimg from '../images/hero/heroimg.avif';

function Hero() {
  return (
    <Box
      sx={{
        minHeight: {
          xs: 'calc(100vh - 60px)',
          sm: 'calc(100vh - 64px)',
          md: 'calc(100vh - 72px)',
        },

        position: 'relative',

        backgroundImage: `url(${heroimg})`,
        backgroundSize: 'cover',
        backgroundPosition: {
          xs: 'center',
          sm: 'center',
          md: 'center',
        },
        backgroundRepeat: 'no-repeat',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        px: {
          xs: 2,
          sm: 3,
          md: 6,
          lg: 8,
        },

        py: {
          xs: 5,
          sm: 6,
          md: 4,
        },

        overflow: 'hidden',
      }}
    >

      {/* ================= OVERLAY ================= */}

      <Box
        sx={{
          position: 'absolute',
          inset: 0,

          backgroundColor: {
            xs: 'rgba(14, 32, 10, 0.78)',
            md: 'rgba(14, 32, 10, 0.72)',
          },

          zIndex: 1,
        }}
      />


      {/* ================= HERO CONTENT ================= */}

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,

          width: '100%',

          maxWidth: {
            xs: '100%',
            sm: '700px',
            md: '1100px',
          },

          textAlign: 'center',

          mx: 'auto',
        }}
      >

        {/* ================= WELCOME TEXT ================= */}

        <Typography
          sx={{
            color: '#A8C69F',

            fontSize: {
              xs: '11px',
              sm: '13px',
              md: '16px',
            },

            fontWeight: 600,

            letterSpacing: {
              xs: '1.5px',
              sm: '2px',
              md: '3px',
            },

            mb: {
              xs: 1.5,
              sm: 2,
              md: 2,
            },

            whiteSpace: {
              xs: 'normal',
              sm: 'nowrap',
            },
          }}
        >
          🌿 WELCOME TO LEAFORA
        </Typography>


        {/* ================= MAIN HEADING ================= */}

        <Typography
          sx={{
            color: '#DCD6C4',

            fontSize: {
              xs: '38px',
              sm: '52px',
              md: '72px',
              lg: '78px',
            },

            fontWeight: 700,

            lineHeight: {
              xs: 1.05,
              sm: 1.08,
              md: 1.1,
            },

            mb: {
              xs: 1,
              sm: 1.5,
              md: 2,
            },
          }}
        >
          Grow Better.
        </Typography>


        {/* ================= SECOND HEADING ================= */}

        <Typography
          sx={{
            color: '#A8C69F',

            fontSize: {
              xs: '34px',
              sm: '48px',
              md: '68px',
              lg: '74px',
            },

            fontWeight: 700,

            lineHeight: {
              xs: 1.05,
              sm: 1.08,
              md: 1.1,
            },

            mb: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          Live Greener.
        </Typography>


        {/* ================= DESCRIPTION ================= */}

        <Typography
          sx={{
            color: '#DCD6C4',

            fontSize: {
              xs: '13px',
              sm: '15px',
              md: '18px',
            },

            lineHeight: {
              xs: 1.6,
              sm: 1.7,
              md: 1.7,
            },

            maxWidth: {
              xs: '320px',
              sm: '550px',
              md: '650px',
            },

            mx: 'auto',

            mb: {
              xs: 3,
              sm: 3.5,
              md: 4,
            },

            px: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          Simple and smart plant care solutions
          for every plant lover.
        </Typography>


        {/* ================= BUTTONS ================= */}

        <Box
          sx={{
            display: 'flex',

            justifyContent: 'center',

            alignItems: 'center',

            gap: {
              xs: 1.5,
              sm: 2,
            },

            flexDirection: {
              xs: 'column',
              sm: 'row',
            },

            width: '100%',
          }}
        >

          {/* GET STARTED */}

          <Button
            variant="contained"

            sx={{
              width: {
                xs: '100%',
                sm: 'auto',
              },

              maxWidth: {
                xs: '220px',
                sm: 'none',
              },

              backgroundColor: '#A8C69F',

              color: '#0e200a',

              px: {
                xs: 3,
                sm: 3.5,
                md: 4,
              },

              py: {
                xs: 1.1,
                sm: 1.2,
                md: 1.3,
              },

              borderRadius: '8px',

              textTransform: 'none',

              fontWeight: 600,

              fontSize: {
                xs: '13px',
                sm: '14px',
                md: '15px',
              },

              transition: 'all 0.3s ease',

              '&:hover': {
                backgroundColor: '#DCD6C4',

                transform: 'translateY(-2px)',

                boxShadow: '0 6px 18px rgba(168, 198, 159, 0.25)',
              },
            }}
          >
            Get Started
          </Button>


          {/* EXPLORE PLANTS */}

          <Button
            variant="outlined"

            sx={{
              width: {
                xs: '100%',
                sm: 'auto',
              },

              maxWidth: {
                xs: '220px',
                sm: 'none',
              },

              color: '#A8C69F',

              borderColor: '#A8C69F',

              px: {
                xs: 3,
                sm: 3.5,
                md: 4,
              },

              py: {
                xs: 1.1,
                sm: 1.2,
                md: 1.3,
              },

              borderRadius: '8px',

              textTransform: 'none',

              fontWeight: 600,

              fontSize: {
                xs: '13px',
                sm: '14px',
                md: '15px',
              },

              transition: 'all 0.3s ease',

              '&:hover': {
                color: '#DCD6C4',

                borderColor: '#DCD6C4',

                backgroundColor: 'rgba(220, 214, 196, 0.05)',

                transform: 'translateY(-2px)',
              },
            }}
          >
            Explore Plants
          </Button>

        </Box>

      </Box>
    </Box>
  );
}

export default Hero;