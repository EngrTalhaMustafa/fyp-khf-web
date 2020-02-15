import axios from "axios";
// const httpsAgent = new https.Agent({
//     rejectUnauthorized: false, // (NOTE: this will disable client verification)
//     cert: fs.readFileSync("./usercert.pem"),
//     key: fs.readFileSync("./key.pem"),
//     passphrase: "YYY"
//   })
export default axios.create({
  baseURL: "https://localhost:3000",
  responseType: "json",
//   httpsAgent
});