const userServ = require('../services/userService');

exports.funcHello = async (req, res) => {
  res.send("Hello World!");
};

exports.funcGetUsers = userServ.getAllUsers;
exports.funcGetUserById = userServ.getUserById;
exports.funcDeleteUserById = userServ.deleteUserById;
exports.funcUpdateUserById = userServ.updateUserById;