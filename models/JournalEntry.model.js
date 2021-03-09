const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const journalEntrySchema = new Schema({
  date: Date,
  question1: String,
  question2: String,
  question3: String,
  entries:[String],
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const JournalEntry = model('journalEntries', journalEntrySchema);

module.exports = JournalEntry;