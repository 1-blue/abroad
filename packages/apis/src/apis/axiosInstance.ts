import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL || "https://api.abroad0213.com",
  withCredentials: true,
});

console.log(
  "🚀 log >> ",
  process.env.NEXT_PUBLIC_SERVER_URL || "https://api.abroad0213.com"
);
