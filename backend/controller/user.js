const express = require("express");
const User = require("../models/user");
const router = express.Router();
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");

//Create user

router.post("/create-user", async (req, res, next) => {
  try {
    const { name, email, password, avatar } = req.body;

    // Check if the email already exists
    const userEmail = await User.findOne({ email });

    if (userEmail) { 
      return next(new ErrorHandler("User already exists", 400));
    }

     // Upload avatar to Cloudinary
    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "avatars",
    });

    const newUser = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    res.status(201).json({
      success: true,
      user: newUser,
    });

  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});



module.exports=router;