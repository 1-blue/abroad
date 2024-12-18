import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
});

// 런타임에 baseURL 설정
if (process.env.NEXT_PUBLIC_SERVER_URL) {
  axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
}
