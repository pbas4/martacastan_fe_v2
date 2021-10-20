/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { useQuery } from 'react-query';
import { SectionTitle } from '../SectionContainer/components';
import Layout from '../../components/pageLayout/Layout/Layout';
import SectionContainer from '../SectionContainer/SectionContainer';
import {
  ContentContainer,
  SideContainer,
  DescriptionTitle,
  Description,
  SocialLinkWrapper,
} from './components';
import SocialLink from './components/SocialLink/SocialLink';
import { getAbout } from '../../resource/about';

const About = () => {
  const { isLoading, error, data: aboutData } = useQuery('about', getAbout);
  console.log('aboutData', aboutData);

  return (
    !isLoading && !error && (
      <Layout>
        <SectionContainer>
          <SectionTitle>ABOUT</SectionTitle>
          <ContentContainer>
            <SideContainer>
              <DescriptionTitle>{aboutData.short_description}</DescriptionTitle>
              <Description>{aboutData.description}</Description>

              <SocialLinkWrapper>
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
