import axios from 'axios';

const accessToken = '';

const commonAxios = axios.create({
  baseURL: 'http://tgoddessana.pythonanywhere.com/api/',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default commonAxios;
