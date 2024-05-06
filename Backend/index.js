import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fs from 'fs';

import bookRoute from "./Route/book.route.js";
import Book from './Model/book.model.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json

// Connect to MongoDB
const db = process.env.mongoURL;

async function connectToDatabase() {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

async function insertData() {
    try {
        const jsonData = fs.readFileSync("./lists.json", "utf-8");
        const books = JSON.parse(jsonData);
        await Book.insertMany(books);
        console.log("Data inserted successfully");
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}

// Define routes
app.use('/book', bookRoute);

// Start the server
async function startServer() {
    await connectToDatabase();
    await insertData();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();
