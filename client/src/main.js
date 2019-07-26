import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import router from "./router";
import store from "./store/store";

Vue.use(Vuetify);
Vue.config.productionTip = false;
// index.js or main.js
import "vuetify/dist/vuetify.min.css";

new Vue({ el: "#app", router, store, render: h => h(App) });
