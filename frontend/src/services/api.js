import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/safety",
});

export const fetchSafetyData = (query) => API.post("/", { query });
