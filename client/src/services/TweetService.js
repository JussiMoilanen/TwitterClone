import Api from "./Api";

// axios post request to backend
export default {
  tweet(information) {
    return Api().post("tweet", information);
  },
  getTweets() {
    return Api().get("getTweets");
  },
  getTweetsBySearch(search) {
    return Api().get("getTweetsBySearch", {
      params: {
        search: search
      }
    });
  },
  deleteTweet(tweetId) {
    return Api().delete(`deleteTweet/${tweetId}`);
  }
};
