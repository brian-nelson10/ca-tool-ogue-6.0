import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ToolList from '../../components/Tool/ToolList/ToolList.js';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import { getTools } from '../../redux/features/tool/toolSlice';



const Home = () => {
    useRedirectLoggedOutUser("/login");
    const dispatch = useDispatch();
  
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { tools, isLoading, isError, message } = useSelector(
      (state) => state.tool
    );
  
    useEffect(() => {
      if (isLoggedIn === true) {
        dispatch(getTools());
      }
  
      if (isError) {
        console.log(message);
        console.log(isError);
        console.log(isLoggedIn);
        console.log(tools);
    
      }
    }, [isLoggedIn, isError, message, dispatch]);

    return (
        <>
        <div className="homeContainer">
            <Header />
            <ToolList tools={tools} isLoading={isLoading}/>
            </div>
            <div className="footerContainer">
                <Footer />
            </div>
            </>
    );
}

export default Home;








































