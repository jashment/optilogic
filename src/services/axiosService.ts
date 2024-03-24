import axios from 'axios';

const API_BASE_URL = 'https://api.optilogic.app';

const axiosService = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosService;
