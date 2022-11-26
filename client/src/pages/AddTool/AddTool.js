import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ToolForm from "../../components/Tool/ToolForm/ToolForm";
import {
    createTool
} from "../../redux/features/tool/toolSlice";

const initialState = {
    name: "",
    category: "",
    quantity: "",
    price: "",
};

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
    
        navigate("/dashboard");
      };

    return (
        <div>
        {/* {isLoading && <Loader />} */}
        <h3 className="--mt">Add New Tool</h3>
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
      </div>
    );
};

export default AddTool;
