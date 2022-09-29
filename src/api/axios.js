import axios from "axios";
const BASE_URL = "https://vast-brook-91178.herokuapp.com/api/v1/";

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
