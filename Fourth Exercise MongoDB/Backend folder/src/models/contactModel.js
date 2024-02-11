const mongoose = require('mongoose');

// Schema for contacts.
const contactSchema = new mongoose.Schema({
  first: String,
  last: String,
  twitter: String,
  avatar: String,
  notes: String,
  createdAt: Date,
});

// Model for contacts.
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
