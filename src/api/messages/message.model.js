const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
   author: {type: String, required: true},
   message: {type: String, required: true},
   date: Date,
   reactions: [String],
});

module.exports = mongoose.model('Message', MessageSchema);
