import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import  authaRoutse from  "./routes/auth.route.js";

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


//api creation
app.use('/api/user', userRouter);
app.use('/api/user', userRouter)
