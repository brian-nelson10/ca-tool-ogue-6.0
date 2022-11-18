const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
  createTool,
  getTools,
  getTool,
  deleteTool,
  updateTool,
} = require("../controllers/toolController");
const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createTool);
router.patch("/:id", protect, upload.single("image"), updateTool);
router.get("/", protect, getTools);
router.get("/:id", protect, getTool);
router.delete("/:id", protect, deleteTool);

module.exports = router;
