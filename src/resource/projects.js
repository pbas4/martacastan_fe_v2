import flatten from 'lodash/flatten';
import uniqBy from 'lodash/uniqBy';
import axios from './instance';

// eslint-disable-next-line import/prefer-default-export
export const getProjects = async () => {
  const response = await axios.get('/projects');

  const filters = [{ name: 'All' }, ...uniqBy(flatten(response.data.map(({ categories }) => categories)), 'name')];

  return { projects: response.data, filters };
};
