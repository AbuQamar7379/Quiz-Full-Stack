const mongoose = require("mongoose");

const optionSchema = mongoose.Schema(
  {
    ans: { type: String, required: true },
    isTrue: { type: Boolean, default: false },
  },
  { _id: false }
);

const quizSchema = mongoose.Schema(
  {
    roomId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unqiue: true,
    },
    options: [optionSchema, optionSchema, optionSchema, optionSchema],
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const quizModel = mongoose.model("question", quizSchema);

module.exports.quizModel = quizModel;
