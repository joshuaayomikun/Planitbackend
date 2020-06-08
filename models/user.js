const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  services: {
    type: String,
  }
  // services:[{
  //   type: Schema.Types.ObjectId,
  //   ref: 'ServiceType'
  // }]
});


// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);