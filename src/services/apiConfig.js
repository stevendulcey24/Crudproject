import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://recipe-api-production.up.railway.app/",
  development: "https://recipe-api-production.up.railway.app/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
const api = axios.create({
  baseURL: apiUrl,
});
export default api;
