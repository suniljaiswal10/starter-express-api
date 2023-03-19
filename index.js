const express = require('express')
const app = express();

const db= require('./config/db');
const userRouter = require('./Controller/user_controller');

//to understand this project please follow this link:== https://javascript.plainenglish.io/node-js-models-and-database-3836f0c7f2da

//mongodb+srv://suniljaiswal099:<password>@one.xouhyxz.mongodb.net/?retryWrites=true&w=majority
app.use(express.json())

app.use('/',userRouter)
// Catch all handler for all other request.
app.use('*', (req, res) => {
  res.json({ msg: 'no route handler found' }).end()
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port,async () => {
    await db();
    console.log(`server listening on ${port}`)
})