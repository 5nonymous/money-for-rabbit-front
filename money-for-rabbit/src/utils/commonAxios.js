import axios from 'axios';

const commonAxios = axios.create({
  baseURL: 'http://tgoddessana.pythonanywhere.com/api/',
});

commonAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    config.headers['Authorization'] = null;
    return config;
  } else if (token && config.url === 'user/refresh') {
    const refreshToken = localStorage.getItem('refreshToken');
    config.headers['Authorization'] = 'Bearer ' + refreshToken;
    return config;
  } else {
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  }
});

commonAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    console.log('originalRequest :>> ', originalRequest);
    if (
      error.response.status === 401 &&
      error.response.data.error === '토큰이 만료되었습니다.'
    ) {
      commonAxios
        .post('user/refresh')
        .then((response) => {
          const { access_token, refresh_token } = response.data;
          localStorage.setItem('accessToken', access_token);
          localStorage.setItem('refreshToken', refresh_token);
          originalRequest.headers.authorization = `Bearer ${access_token}`;
          return commonAxios(originalRequest);
        })
        .catch(() => {
          // access token을 받아오지 못하는 오류 발생시 logout 처리
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/';

          return false;
        });
    }

    return Promise.reject(error);
  }
);
export default commonAxios;
