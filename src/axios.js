import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8002",
  baseURL: "https://heroku-discord-backend.herokuapp.com",
});

export default instance;
