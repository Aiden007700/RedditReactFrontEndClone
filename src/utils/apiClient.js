import axios from "axios";
import { apiBaseUrl } from "./config";

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 1000,
});


export default apiClient;
