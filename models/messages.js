const mongoose = require("mongoose");

let messagesSchema = new mongoose.Schema({
    messages: String
});

let Message = mongoose.model('Message', messagesSchema);

module.exports = Message;