import decodeJWT from './decodeJWT';

const getUserNumber = () => {
  const accessToken = localStorage.getItem('accessToken');
  return decodeJWT(accessToken).sub;
};

export default getUserNumber;
