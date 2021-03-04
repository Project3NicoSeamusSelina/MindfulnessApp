const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const routineSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  checklistItem: Number,
  User: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Routine = model('Routine', routineSchema);

module.exports = Routine;