const mongoose = require("mongoose");

let clientIdSchema = new mongoose.Schema ({
    id: Number
});

let ClientId = mongoose.model('ClientId', clientIdSchema);

module.exports = ClientId;