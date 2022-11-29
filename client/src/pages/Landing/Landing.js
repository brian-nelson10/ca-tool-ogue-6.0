import "./landing.css";
import React from 'react';
import HeaderBasic from '../../components/Header/HeaderBasic';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from "../../assets/images/tools.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from '@mui/material/styles';



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

const Landing = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderBasic />
        <Container>
        <Box className="hero">
            <Grid container spacing={12}   
            alignItems="center"
            justifyContent="center">
                <Grid item xs={12} md={7} >
                    <Typography variant="h1" align="center" className="heroH1" style={{fontFamily: 'Antonio', letterSpacing: '3px'}}>
                        ca-TOOL-ogue
                    </Typography>
                    <Typography variant="h5" align="center" className='heroText'>
                        Asset Tracker for Handyman Services.
                    </Typography>
                    <Grid container display="flex" justifyContent="space-between">
                    <Button 
                     className='Button'
                     variant="contained"
                    
                     sx={{ bgcolor: 'secondary.blue', width: '300px', fontSize: '16px' }}
                     >
                        Login
                     </Button>
                     <Button 
                     className='Button'
                     variant="contained"
                     
                     sx={{ bgcolor: 'secondary.blue', width: '300px', fontSize: '16px' }}
                     >
                        Register
                     </Button>
                     </Grid>
                </Grid>
                <Grid item xs={10.5} md={5}>
                    <img src={Hero} alt="tools art" className='heroImg'/>
                </Grid>
            </Grid>
        </Box>
        </Container>
        </ThemeProvider>
        </div>
    );
};

export default Landing;