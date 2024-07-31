import axios from "axios";
const token = import.meta.env.APP_NIMBLE_DEMO_TOKEN;

export const instanceAuth = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${token}`
  }
});
