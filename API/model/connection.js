import mongoose from "mongoose";
const url = "mongodb://localhost:27017/myantiqueshop";//database Name
mongoose.connect(url);//connecting of database
console.log("Successfully connected to mongod database");