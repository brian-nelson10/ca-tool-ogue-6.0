import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";

const initialState = {
    name: "",
    email: "", 
    password: "", 
    password2: "", 
};

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState(initialState);
    const { name, email, password, password2 } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const register = async (e) => {
        e.preventDefault();

        if(!name || !email || !password) {
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
            await dispatch(SET_LOGIN(true));
            await dispatch(SET_NAME(data.name));
            navigate("/dashboard");
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    };

    return (
        
    )
}
