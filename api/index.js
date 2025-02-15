import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// databse connection
dotenv.config();
mongoose.connect(
    process.env.MONGO
 ).then ( () =>{
    console.log('MongoDB is  connected and running')
}).catch(err =>{
    console.log(err);
});

// server creation
const app = express();

app.listen(3000, () => {
  console.log(
    "server is running on port 3000 my first server running on express"
  );
});
