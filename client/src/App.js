import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import Reset from "./pages/auth/Reset";
import AddTool from "./pages/AddTool/AddTool";
import ToolList from "./components/Tool/ToolList/ToolList";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { SET_LOGIN } from './redux/features/auth/authSlice';
import { getLoginStatus } from './services/authService';


axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={
                                <Home>
                                  <ToolList />
                                </Home>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} /> */}

        {/* <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
          /> */}
        <Route path="/add-tool" element={<AddTool />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
