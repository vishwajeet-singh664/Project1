const express = require("express");
const app = express();
let bodyParser = require("body-parser");
const mongoose = require('mongoose');
const User = require('./app/models/user')
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Project1')
  .then(() => console.log('Connected!')).catch((err) => console.log("error"));

app.get("/hello-world", (req, res) => {
  res.send("Hello");
});

app.post("/new-request", (req, res) => {
  res.send(req.body);
});



//for post
app.post("/users", async(req, res) => {
let user = await User.create(
  {
    firstName: "Vishwajeet",
    lastName:"Singh",
    email:"rvishwajeet"
  })
  res.send(user);
});


// for update
app.put('/users', async (req,res)=>{
  const user = await User.findById("6465ece15cfc8dc9fed10a59")
  user.firstName = "The Most Awesomest Post!!";
  await user.save();
  res.send(user)
})



// for delete
app.delete('/users', async (req,res)=>{
  const user = await User.deleteOne({_id: "6464bd206e95f41cd8d04086"})
  res.send(user)
})



// for show
app.get('/users', async (req,res)=>{
  const user = await User.findById({_id: "6464b9188fb84b6d7eadf8f2"})
  res.send(user)
})




app.listen("3300", () => {
  console.log("Listening at 3300");
});

