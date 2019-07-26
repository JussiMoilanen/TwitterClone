<template>
  <v-card class="mx-auto" color="#26c6da" dark max-width="500">
    <v-card-title>
      <span class="title font-weight-light">Tweet</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">{{ tweet.message }}</v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-icon>person</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{tweet.username}}</v-list-tile-title>
        </v-list-tile-content>
        <span class="subheading mr-2">{{tweet.hashtag}}</span>
        <v-layout v-if="this.user == tweet.username" align-center justify-end>
          <v-btn @click="remove(tweet._id)" small>Del</v-btn>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
import TweetService from "../services/TweetService";
export default {
  props: ["tweet"],

  data() {
    return {
      tweetData: this.tweet,
      user: this.$store.state.user,
      tweetId: this.tweet._id
    };
  },
  methods: {
    async remove(tweetId) {
      if (window.confirm("Are you sure want to delete this tweet?")) {
        try {
          await TweetService.deleteTweet(tweetId);
          window.location.reload();
        } catch (error) {
          this.error = error.response;
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
