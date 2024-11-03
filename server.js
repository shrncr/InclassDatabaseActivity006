const path = require("path");
const express = require("express");
const app = express();
const api = require("./api")
const db = require("./db");
const connectDB = require("./db");
const fs = require('fs');
const Painting = require("./Painting")
const mongoose = require("mongoose")
const cors = require('cors');
app.use(cors({origin:true, credentials:true}));
app.use(express.json());



app.use("/", api)
connectDB()



const port = 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
