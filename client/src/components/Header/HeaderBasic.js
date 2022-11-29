import React from "react";
// import { useNavigate, Link } from "react-router-dom";
import HandyMan from "@mui/icons-material/Handyman";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { 
    Container,
    // Link,
    AppBar,
    Toolbar,
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

    // const navigate = useNavigate();


    return (
        <ThemeProvider theme={theme}>
         <AppBar position="static" sx={{ bgcolor: "secondary.blue" }} >
      <Container maxWidth="xl" sx={{ bgcolor: "secondary.blue" }}>
        <Toolbar 
            disableGutters
            sx={{
                justifyContent: "space-between",
                bgcolor: "secondary.blue"
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

          <HandyMan sx={{ display: { xs: 'flex', md: 'none' }, mr: 48, flex: '.2' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
                flex: '1',
             
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
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default HeaderBasic;