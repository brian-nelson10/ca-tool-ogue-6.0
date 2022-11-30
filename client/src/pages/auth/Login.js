import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Copyright from "./Copyright";
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HandyMan from '@mui/icons-material/Handyman';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const initialState = {
    email: "",
    password: ""
};

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState(initialState);
    const { email, password } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const login = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return toast.error("All fields are required");
        }

        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }

        const userData = {
            email,
            password,
        };
        setIsLoading(true);
        try {
            const data = await loginUser(userData);
            console.log(data);
            await dispatch(SET_LOGIN(true));
            await dispatch(SET_NAME(data.name));
            navigate("/home");
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };


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

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" className="log">
                {isLoading}
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
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

                        <HandyMan sx={{ fontSize: '45px' }} />

                    </IconButton>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form onSubmit={login}>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: 'secondary.blue', borderRadius: '15px',
                            '&:hover': {
                            backgroundColor: '#f44336'}}}>
                            Login
                        </Button>

                        <Grid container justifyContent="space-between">
                            <Grid item justifyContent="flex-start">
                                <Link to="/forgot">Forgot Password?</Link>
                            </Grid>
                            <Grid item justifyContent="flex-end">
                                <Link to="/register" variant="body2">
                                    Dont have an account?
                                </Link>
                            </Grid>

                        </Grid>
                    </Box>
                    </form>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};

export default Login;