const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/users", userControl.funcGetUsers);
router.get("/users/:id", userControl.funcGetUserById);
router.delete("/users/:id", userControl.funcDeleteUserById);
router.patch("/users/:id", userControl.funcUpdateUserById);

module.exports = router;