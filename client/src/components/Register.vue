<template>
  <v-container class="container">
    <v-layout row class="text-xs-center">
      <v-flex xs4 class="grey lighten-4">
        <v-container class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h3>Register</h3>
            </v-card-title>
            <v-form>
              <v-text-field
                prepend-icon="person"
                type="text"
                name="username"
                v-model="username"
                placeholder="username"
              />
              <v-text-field
                prepend-icon="lock"
                type="password"
                name="password"
                v-model="password"
                placeholder="password"
              />
              <v-text-field class="error" v-html="error"></v-text-field>
              <v-card-actions>
                <v-btn primary large block @click="register">Register</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Authentication from "../services/Authentication";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await Authentication.register({
          username: this.username,
          password: this.password
        });
        localStorage.setItem("token", response.data.token); // store the token in localstorage
        localStorage.setItem("user", response.data.user.username); // store the token in localstorage
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user.username);
        this.$router.push({
          path: "/"
        });
        window.location.reload();
      } catch (error) {
        if (error.response.status === 422) {
          this.error = error.response.data.errors[0].msg;
        } else {
          this.error = error.response.data.error;
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: right;
}
</style>
