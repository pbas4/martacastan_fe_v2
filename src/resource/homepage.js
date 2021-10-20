import axios from './instance';

// eslint-disable-next-line import/prefer-default-export
export const getHomepage = async () => {
  const response = await axios.get('/homepage');

  return response.data;
};
