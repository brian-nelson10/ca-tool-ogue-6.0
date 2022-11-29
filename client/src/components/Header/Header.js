import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShowOnLogout } from "../../components/Login/Link";
import { ShowOnLogin } from "../../components/Login/Link";
import HandyMan from "@mui/icons-material/Handyman";
import MenuIcon from '@mui/icons-material/Menu';

import { 
    Container,
    // Link,
    AppBar,
    Box,
    Toolbar,
    Menu,
    Button,
    MenuItem,
    IconButton,
    Typography }
     from '@mui/material';



const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    return (
         <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar 
            disableGutters
            sx={{
                justifyContent: "space-between"
            }}>
          <HandyMan sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            ca-TOOL-ogue
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
              <MenuIcon />
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
             
                <MenuItem onClick={(e) => {
                                    navigate("/add-tool")
                   }}   >
                  <Typography textAlign="center">Add Tool</Typography>
                </MenuItem>
            
            </Menu>
          </Box>
          <HandyMan sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            ca-TOOL-ogue
          </Typography>
          <Box sx={{ 
            flexGrow: 0, 
            display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                onClick={(e) => {
                    navigate("/add-tool")
   }}
                sx={{ 
                    my: 2, 
                    color: 'white',
                    display: 'block',
                    textDecoration: 'none' }}
              >
                Add Tool
              </Button>

              <Box sx={{ 
                flexGrow: 0,
                textDecoration: 'none',
                display: { xs: "none", md: "flex" }
               }}>
             
          <ShowOnLogout>
           
              <Button onClick={(e) => {
                                    navigate("/register")
                   }}>Register</Button>
            
          </ShowOnLogout>
          <ShowOnLogout>
              <Button
              sx={{ 
                my: 2, 
                color: 'white', 
                display: 'block',
                textDecoration: 'none' }}>
                <Link to="/login">Login</Link>
              </Button>
          </ShowOnLogout>

          <ShowOnLogin>
                <Button 
                sx={{
                    my: 2,
                    color: 'white',
                    dislplay: 'block',
                    textDecoration: 'none'
                }} 
                onClick={(e) => {
                                    navigate("/")
                   }}
                    >Logout</Button>
             
          </ShowOnLogin>
        
              </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;