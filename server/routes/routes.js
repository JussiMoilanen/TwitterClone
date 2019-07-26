const AuthController = require("../controllers/AuthController");
const TweetController = require("../controllers/TweetController");
const { body } = require("express-validator");

module.exports = app => {
  app.post(
    "/register",
    [
      body("username")
        .isString()
        .isAlphanumeric()
        .isLength({ min: 3, max: 16 })
        .withMessage("Invalid username")
        .exists(),
      // password must be at least 5 chars long
      body("password")
        .isLength({ min: 8, max: 16 })
        .withMessage("Password must contain 8 - 16 charecters")
    ],
    AuthController.register
  ),
    app.post("/login", AuthController.login),
    app.post("/tweet", TweetController.tweet),
    app.get("/getTweets", TweetController.getTweets),
    app.get("/getTweetsBySearch", TweetController.getTweetsBySearch),
    app.delete("/deleteTweet/:id", TweetController.deleteTweet);
};
