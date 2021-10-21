import { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';
import { SectionTitle } from '../SectionContainer/components';
import Layout from '../../components/pageLayout/Layout/Layout';
import SectionContainer from '../SectionContainer/SectionContainer';
import { FilterContainer, FilterItem, ListContainer } from './components';
import ProjectItem from './Components/ProjectItem';
import BgImage from './Components/BgImage';
import { getProjects } from '../../resource/projects';
import useIsDesktop from '../../hooks/useIsDesktop';

const filterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const filterItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Projects = () => {
  const { isLoading, error, data: projectsData = { projects: [], filters: [] } } = useQuery('projects', getProjects);
  const { projects, filters } = projectsData;

  const history = useHistory();
  const isDesktop = useIsDesktop();

  const [revealImage, setRevealImage] = useState({
    show: false,
    img: '',
    key: '0',
  });

  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects = useMemo(
    () => (selectedFilter === 'All'
      ? projects
      : projects.filter(
        (project) => (project.categories.some(({ name }) => name === selectedFilter)),
      )),
    [selectedFilter, projects],
  );

  const projectsParent = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const handleProjectSelect = (projectId) => {
    history.push(`projects/${projectId}`);
  };

  return (
    <Layout>
      <SectionContainer>
        <SectionTitle>PROJECTS</SectionTitle>

        <AnimatePresence>
          {!isLoading && !error && (
          <>
            <FilterContainer
              key="FILTER"
              variants={filterContainer}
              initial="hidden"
              animate="show"
            >
              {filters.map(({ name }) => (
                <FilterItem
                  key={name}
                  onClick={() => setSelectedFilter(name)}
                  isSelected={name === selectedFilter}
                  variants={filterItem}
                >
                  {name}
                </FilterItem>
              ))}
            </FilterContainer>

            <ListContainer
              variants={projectsParent}
              initial="initial"
              animate="animate"
              key="LIST"
            >
              {filteredProjects.map((project, index) => (
                <ProjectItem
                // eslint-disable-next-line react/jsx-props-no-spreading
                  {...project}
                  onHoverStart={() => setRevealImage({
                    show: true,
                    img: project.main_image,
                    key: project.id,
                  })}
                  onHoverEnd={() => setRevealImage({
                    show: false,
                    img: '',
                    key: '0',
                  })}
                  isLast={index === filteredProjects.length - 1}
                  key={project.id}
                  title={project?.title || project.Title}
                  shortDescription={project?.short_description || ''}
                  mainImage={project.main_image}
                  handleSelect={() => handleProjectSelect(project.id)}
                />
              ))}

              {isDesktop && revealImage.show && (
                <BgImage
                  bgImage={revealImage.img}
                />
              )}
            </ListContainer>
          </>
          )}
        </AnimatePresence>
      </SectionContainer>
    </Layout>
  );
};

export default Projects;
