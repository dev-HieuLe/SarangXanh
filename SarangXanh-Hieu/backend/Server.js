import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

// Import routes
import authRoutes from "./routes/AuthRoutes.js";
import dataRoutes from "./routes/DataRoutes.js";
import uploadRoutes from "./routes/UploadRoutes.js";

const app = express();

// Global middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/", authRoutes);
app.use("/data", dataRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/", uploadRoutes); 


app.listen(8081, () => {
  console.log("✅ Server running on port 8081");
});
