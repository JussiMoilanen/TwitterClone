<template>
  <v-container>
    <v-card>
      <v-flex>
        <v-textarea
          label="New Tweet, max 100 char"
          type="text"
          name="message"
          :rules="rules"
          v-model="message"
          :maxlength="max"
        ></v-textarea>
      </v-flex>

      <v-flex md6>
        <v-text-field
          label="#Hashtag"
          v-model="hashtag"
          type="text"
          name="hashtag"
          :rules="rules"
          :maxlength="max2"
        ></v-text-field>
      </v-flex>
      <v-btn @click="tweet">Tweet</v-btn>
    </v-card>
  </v-container>
</template>


<script>
import TweetService from "../services/TweetService";

export default {
  data() {
    return {
      message: "",
      username: this.$store.state.user,
      tweetId: null,
      hashtag: "#",
      error: null,
      rules: [v => !!v || "The input is required"],
      max: 100,
      max2: 12
    };
  },
  methods: {
    async tweet() {
      try {
        await TweetService.tweet({
          username: this.username,
          message: this.message,
          hashtag: this.hashtag
        });
        window.location.reload();
      } catch (error) {
        this.error = error.response;
      }
      this.message = "";
    }
  },
  computed: {
    nodes() {
      return this.message.split(/#([\w]+)/);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mx-auto {
  border: 1px;
}
</style>