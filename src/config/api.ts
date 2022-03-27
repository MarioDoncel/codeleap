import axios from 'axios';
import { envVariables } from './environmentVariables';

const baseURL = envVariables.baseUrl;

const api = axios.create({ baseURL, withCredentials: false });

export { api };
