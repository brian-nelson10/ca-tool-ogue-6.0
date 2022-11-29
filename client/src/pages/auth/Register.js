import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from "./Copyright";
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HandyMan from '@mui/icons-material/Handyman';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const initialState = {
    name: "",
    email: "",
    password: "",
};

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState(initialState);
    const { name, email, password } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const register = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            return toast.error("All Fields Required!");
        }
        if (password.length < 6) {
            return toast.error("Password must be 6 characters!");
        }
        if (!validateEmail(email)) {
            return toast.error("Plese enter a valid email!");
        }

        const userData = {
            name,
            email,
            password,
        };
        setIsLoading(true);
        try {
            const data = await registerUser(userData);
            console.log(data);
            console.log(userData);
            await dispatch(SET_LOGIN(true));
            await dispatch(SET_NAME(data.name));
            navigate("/");
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
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
                        <HandyMan />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <form onSubmit={register}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="password"
                                        value={password}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: 'secondary.dark' }}
                            >
                                Sign Up
                            </Button>
                            </form>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    {/* <Link to="/" variant="body2">Home</Link> */}
                                    <Link to="/login" variant="body2">
                                        Already have an account?
                                    </Link>
                                </Grid>
                            </Grid>
                        
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};

export default Register;
