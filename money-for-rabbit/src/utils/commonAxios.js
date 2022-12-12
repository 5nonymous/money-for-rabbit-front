import axios from 'axios';

const commonAxios = axios.create({
  baseURL: 'http://tgoddessana.pythonanywhere.com/api/',
});

commonAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    config.headers['Authorization'] = null;
    return config;
  } else {
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  }
});

export default commonAxios;
