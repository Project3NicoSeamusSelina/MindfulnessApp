const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  
  entries: [
    {
      type: Schema.Types.ObjectId,
      ref: 'entry'
    }
  ],
  routines: [
    {
      type: Schema.Types.ObjectId,
      ref: 'routine'
    }
  ]
});

const User = model('user', userSchema);

module.exports = User;
