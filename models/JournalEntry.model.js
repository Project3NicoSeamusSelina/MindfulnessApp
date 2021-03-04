const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const journalEntrySchema = new Schema({
  title: String,
  description: String,
  date: Date,
  entries: entries,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const journalEntries = model('journalEntries', journalEntrySchema);

module.exports = journalEntries;