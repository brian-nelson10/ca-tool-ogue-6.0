import React from "react";
// import { useNavigate, Link } from "react-router-dom";
import HandyMan from "@mui/icons-material/Handyman";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { 
    Grid,
    IconButton,
    AppBar,
    Typography }
     from '@mui/material';

     const theme = createTheme({
        palette: {
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                blue: '#33bfff'
            },
        },
    });

const HeaderBasic = () => {

     const navigate = useNavigate();


    return (
        <ThemeProvider theme={theme}>
         <AppBar position="static" sx={{ bgcolor: "secondary.blue" }} >
    
      <Grid container justifyContent="space-between" alignItems="center">
        
                
          <IconButton 
          onClick={(e) => {navigate("/home")}}
          sx={{ color: 'white',
                bgcolor: 'secondary.blue',
                 '&:hover': {
                color: '#f44336',
                bgcolor: 'secondary.blue'}}}>
          <HandyMan  sx={{ fontSize: '40px', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </IconButton>
          <Typography
          style={{ flex: '1'}}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              mr: 1,
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
          
          
          <IconButton 
          onClick={(e) => {navigate("/home")}}
          sx={{ color: 'white',
                bgcolor: 'secondary.blue',
                 '&:hover': {
                color: '#f44336',
                bgcolor: 'secondary.blue'}}}>
          <HandyMan sx={{ fontSize: '40px', display: { xs: 'flex', md: 'none' }, mr: 1,  }} />
          </IconButton>
          <Typography
            style={{ flex: 1 }}
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
               
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
          
          
       
        </Grid>
      
    </AppBar>
    </ThemeProvider>
  );
}

export default HeaderBasic;