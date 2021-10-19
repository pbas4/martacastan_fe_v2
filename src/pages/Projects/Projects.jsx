import { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../SectionContainer/components';
import Layout from '../../components/pageLayout/Layout/Layout';
import SectionContainer from '../SectionContainer/SectionContainer';
import { FilterContainer, FilterItem, ListContainer } from './components';
import ProjectItem from './Components/ProjectItem';
import BgImage from './Components/BgImage';
// import useResource from '../../../resources/projects';
import useIsDesktop from '../../hooks/useIsDesktop';
import { useGlobalDispatchContext } from '../../context/globalContext';

const Projects = () => {
  // const { projects, filters } = useResource();
  const projects = [];
  const filters = [{ name: 'filter1' }, { name: 'filter2' }, { name: 'filter3' }, { name: 'filter4' }];

  const isDesktop = useIsDesktop();
  const dispatch = useGlobalDispatchContext();

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
    [selectedFilter],
  );

  const projectsParent = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  };

  const handleProjectSelect = (projectId) => {
    dispatch({
      type: 'DISPLAY_SECTION',
      displaySection: {
        isLanding: false,
        sectionName: 'Project',
      },
    });

    dispatch({
      type: 'SELECT_PROJECT',
      selectedProject: projectId,
    });
  };

  return (
    <Layout>
      <SectionContainer>
        <SectionTitle>PROJECTS</SectionTitle>

        <AnimatePresence>
          <FilterContainer
            key="FILTER"
          >
            {filters.map(({ name }) => (
              <FilterItem
                key={name}
                onClick={() => setSelectedFilter(name)}
                isSelected={name === selectedFilter}
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
        </AnimatePresence>
      </SectionContainer>
    </Layout>
  );
};

export default Projects;
