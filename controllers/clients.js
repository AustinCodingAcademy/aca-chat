const ClientId = require("../models/clients");

let clientId = 0;

exports.create = function create(req, res) {
    clientId += 1;
    res.json(clientId)
    let newClientId = new ClientId(clientId);
    newClientId.save();
}