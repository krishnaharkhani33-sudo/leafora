import React from 'react';
import { useHistory } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const Header = () => {
  const history = useHistory();

  const pages = ['Home', 'About', 'Plant Care', 'My Plants', 'Help'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState('Home');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    handleCloseNavMenu();

    const routes = {
      Home: '/',
      About: '/about',
      'Plant Care': '/plant-care',
      'My Plants': '/my-plants',
      Help: '/help',
    };

    history.push(routes[page]);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        backgroundColor: '#0e200a',
        boxShadow: 'none',
        border: 'none',
        borderBottom: 'none',
        width: '100%',
        zIndex: 1100,
      }}
    >

      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 1.5,
            sm: 2,
            md: 3,
            lg: 4,
          },
        }}
      >

        <Toolbar
          disableGutters
          sx={{
            minHeight: {
              xs: '60px',
              sm: '64px',
              md: '72px',
            },

            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >

          {/* ================= DESKTOP LOGO ================= */}

          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },

              alignItems: 'center',

              minWidth: {
                md: '180px',
                lg: '220px',
              },

              flexShrink: 0,
            }}
          >

            <LocalFloristIcon
              sx={{
                fontSize: {
                  md: 25,
                  lg: 28,
                },

                color: '#A8C69F',
                mr: 1,
              }}
            />

            <Typography
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,

                letterSpacing: {
                  md: '.2rem',
                  lg: '.3rem',
                },

                fontSize: {
                  md: '18px',
                  lg: '20px',
                },

                color: '#DCD6C4',
                whiteSpace: 'nowrap',
              }}
            >
              LEAFORA
            </Typography>

          </Box>


          {/* ================= MOBILE HEADER ================= */}

          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },

              alignItems: 'center',
              flexGrow: 1,
              minWidth: 0,
            }}
          >

            {/* Hamburger */}

            <IconButton
              size="large"
              aria-label="open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: '#A8C69F',

                p: {
                  xs: 0.7,
                  sm: 1,
                },

                mr: {
                  xs: 0.5,
                  sm: 1,
                },
              }}
            >

              <MenuIcon
                sx={{
                  fontSize: {
                    xs: 25,
                    sm: 28,
                  },
                }}
              />

            </IconButton>


            {/* Mobile Logo */}

            <LocalFloristIcon
              sx={{
                fontSize: {
                  xs: 23,
                  sm: 27,
                },

                color: '#A8C69F',

                mr: {
                  xs: 0.5,
                  sm: 0.7,
                },

                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,

                letterSpacing: {
                  xs: '.08rem',
                  sm: '.15rem',
                },

                fontSize: {
                  xs: '16px',
                  sm: '20px',
                },

                color: '#DCD6C4',
                whiteSpace: 'nowrap',
              }}
            >
              LEAFORA
            </Typography>

          </Box>


          {/* ================= MOBILE MENU ================= */}

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}

            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}

            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}

            keepMounted
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}

            sx={{
              display: {
                xs: 'block',
                md: 'none',
              },

              '& .MuiPaper-root': {
                backgroundColor: '#0e200a',
                color: '#E8D9C4',

                minWidth: {
                  xs: '160px',
                  sm: '190px',
                },

                mt: 1,
              },
            }}
          >

            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => handlePageClick(page)}

                sx={{
                  color:
                    activePage === page
                      ? '#A8C69F'
                      : '#E8D9C4',

                  px: 2.5,
                  py: 1.2,

                  '&:hover': {
                    backgroundColor: '#142c0f',
                    color: '#A8C69F',
                  },
                }}
              >

                <Typography
                  sx={{
                    fontSize: {
                      xs: '14px',
                      sm: '15px',
                    },

                    fontWeight: 500,
                  }}
                >
                  {page}
                </Typography>

              </MenuItem>
            ))}

          </Menu>


          {/* ================= DESKTOP NAV ================= */}

          <Box
            sx={{
              flexGrow: 1,

              display: {
                xs: 'none',
                md: 'flex',
              },

              justifyContent: 'center',
              alignItems: 'center',

              gap: {
                md: 0,
                lg: 0.5,
                xl: 1,
              },

              minWidth: 0,
            }}
          >

            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}

                sx={{
                  my: 2,

                  px: {
                    md: 1,
                    lg: 1.5,
                    xl: 2,
                  },

                  minWidth: 'auto',

                  color:
                    activePage === page
                      ? '#A8C69F'
                      : '#E8D9C4',

                  display: 'block',
                  textTransform: 'none',

                  fontSize: {
                    md: '13px',
                    lg: '14px',
                    xl: '15px',
                  },

                  fontWeight: 500,
                  position: 'relative',
                  whiteSpace: 'nowrap',

                  transition: 'all 0.3s ease',

                  '&:hover': {
                    color: '#A8C69F',
                    backgroundColor: 'transparent',
                  },

                  /* Active underline */

                  '&::after': {
                    content: '""',

                    position: 'absolute',
                    bottom: '5px',
                    left: '50%',

                    width:
                      activePage === page
                        ? '60%'
                        : '0%',

                    height: '2px',

                    backgroundColor: '#A8C69F',

                    transform: 'translateX(-50%)',

                    transition: 'all 0.3s ease',
                  },

                  /* Leaf */

                  '&::before': {
                    content: "'🌿'",

                    position: 'absolute',
                    left: '-3px',
                    top: '50%',

                    fontSize: '10px',

                    opacity:
                      activePage === page
                        ? 1
                        : 0,

                    transform:
                      activePage === page
                        ? 'translateY(-50%) translateX(0)'
                        : 'translateY(-50%) translateX(-5px)',

                    transition: 'all 0.3s ease',
                  },

                  '&:hover::before': {
                    opacity: 1,

                    transform:
                      'translateY(-50%) translateX(0)',
                  },
                }}
              >
                {page}
              </Button>
            ))}

          </Box>


          {/* ================= GET STARTED BUTTON ================= */}

          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,

              ml: {
                xs: 1,
                sm: 1.5,
                md: 2,
                lg: 3,
              },
            }}
          >

            <Button
              variant="contained"
              disableElevation

              sx={{
                minWidth: {
                  xs: '75px',
                  sm: '90px',
                  md: '105px',
                  lg: '110px',
                },

                px: {
                  xs: 1,
                  sm: 1.5,
                  md: 2,
                },

                py: {
                  xs: 0.7,
                  sm: 0.8,
                  md: 1,
                },

                fontSize: {
                  xs: '9px',
                  sm: '10px',
                  md: '11px',
                  lg: '12px',
                },

                fontWeight: 600,

                color: '#DCD6C4',

                backgroundColor: '#0e200a',

                border: '1px solid #1f4a38',
                borderRadius: '6px',

                textTransform: 'uppercase',
                whiteSpace: 'nowrap',

                transition: 'all 0.3s ease',

                '&:hover': {
                  backgroundColor: '#142c0f',
                  borderColor: '#A8C69F',
                  color: '#A8C69F',
                },
              }}
            >
              Get Started
            </Button>

          </Box>

        </Toolbar>

      </Container>

    </AppBar>
  );
};

export default Header;