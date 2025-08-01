import express from "express";
import multer from "multer";

const router = express.Router(); // ✅ create a router

// ✅ Configure multer to save files in uploads/ folder
const upload = multer({ dest: "uploads/" });

// ✅ POST /upload route
router.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const imageUrl = `http://localhost:8081/uploads/${file.filename}`;
  res.json({ imageUrl });
});

export default router; // ✅ must export
