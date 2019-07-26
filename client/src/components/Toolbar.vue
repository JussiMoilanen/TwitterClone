<template>
  <v-toolbar color="#EAEAEA" fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Twitter clone</v-toolbar-title>
    <v-btn flat>
      <router-link to="/">Home</router-link>
    </v-btn>
    <h3 v-if="loggedIn">Hello {{username}}!</h3>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="!loggedIn" flat>
        <router-link to="/register">Sign up</router-link>
      </v-btn>
      <v-btn v-if="!loggedIn" flat>
        <router-link to="/login">Login</router-link>
      </v-btn>
      <v-btn v-if="loggedIn" flat @click="logout">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      token: "",
      loggedIn: "",
      error: null
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        path: "/"
      });
      localStorage.removeItem("token"); // clear your user's token from localstorage
      localStorage.removeItem("user");
      window.location.reload();
    }
  },
  mounted() {
    this.username = this.$store.state.user;
    this.token = this.$store.state.token;
    this.loggedIn = !!this.token;
  }
};
</script>

<style scoped>
</style>