import axios from "axios";
// const BACKEND_URL = 'http://localhost:3001';
// ${BACKEND_URL}
const API_URL = `/api/tools/`;

// Create New Tool
const createTool = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all Tools
const getTools = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Tool
const deleteTool = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Tool
const getTool = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Tool
const updateTool = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const toolService = {
  createTool,
  getTools,
  getTool,
  deleteTool,
  updateTool,
};

export default toolService;
