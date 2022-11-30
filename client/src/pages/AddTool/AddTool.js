import "./addtool.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ToolForm from "../../components/Tool/ToolForm/ToolForm";
import Header from "../../components/Header/Header";
import { createTool } from "../../redux/features/tool/toolSlice";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
    Container,
    Grid,
    Typography }
     from '@mui/material';

const initialState = {
    name: "",
    category: "",
    quantity: ""
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

const AddTool = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [tool, setTool] = useState(initialState);
    const [toolImage, setToolImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState("");

    const { name, category, quantity } = tool;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTool({ ...tool, [name]: value });
    };

    const handleImageChange = (e) => {
        setToolImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    };

    const saveTool = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("category", category);
        formData.append("quantity", Number(quantity));
        formData.append("description", description);
        formData.append("image", toolImage);
    
        console.log(...formData);
    
        await dispatch(createTool(formData));
    
        navigate("/home");
      };

    return (
        <div>
        <Header />
        <ThemeProvider theme={theme}>
        <Container>
        {/* {isLoading && <Loader />} */}
        
        <Grid align="center">
        <br/>
        <Typography variant='h2' align='center' className="h2"
            style={{ fontFamily: 'Antonio' }} >Add New Tool </Typography>
        <br/>
        <ToolForm
          tool={tool}
          toolImage={toolImage}
          imagePreview={imagePreview}
          description={description}
          setDescription={setDescription}
          handleInputChange={handleInputChange}
          handleImageChange={handleImageChange}
          saveTool={saveTool}
        />
        </Grid>
      </Container>
      </ThemeProvider>
      </div>
    );
};

export default AddTool;
