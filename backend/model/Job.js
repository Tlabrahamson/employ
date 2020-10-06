const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  company: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  description: {
    type: String,
    required: true,
    max: 2000,
    min: 6
  },
  location: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  salary: {
    type: String,
    required: true,
    max: 255,
    min: 4
  },
  contactName: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  contactEmail: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Job", jobSchema);
