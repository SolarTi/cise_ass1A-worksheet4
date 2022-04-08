const express = require("express");
const connectDB = require('../config/db');

const server = express();

// Connect Database
connectDB();

server.get('/', (req, res) => {
    res.send("Worksheet 4 API is running")
})

// const dotenv = require("dotenv");
// dotenv.config();
const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`server is working and listening on PORT ${PORT}`));
