import axios from "axios";

const client = axios.create({ baseURL: process.env.VUE_APP_API_URL });

client.interceptors.request.use((config) => {
  console.log("process.env.VUE_API_URL:::::", process.env.VUE_APP_API_URL);
  return config;
});
client.interceptors.response.use((config) => {
  console.log("api res intercepted", config);
  return config;
});

export default client;
