const express = require("express");
const User = require("../models/user");
const router = express.Router();
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError.js");
const sendToken = require("../utils/jwtToken.js");

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

router.post(
  "/login-user",
  catchAsyncError(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHandler("Please enter Email and password !", 400));
      }

      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        return next(new ErrorHandler("User doesn't exists! ", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(new ErrorHandler("Please provide the PASSWROD !"));
      }

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
