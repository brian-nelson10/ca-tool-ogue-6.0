const asyncHandler = require("express-async-handler");
const Tool = require("../models/Tool");
const { fileSizeFormatter } = require("../utils/fileUpload");
const cloudinary = require("cloudinary").v2;

// Create Tool
const createTool = asyncHandler(async (req, res) => {

  const { name, category, quantity, description } = req.body;

  //   Validation
  if (!name || !category || !quantity || !description) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //Handle Image upload
  let fileData = {};
  if (req.file) {
    //Save image to cloudinary
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Tool App",
        resource_type: "image",
      });
    } catch (error) {
      res.status(500);
      throw new Error("Image could not be uploaded");
    }

    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    };
  }

  // Create Tool
  const tool = await Tool.create({
    user: req.user.id,
    name,
    category,
    quantity,
    description,
    image: fileData,
  });

  res.status(201).json(tool);
});

// Get all Tools
const getTools = asyncHandler(async (req, res) => {
  const tools = await Tool.find({ user: req.user.id }).sort("-createdAt");
  res.status(200).json(tools);
});

// Get single tool
const getTool = asyncHandler(async (req, res) => {
  const tool = await Tool.findById(req.params.id);
  // if tool doesnt exist
  if (!tool) {
    res.status(404);
    throw new Error("Tool not found");
  }
  // Match tool to its user
  if (tool.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  res.status(200).json(tool);
});

// Delete Tool
const deleteTool = asyncHandler(async (req, res) => {
  const tool = await Tool.findById(req.params.id);
  // if tool doesnt exist
  if (!tool) {
    res.status(404);
    throw new Error("Tool not found");
  }
  // Match tool to its user
  if (tool.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await tool.remove();
  res.status(200).json({ message: "Tool deleted." });
});

// Update Tool
const updateTool = asyncHandler(async (req, res) => {
  const { name, category, quantity, description } = req.body;
  const { id } = req.params;

  const tool= await Tool.findById(id);

  // if tool doesnt exist
  if (!tool) {
    res.status(404);
    throw new Error("Tool not found");
  }
  // Match tool to its user
  if (tool.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  // Handle Image upload
  let fileData = {};
  if (req.file) {
    //Save image to cloudinary
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "Tool App",
        resource_type: "image",
      });
    } catch (error) {
      res.status(500);
      throw new Error("Image could not be uploaded");
    }

    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    };
  }

  // Update Tool
  const updatedTool = await Tool.findByIdAndUpdate(
    { _id: id },
    {
      name,
      category,
      quantity,
      description,
      image: Object.keys(fileData).length === 0 ? tool?.image : fileData,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(updatedTool);
});

module.exports = {
  createTool,
  getTools,
  getTool,
  deleteTool,
  updateTool,
};
