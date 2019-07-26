const { User } = require("../models/User");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

//jwt, move somewhere later...
function jwtSingUp(user) {
  return jwt.sign(user, process.env.JWT_SECRET || "secret", {
    expiresIn: "2h"
  });
}

module.exports = {
  register: async (req, res, err) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    try {
      const newUser = new User(req.body);
      let result = await newUser.save();
      const userJson = result.toJSON();
      res.send({
        user: userJson,
        token: jwtSingUp(userJson)
      });
    } catch (err) {
      res.status(400).send({
        error: err.response
      });
    }
  },
  login: async (req, res, err) => {
    try {
      const { username, password } = req.body;
      let user = await User.findOne({ username: username }).exec();
      if (!user) {
        return res.status(403).send({
          error: "The username does not exist"
        });
      }
      user.comparePassword(password, (error, match) => {
        if (!match) {
          return res.status(403).send({
            error: "The password is invalid"
          });
        }
      });
      // if username and password match send back user and jwt-token
      res.send({
        user: user.toJSON(),
        token: jwtSingUp(user.toJSON())
      });
    } catch (error) {
      res.status(500).send({
        error: error.message
      });
    }
  }
};
