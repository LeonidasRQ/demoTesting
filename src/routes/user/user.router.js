const express = require("express");

const { httpGetAllUsers } = require("./user.controller");

const usersRouter = express.Router();

usersRouter.get("/", httpGetAllUsers);

module.exports = usersRouter;