const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    roomId: {
      type: Number,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    optionSelected: {
      ans: { type: String },
      isTrue: { type: Boolean, default: true },
    },
    points: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports.userModel = userModel;
