const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const routineSchema = new Schema({
  
  list: [String],
  user: { type: Schema.Types.ObjectId, ref: 'User.model' }
});

const Routine = model('Routine', routineSchema);

module.exports = Routine;