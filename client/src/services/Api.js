import axios from "axios";

//connector to backend
export default () => {
  return axios.create({
    baseURL: "http://localhost:8000"
  });
};
