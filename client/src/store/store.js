import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.getItem("user") || "",
    token: localStorage.getItem("token") || "",
    loggedIn: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      // state.loggedIn = !!token
      if (token) {
        state.loggedIn = true;
      } else {
        state.loggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    }
  }
});
