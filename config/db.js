const mongoose = require('mongoose');
// import mongoose  from "mongoose"

module.exports= ()=>{
    console.log('okok')
    return mongoose.connect('mongodb+srv://suniljaiswal099:zm8FtObog3kfwXiP@one.xouhyxz.mongodb.net/?retryWrites=true&w=majority')
}