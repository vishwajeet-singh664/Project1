const express = require("express");
const app = express();
let bodyParser = require("body-parser");
const mongoose = require('mongoose');
const User = require('./app/models/user')
const Profile = require('./app/models/profile');
const { profile } = require("console");
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


// post for profile
app.post("/profile", async(req, res) => {
console.log(req.body);
await new Profile(req.body).save().then((docs)=>{
  res.status(200).json({
    message: "Profile created",
    status: true,
    data: docs
  })
}).catch((err)=>{
  
  res.status(401).json({
    message: err.message,
    status: false
  })
})

     })


//put //for profile
  app.put('/profile', async (req,res)=>{
    const profile = await Profile.findById("6465f588405f94179c9f2dbb")
    profile.email = "The Most Awesomest Post!!";
    await profile.save();
    res.send(profile)
  })


// for profile  delete
app.delete('/profile', async (req,res)=>{
  const profile = await Profile.deleteOne({_id: "6465f588405f94179c9f2dbb"})
  res.send(profile)
})

// for profile show
app.get('/profile/find:id', async (req,res)=>{
  const profile = await Profile.find().populate('user', 'firstName').then(profile=>console.log(profile)).catch(error=>console.log(error));
  res.send(profile)
})




app.listen("3300", () => {
  console.log("Listening at 3300");
});

