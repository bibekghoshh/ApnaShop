import express from "express";
const app = express();
import ErrorHandler from "./middleware/error.js";
import connectDatabase from "./db/Database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

app.use(cors({ origin: ["https://localhost:3000"], credentials: true }));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

dotenv.config({ path: "config/.env" });

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});
process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
  process.exit(1);
});

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("Hello Developers");
});
app.listen(process.env.PORT, () => {
  console.log(`server is running at http://localhost:${process.env.PORT}`);
});

//Import routes
import user from "./controller/user.js";

app.use("/api/v2/user", user);

app.use(ErrorHandler);
