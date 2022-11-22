import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
  });

  return api;
};
