import axios from "axios";

export default function createRequest () {
  const request = axios.create({
    baseURL: "https://api.thedogapi.com/",
  });

  request.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  request.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      return Promise.reject(error.response.data);
    },
  );

  return request;
}
