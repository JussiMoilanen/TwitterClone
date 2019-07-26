let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let TweetSchema = new Schema({
  username: { type: String },
  message: { type: String },
  hashtag: {
    type: String
  }
});

// Export model.
let Tweet = mongoose.model("Tweet", TweetSchema);
module.exports = { Tweet };
