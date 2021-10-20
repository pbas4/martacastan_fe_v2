import axios from './instance';

// eslint-disable-next-line import/prefer-default-export
export const getAbout = async () => {
  const response = await axios.get('/about');

  return response.data;
};
