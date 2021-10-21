import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Markdown from 'react-markdown';
import { motion } from 'framer-motion';
import { getProject } from '../../resource/project';
import ResponsiveImage from '../../components/atoms/ResponsiveImage/ResponsiveImage';
import {
  MainImageWrapper,
  ContentWrapper,
  Title,
  Description,
  Categories,
  Category,
  ImagesWrapper,
  ImageContainer,
} from './components';

const descriptionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const projectItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Project = () => {
  const { projectId } = useParams();
  const { isLoading, error, data: projectData } = useQuery(['projects', projectId], () => getProject(projectId));

  return (
    !isLoading && !error && (
      <motion.div
        variants={descriptionContainer}
        initial="hidden"
        animate="show"
      >
        <MainImageWrapper
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.4,
          }}
        >
          <ResponsiveImage
            formats={projectData.main_image.formats}
            mainSrc={projectData.main_image.url}
            altText={projectData.main_image.name}
            style={{
              width: '100%',
              minHeight: '100%',
              objectFit: 'cover',
            }}
          />
        </MainImageWrapper>

        <ContentWrapper
          variants={descriptionContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={projectItem}>
            <Title>{projectData?.title}</Title>

            {projectData?.categories && (
              <Categories variants={projectItem}>
                {projectData.categories.map(({ name }) => (
                  <Category key={name}>{name}</Category>
                ))}
              </Categories>
            )}

            {projectData?.description && (
              <Description variants={projectItem}>
                <Markdown>{projectData?.description}</Markdown>
              </Description>
            )}
          </motion.div>

          <ImagesWrapper variants={projectItem}>
            {projectData?.images?.map((image) => (
              image?.url && (
                <ImageContainer key={image.id}>
                  <img src={image?.url} alt={`${image?.name}`} />
                </ImageContainer>
              )
            ))}
          </ImagesWrapper>
        </ContentWrapper>
      </motion.div>
    )
  );
};

export default Project;
