const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
      type: String,
      required: true
    },
    lastName : {
      type: String,
      required: true
    },
    displayName : {
      type: String,
      required: true
    },
    email : {
      type: String,
      required: true
    },
    phoneNumberPersonal : {
      type: String,
      required: true
    },
    phoneNumberWork : {
      type: String,
      required: true
    },
    location : {
      type: String,
      required: true
    }
});

module.exports = User = mongoose.model('kyrouser', userSchema);