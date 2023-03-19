const mongoose = require('mongoose');
require('dotenv').config();

// import mongoose  from "mongoose"

module.exports= ()=>{
    return mongoose.connect(process.env.MY_DB)
}