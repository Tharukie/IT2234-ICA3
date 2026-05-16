import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import appointmentRoute from "./routes/appointmentRoute.js";


// Initialize express application
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(bodyParser.json());
app.use(cors());
// Load environment variables 
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

// Connect to MongoDB Database
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully.");
    // Start listening on server port only after database binds successfully
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log("Database connection error: ", error));

  // Register your modular application API route path handler
app.use("/api/appointment", appointmentRoute);