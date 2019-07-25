const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  bio: {
    type: String,
    required: false
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  favouriteWorks: {
    type: [String],
    required: true
  },
  social: {
    youtube: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
