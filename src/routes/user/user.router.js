const express = require("express");

const { httpGetAllUsers, httpAddUser, httpGetUser } = require("./user.controller");

const usersRouter = express.Router();

usersRouter.get("/", httpGetAllUsers);
usersRouter.get("/:id", httpGetUser);
usersRouter.post("/", httpAddUser);

module.exports = usersRouter;