const mongoose = require("mongoose")

const mediumSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  category: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  estimateReadTime: {
    type: String,
    minlength: 10,
    maxlength: 11,
    enum: ['min', 'read'],
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model("Medium", mediumSchema)
