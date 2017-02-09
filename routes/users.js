"use strict";
var express = require("express");
var user_1 = require("../models/user");
var router = express.Router();
router.post('/Register', function (req, res) {
    var user = new user_1.default();
    user.username = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.passowrd);
    user.save(function (err, newUser) {
        if (err) {
            console.log(err);
        }
        else {
            res.end();
        }
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
