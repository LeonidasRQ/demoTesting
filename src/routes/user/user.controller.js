const { getAllUsers } = require("../../models/user");

function httpGetAllUsers(req, res) {
    return res.status(200).json(getAllUsers());
}

module.exports = { httpGetAllUsers }