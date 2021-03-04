const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  
  entries: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Entry'
    }
  ],
  routines: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Routine'
    }
  ]
});

const User = model('User', userSchema);

module.exports = User;
