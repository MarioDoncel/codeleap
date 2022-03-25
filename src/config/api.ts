import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL as string;

const api = axios.create({ baseURL, withCredentials: false });

export { api };
