const {default:mongoose}= require("mongoose");


const Schema = mongoose.Schema({

phone_no: String,
email: String,
gender: String,
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

// const Profile = async function() {
//     const Profile = await Profile.find().populate("user");
  
//   };
const Profile=mongoose.model('Profile', Schema);
module.exports= Profile;