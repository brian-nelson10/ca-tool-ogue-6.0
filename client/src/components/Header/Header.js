import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ShowOnLogout } from "../../components/Login/Link";
import { ShowOnLogin } from "../../components/Login/Link";
import HandyMan from "@mui/icons-material/Handyman";
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SET_LOGIN } from "../../redux/features/auth/authSlice";
// import { selectName } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authService";

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
    Typography
}
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


const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const name = useSelector(selectName);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const logout = async () => {
        await logoutUser();
        await dispatch(SET_LOGIN(false));
        navigate("/");
      };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{ bgcolor: "secondary.blue" }}>
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            justifyContent: "space-between"
                        }}>
                        <IconButton
                            onClick={(e) => { navigate("/home") }}
                            sx={{
                                color: 'white',
                                bgcolor: 'secondary.blue',
                                '&:hover': {
                                    color: '#f44336',
                                    bgcolor: 'secondary.blue'
                                }
                            }}>
                            <HandyMan sx={{ fontSize: '40px', display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        </IconButton>
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
                            }}>
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
                                <ShowOnLogout>
                                <MenuItem onClick={(e) => {
                                    navigate("/register")
                                }}>
                                <Typography textAlign="center">Register</Typography>
                                        </MenuItem>
                                </ShowOnLogout>

                                <ShowOnLogout>
                                    <MenuItem onClick={(e) => {
                                    navigate("/login")
                                }}>
                                   <Typography textAlign="center">Login</Typography>
                                        </MenuItem>
                                </ShowOnLogout> 

                                <ShowOnLogin>
                                    <MenuItem onClick={logout}>
                                    <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                </ShowOnLogin>

                            </Menu>
                        </Box>
                         <IconButton
                            onClick={(e) => { navigate("/home") }}
                            sx={{
                                display: { xs: 'flex', md: 'none' }, mr: 1,
                                color: 'white',
                                bgcolor: 'secondary.blue',
                                '&:hover': {
                                    color: '#f44336',
                                    bgcolor: 'secondary.blue'
                                }
                            }}>
                        <HandyMan sx={{ fontSize: '40px', display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        </IconButton>
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
                            display: { xs: 'none', md: 'flex' }
                        }}>

                            <Button
                                onClick={(e) => {
                                    navigate("/add-tool")
                                }}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    textDecoration: 'none'
                                }}
                            >
                                Add Tool
                            </Button>

                            <Box sx={{
                                flexGrow: 0,
                                textDecoration: 'none',
                                display: { xs: "none", md: "flex" }
                            }}>

                                <ShowOnLogout>
                                    
                                    <Button
                                        onClick={(e) => {
                                            navigate("/register")
                                        }}
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                            textDecoration: 'none'
                                        }}>
                                        Register</Button>
                                        
                                </ShowOnLogout>

                                <ShowOnLogout>
                                    
                                    <Button
                                        onClick={(e) => {
                                            navigate("/login")
                                        }}
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                            textDecoration: 'none'
                                        }}>
                                        Login</Button>
                                        
                                </ShowOnLogout>

                                <ShowOnLogin>
                                    
                                    <Button
                                        onClick={logout}
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            dislplay: 'block',
                                            textDecoration: 'none'
                                        }}>
                                        Logout</Button>
                                        
                                </ShowOnLogin>

                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;