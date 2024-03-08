/* eslint-disable no-unused-vars */
// Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#292929',
  boxShadow: 'none',
  height: '64px',
});

const CustomTypography = styled(Typography)({
  fontFamily: 'Arial, sans-serif',
  fontSize: '1.8rem',
  fontWeight: 600,
  letterSpacing: '1px',
  textDecoration: 'none',
  color: '#FFFFFF',
  '&:hover': {
    color: '#CCCCCC',
  },
});

const Navbar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <CustomAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', height: '100%' }}>
        <Typography variant="h6" component="div">
          <CustomTypography component={Link} to="/">
            Bharath
          </CustomTypography>
        </Typography>
        {isMobile ? (
          <div>
            <IconButton
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem
                component={Link}
                to="/"
                selected={location.pathname === '/projects'}
                onClick={handleMenuClose}
              >
                About
              </MenuItem>
              <MenuItem
                component={Link}
                to="/projects"
                selected={location.pathname === '/projects'}
                onClick={handleMenuClose}
              >
                Projects
              </MenuItem>
              <MenuItem
                component={Link}
                to="/skills"
                selected={location.pathname === '/skills'}
                onClick={handleMenuClose}
              >
                Skills
              </MenuItem>
              <MenuItem
                component={Link}
                to="/testimonials"
                selected={location.pathname === '/testimonials'}
                onClick={handleMenuClose}
              >
                Testimonials
              </MenuItem>
              <MenuItem
                component={Link}
                to="/contact"
                selected={location.pathname === '/contact'}
                onClick={handleMenuClose}
              >
                Contact
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
            <li>
                <MenuItem
                  component={Link}
                  to="/"
                  selected={location.pathname === '/'}
                  sx={{ color: location.pathname === '/' ? '#FFFFFF' : '#CCCCCC', backgroundColor: 'transparent' }}
                >
                  About
                </MenuItem>
              </li>
              <li>
                <MenuItem
                  component={Link}
                  to="/projects"
                  selected={location.pathname === '/projects'}
                  sx={{ color: location.pathname === '/projects' ? '#FFFFFF' : '#CCCCCC', backgroundColor: 'transparent' }}
                >
                  Projects
                </MenuItem>
              </li>
              <li>
                <MenuItem
                  component={Link}
                  to="/skills"
                  selected={location.pathname === '/skills'}
                  sx={{ color: location.pathname === '/skills' ? '#FFFFFF' : '#CCCCCC', backgroundColor: 'transparent' }}
                >
                  Skills
                </MenuItem>
              </li>
              <li>
                <MenuItem
                  component={Link}
                  to="/testimonials"
                  selected={location.pathname === '/testimonials'}
                  sx={{ color: location.pathname === '/testimonials' ? '#FFFFFF' : '#CCCCCC', backgroundColor: 'transparent' }}
                >
                  Testimonials
                </MenuItem>
              </li>
              <li>
                <MenuItem
                  component={Link}
                  to="/contact"
                  selected={location.pathname === '/contact'}
                  sx={{ color: location.pathname === '/contact' ? '#FFFFFF' : '#CCCCCC', backgroundColor: 'transparent' }}
                >
                  Contact
                </MenuItem>
              </li>
            </ul>
          </nav>
        )}
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
