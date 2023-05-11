const express = require("express");
const cors = require("cors");
const cloudinary=require("cloudinary").v2;
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB_URL = process.env.MONGO_DB;

const connect = async () => {
  try {
    const DB = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = DB.connection;
    console.log(`Connected to DB: ${name} in host ${host}`);
  } catch (error) {
    console.log("Error connecting with the DB", error);
  }
};

connect();

const PORT = process.env.PORT || 5000;

const JWT_SECRET = process.env.JWT_SECRET

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.use(logger("dev"))


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

server.use(cors({
    origin: "*",
    credentials: true
}))

server.set("secretKey", JWT_SECRET)

// server.use("/blogs", blogsRouter)
// server.use("/pets", petsRouter);
// server.use("/users", userRouter);



server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
