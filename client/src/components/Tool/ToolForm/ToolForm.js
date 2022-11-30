import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ToolForm = ({
    tool,
    toolImage,
    imagePreview,
    description, 
    setDescription,
    handleInputChange,
    handleImageChange,
    saveTool
}) => {
    return (
        <div className="addTool">
            <Card sx={{ maxWidth: 450 }} style={{ boxShadow: '1px 1px 1px 1px' }}>
                <form onSubmit={saveTool}>
                    {imagePreview != null ? (
                    <CardMedia 
                    component="img"
                    height="140"
                    image={imagePreview}
                    alt="tool"
                    />
                    ) : (
                        <Typography>
                            No image set for this Tool.
                        </Typography>
                    )}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Tool Image
                    </Typography>
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => handleImageChange(e)}
                        />
                    <Typography gutterBottom variant="h5" component="div">
                        Tool Name:
                    </Typography>
                    <input
                        type="text"
                        placeholder="Tool Name"
                        name="name"
                        value={tool?.name}
                        onChange={handleInputChange}
                        />
                    <Typography gutterBottom variant="h5" component="div">
                        Tool Category:
                    </Typography>
                        <input
                            type="text"
                            placeholder="Tool Category"
                            name="category"
                            value={tool?.category}
                            onChange={handleInputChange}
                            />
                    <Typography gutterBottom variant="h5" component="div">
                        Tool quantity:
                    </Typography>
                        <input 
                            type="text"
                            placeholder="Tool Quantity"
                            name="quantity"
                            value={tool?.quantity}
                            onChange={handleInputChange}
                            />

                    <Typography gutterBottom variant="h5" component="div">
                        Tool description:
                    </Typography>
                    <ReactQuill
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                        modules={ToolForm.modules}
                        formats={ToolForm.formats}
                        />
                        <br/>
                        <Grid container justifyContent="center" alignItems="center">
                    <CardActions>
                        {/* <Button size="small" type="submit">Save Tool</Button> */}
                        <Button
                                        
                                        type="submit"
                                        variant="contained"
                                        sx={{ 
                                            bgcolor: 'secondary.blue', 
                                            width: '300px', 
                                            fontSize: '16px',
                                            borderRadius: '15px', 
                                            '&:hover': {
                                            backgroundColor: '#f44336'
                                        }, }}>
                                        Save Tool
                                    </Button>
                    </CardActions>
                    </Grid>
                    
                </CardContent>
                </form>
            </Card>
        </div>
    );
};


ToolForm.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
  };
  ToolForm.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "video",
    "image",
    "code-block",
    "align",
  ];


export default ToolForm; 