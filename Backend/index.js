import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js"

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
const db = process.env.mongoURL;

async function connectToDatabase() {
    try {
        await mongoose.connect(db);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Define routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

// Start the server
async function startServer() {
    await connectToDatabase();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();
