import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';


const Pages = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Logout'];
const buttons =['Signup'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 

  return (
    <AppBar position="static" sx={{backgroundColor:"#419c8e"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Student
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Pages.map((Page) => {
                let toPath = Page;
                if(Page === "Home") { toPath="/"};
                if(Page === "About") {toPath="/About"};
                 if(Page === "Contact") {toPath="/Contact" };
                return(
                  <Link component={RouterLink} to={toPath} key={Page}>
                  <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{Page}</Typography>
                </MenuItem>
                </Link>
                );
                
})}
            </Menu>
          </Box>
            <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Student
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Pages.map((Page) => {
              let toPath = Page;
              if(Page === "Home") { toPath="/"};
              if(Page === "About") {toPath="/About"};
               if(Page === "Contact") {toPath="/Contact" };
              return(
                <Link component={RouterLink} to={toPath} key={Page}>
              <Button
                key={Page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {Page}
              </Button>
              </Link>
              )
              })}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {buttons.map((item) => {
                let toPath = item;
                // if(item === "Signin") { toPath="/Signin"};
                if(item === "Signup") { toPath="/Signup"};
                return(
                  <Link component={RouterLink} to={toPath} key={item}>
                  <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
                </Link>
                );
                
})}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', alignItems:"flex-end" } }}>
            {buttons.map((item) => {
              let toPath = item;
              // if(item === "Signin") { toPath="/Signin"};
              if(item === "Signup") { toPath="/Signup"};
              return(
                <Link component={RouterLink} to={toPath} key={item}>
              <Button
                key={item}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item}
              </Button>
              </Link>
              )
              })}
          </Box>
         
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>S</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link component={RouterLink} to={setting.toLocaleLowerCase()} sx={{textDecoration:"none",color:"#fc03ba"}}>
                  <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
