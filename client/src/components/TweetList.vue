<template>
  <v-layout align-start>
    <v-flex sm4>
      <NewTweet />
    </v-flex>

    <v-flex sm4>
      <search />
      <tweet v-for="tweet in tweets" :key="tweet._id" :tweet="tweet"></tweet>
    </v-flex>
    <v-flex sm4 />
  </v-layout>
</template>

<script>
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";
import Search from "./Search";
import TweetService from "../services/TweetService";

export default {
  components: { Tweet, NewTweet, Search },
  data() {
    return {
      tweets: null,
      error: null
    };
  },
  async mounted() {
    // fetch all tweets form backend, mongoose
    try {
      //  axios return .data!!!!
      const tweets = (await TweetService.getTweets()).data;
      this.tweets = tweets;
    } catch (error) {
      this.error = error.response;
    }
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.tweets = (await TweetService.getTweetsBySearch(value)).data;
      }
    }
  }
};
</script>

 