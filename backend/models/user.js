import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter your name please"],
  },
  email: {
    type: String,
    required: [true, "Enter your email please"],
  },
  password: {
    type: String,
    required: [true, "Enter your password please"],
    minLength: [6, "password should contain greater then 6 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
  },
  address: [
    {
      country: {
        type: String,
      },
      city: { type: String },
      address1: { type: String },
      address2: { type: String },
      zipCode: { type: String },
      addressType: { type: String },
    },
  ],
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
  createdAt: {
    type: String,
    required: true,
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

//  Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default User = mongoose.model("User", userSchema);
