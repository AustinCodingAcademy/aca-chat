// clientId holds the next id number for the next user as each user hits the page,
// clientId gets incremented. everyone should have a unique clientId
let clientId = 0;

//renamed and exported function
//will be a post request but create is a better name
exports.create = function create(req, res) {
  clientId++;
  res.send(clientId.toString());
};
