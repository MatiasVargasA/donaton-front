import axios from "axios";

export const donationsApi = axios.create({
  baseURL: "http://localhost:8081"
});

export const needsApi = axios.create({
  baseURL: "http://localhost:8082"
});