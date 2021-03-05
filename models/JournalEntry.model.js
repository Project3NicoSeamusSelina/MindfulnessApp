const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const journalEntrySchema = new Schema({
  description: String,
  date: Date,
  entries:[String],
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const JournalEntry = model('journalEntries', journalEntrySchema);

module.exports = JournalEntry;