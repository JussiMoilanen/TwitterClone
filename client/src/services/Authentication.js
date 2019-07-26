import Api from "./Api";

// axios post request to backend
export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  }
};
