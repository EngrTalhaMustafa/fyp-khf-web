import axios from "axios";
import config from './config';

export default axios.create({
  // baseURL: config.host[config.evn],
  baseURL: "http://localhost:3000/",
  responseType: "json",
});