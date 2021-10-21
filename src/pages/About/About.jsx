import { useQuery } from 'react-query';
import { SectionTitle } from '../../components/pageLayout/SectionContainer/components';
import Layout from '../../components/pageLayout/Layout/Layout';
import SectionContainer from '../../components/pageLayout/SectionContainer/SectionContainer';
import {
  ContentContainer,
  SideContainer,
  DescriptionTitle,
  Description,
  SocialLinkWrapper,
} from './components';
import SocialLink from './components/SocialLink/SocialLink';
import { getAbout } from '../../resource/about';

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

const descriptionItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const About = () => {
  const { isLoading, error, data: aboutData } = useQuery('about', getAbout);

  return (
    !isLoading && !error && (
      <Layout>
        <SectionContainer>
          <SectionTitle>ABOUT</SectionTitle>
          <ContentContainer>
            <SideContainer
              variants={descriptionContainer}
              initial="hidden"
              animate="show"
            >
              <DescriptionTitle variants={descriptionItem}>
                {aboutData.short_description}
              </DescriptionTitle>
              <Description variants={descriptionItem}>
                {aboutData.description}
              </Description>

              <SocialLinkWrapper variants={descriptionItem}>
                <SocialLink link="https://www.linkedin.com/in/mcpobla/" socialName="LinkedIn" name="mcpobla" />
                <SocialLink link="https://www.instagram.com/studiocastan/" socialName="Instagram" name="studiocastan" />
              </SocialLinkWrapper>
            </SideContainer>
          </ContentContainer>
        </SectionContainer>
      </Layout>
    )
  );
};

export default About;
