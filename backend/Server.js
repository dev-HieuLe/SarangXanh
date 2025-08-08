import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();


// Import routes
import authRoutes from "./routes/AuthRoutes.js";
import dataRoutes from "./routes/DataRoutes.js";
import uploadRoutes from "./routes/UploadRoutes.js";
import memberRoutes from "./routes/MemberRoutes.js";
import galleryRoutes from "./routes/GalleryRoutes.js";
import StatsRoutes from "./Routes/ViewRoutes.js";
import helmet from "helmet";


const app = express();


// Enable CORS for frontend origin
app.use(cors({
  origin: process.env.FRONTEND_URL || process.env.FRONTEND_URL, // adjust this in prod
  credentials: true,
}));

// Global middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());

// Routes
app.use("/", authRoutes);
app.use("/data", dataRoutes);
app.use("/members", memberRoutes);
app.use("/gallery", galleryRoutes);
app.use("/views", StatsRoutes);
app.use("/upload", uploadRoutes); 


app.listen(8081, () => {
  console.log("✅ Server running on port 8081");
});






