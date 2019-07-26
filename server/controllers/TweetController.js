const { Tweet } = require("../models/Tweet");

module.exports = {
  async tweet(req, res, err) {
    try {
      const tweet = new Tweet(req.body);
      let result = await tweet.save();
      res.json(result);
    } catch (err) {
      res.status(400).send({
        error: "Tweet failed :("
      });
    }
  },
  async getTweets(req, res, err) {
    Tweet.find({}).exec(function(err, tweets) {
      if (err) {
        return next(err);
      }
      // Successful, so render
      res.send(tweets);
    });
  },
  async getTweetsBySearch(req, res, err) {
    let tweets = null;
    let input = req.query.search;
    if (input) {
      Tweet.find({
        $or: [{ username: new RegExp(input) }, { hashtag: new RegExp(input) }]
      }).exec(function(err, tweets) {
        if (err) {
          return next(err);
        }
        // Successful, so render
        res.send(tweets);
      });
    } else {
      Tweet.find({}).exec(function(err, tweets) {
        if (err) {
          return next(err);
        }
        // Successful, so render
        res.send(tweets);
      });
    }
  },
  async deleteTweet(req, res, err) {
    const tweetId = req.params.id;
    Tweet.findByIdAndRemove(tweetId, err => {
      if (!err) {
        res.send({
          message: "Tweet deleted"
        });
      } else {
        console.log(err);
      }
    });
  }
};
