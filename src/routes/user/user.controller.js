const { getAllUsers, addUser, getUser } = require("../../models/user");

function httpGetAllUsers(req, res) {
    return res.status(200).json(getAllUsers());
}

function httpGetUser(req, res) {
    const userId = Number(req.params.id);
    return res.status(200).json(getUser(userId));
}

function httpAddUser(req, res) {
    const newUser = req.body;
    return res.status(201).json(addUser(newUser));
}

module.exports = { httpGetAllUsers, httpAddUser, httpGetUser }