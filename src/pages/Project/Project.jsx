import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Markdown from 'react-markdown';
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

const descriptionItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Project = () => {
  const { projectId } = useParams();
  const { isLoading, error, data: projectData } = useQuery(['projects', projectId], () => getProject(projectId));

  return (
    !isLoading && !error && (
      <>
        <MainImageWrapper>
          <ResponsiveImage
            formats={projectData.main_image.formats}
            mainSrc={projectData.main_image.url}
            altText={projectData.main_image.name}
            style={{ width: '100%', objectFit: 'cover' }}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={descriptionItem}
          />
        </MainImageWrapper>

        <ContentWrapper>
          <Title>{projectData?.title}</Title>

          {projectData?.categories && (
            <Categories>
              {projectData.categories.map(({ name }) => (
                <Category key={name}>{name}</Category>
              ))}
            </Categories>
          )}

          {projectData?.description && (
            <Description>
              <Markdown>{projectData?.description}</Markdown>
            </Description>
          )}

          <ImagesWrapper>
            {projectData?.images?.map((image) => (
              image?.url && (
                <ImageContainer key={image.id}>
                  <img src={image?.url} alt={`${image?.name}`} />
                </ImageContainer>
              )
            ))}
          </ImagesWrapper>
        </ContentWrapper>
      </>
    )
  );
};

export default Project;
