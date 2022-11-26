import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Copyright from "./Copyright";
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HandyMan from '@mui/icons-material/Handyman';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  createTheme, ThemeProvider } from '@mui/material/styles';

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
                       navigate("/dashboard");
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
            {isLoading }
                <CssBaseline/>
                <Box 
                    sx={{
                        marginTop: 8,
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
                            <HandyMan/>
                        </Avatar>
                        <Typography component="h1"variant="h5">
                            Login
                        </Typography>
                        <Box comonent="form" onSubmit={login} sx={{ mt:3 }}>
                            <Grid container spacing={2}>
                                {/* <Grid item xs={12}>
                                    <TextField
                                       
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        autoFocus
                                        value={name}
                                        onChange={handleInputChange}
                                        />
                                </Grid> */}
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
                                        sx={{ mt: 3, mb: 2 , bgcolor: 'secondary.dark' }}
                                        >
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
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};

export default Login;














// import React, { useState } from "react";
// import styles from "./auth.module.scss";
// import { BiLogIn } from "react-icons/bi";
// import Card from "../../components/card/Card";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { loginUser, validateEmail } from "../../services/authService";
// import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";


// const initialState = {
//   email: "",
//   password: "",
// };

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setformData] = useState(initialState);
//   const { email, password } = formData;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setformData({ ...formData, [name]: value });
//   };

//   const login = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       return toast.error("All fields are required");
//     }

//     if (!validateEmail(email)) {
//       return toast.error("Please enter a valid email");
//     }

//     const userData = {
//       email,
//       password,
//     };
//     setIsLoading(true);
//     try {
//       const data = await loginUser(userData);
//       console.log(data);
//       await dispatch(SET_LOGIN(true));
//       await dispatch(SET_NAME(data.name));
//       navigate("/dashboard");
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={`container ${styles.auth}`}>
//       {isLoading && <Loader />}
//       <Card>
//         <div className={styles.form}>
//           <div className="--flex-center">
//             <BiLogIn size={35} color="#999" />
//           </div>
//           <h2>Login</h2>

//           <form onSubmit={login}>
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               name="email"
//               value={email}
//               onChange={handleInputChange}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               name="password"
//               value={password}
//               onChange={handleInputChange}
//             />
//             <button type="submit" className="--btn --btn-primary --btn-block">
//               Login
//             </button>
//           </form>
//           <Link to="/forgot">Forgot Password</Link>

//           <span className={styles.register}>
//             <Link to="/">Home</Link>
//             <p> &nbsp; Don't have an account? &nbsp;</p>
//             <Link to="/register">Register</Link>
//           </span>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default Login;
