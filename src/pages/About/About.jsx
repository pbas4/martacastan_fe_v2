/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { SectionTitle } from '../SectionContainer/components';
import {
  ContentContainer,
  SideContainer,
  DescriptionTitle,
  Description,
  SocialLinkWrapper,
} from './components';
import SocialLink from './components/SocialLink/SocialLink';

const About = () => (
  <>
    <SectionTitle>ABOUT</SectionTitle>
    <ContentContainer>
      <SideContainer>
        <DescriptionTitle>From Barcelona based in Amsterdam.</DescriptionTitle>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Description>

        <SocialLinkWrapper>
          <SocialLink link="https://www.linkedin.com/in/mcpobla/" socialName="LinkedIn" name="mcpobla" />
          <SocialLink link="https://www.instagram.com/studiocastan/" socialName="Instagram" name="studiocastan" />
        </SocialLinkWrapper>
      </SideContainer>
    </ContentContainer>
  </>
);

export default About;
