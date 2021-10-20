import axios from './instance';

// eslint-disable-next-line import/prefer-default-export
export const getProject = async (projectId) => {
  const response = await axios.get(`/projects/${projectId}`);

  return response.data;
};
