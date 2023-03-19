const express = require('express');
const userRouter = express.Router();
const user = require('../Models/User_model');
const ObjectId = require('mongodb').ObjectId;


//post route to create users
    userRouter.post('/create', async (req, res) => {
    console.log("ww",req.body)
  
    const name = req.body.name
    const email = req.body.email
    const newUser=await user.create({name,email});
    return res.status(201).send(newUser)
    
  })
  

  
  // Get a single 
  userRouter.get('/', async (req, res) => {
    const userInDB=await user.find({}).lean().exec();
    return res.status(201).json(userInDB)
  })
  
 

    // Delete an 
  userRouter.delete('/:id', async (req, res) => {
      console.log( req.params.id, "pppppp")
      
      const us  = await user.findByIdAndDelete({_id:new ObjectId(req.params.id)});
      console.log(us, "this is us");
      res.status(200).send(us);
  })
  
  // put method explaination 
  // PUT is a method of modifying resources 
  // where the client sends data that updates the entire resource. 
  // PUT is similar to POST in that it can create resources, 
  // but it does so when there is a defined URL wherein PUT replaces the entire resource 
  // if it exists or creates new if it does not exist.
  userRouter.put('/', async (req, res) => {
    const updateUser = user.updateOne({_id: new ObjectId(req.body._id)},{})
  console.log("ssss", updateUser)
    res.status(203).send('user updated').end()
  })

  userRouter.patch('/', async (req, res) => {
    const updateUser = await user.findByIdAndUpdate({_id: new ObjectId(req.body._id)},req.body, {new: true})
    console.log("ssss", updateUser)
      res.status(203).send(updateUser).end()
  })
  
  // Catch all handler for all other request.
//   app.use('*', (req, res) => {
//     res.json({ msg: 'no route handler found' }).end()
//   })

module.exports=userRouter