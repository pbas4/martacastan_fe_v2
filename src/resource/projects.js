import flatten from 'lodash/flatten';
import uniqBy from 'lodash/uniqBy';
import sortBy from 'lodash/sortBy';
import axios from './instance';

// eslint-disable-next-line import/prefer-default-export
export const getProjects = async () => {
  const response = await axios.get('/projects');

  const orderedProjects = sortBy(response.data, ['project', 'order']);

  const filters = [{ name: 'All' }, ...uniqBy(flatten(response.data.map(({ categories }) => categories)), 'name')];

  return { projects: orderedProjects, filters };
};
