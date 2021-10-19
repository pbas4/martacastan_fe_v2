import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useGlobalStateContext } from '../../context/globalContext';
// import Projects from '../Projects/Projects';
// import About from '../About/About';
// import Project from '../Project';

const FullContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow-y: scroll;

  ${({ theme: { colors } }) => `
    background: ${colors.backgroundColor};
  `}
`;

const Container = styled(motion.div)`
  ${({ theme: { pageMargins, header, maxWidths } }) => `
    max-width: ${maxWidths.content}px;
    margin-top: calc(${header.height}px + ${pageMargins.sm}px);
    margin-left: ${pageMargins.sm}px;
    margin-right: ${pageMargins.sm}px;
  `}

  ${({ theme: { pageMargins, header, media } }) => media.md`
    margin-top: calc(${header.height}px + ${pageMargins.md}px);
    margin-left: ${pageMargins.md}px;
    margin-right: ${pageMargins.md}px;
  `}
`;

const SectionContainer = ({ children }) => {
  // const { displaySection } = useGlobalStateContext();
  // const getSectionComponent = () => {
  //   if (displaySection.sectionName === 'Projects') return Projects;
  //   // if (displaySection.sectionName === 'Project') return Project;
  //   return About;
  // };
  // const SectionComponent = getSectionComponent();

  const variants = {
    hidden: {
      // x: '100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    show: {
      // x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <>
      <FullContainer
        variants={variants}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Container>
          {children}
        </Container>
        {/* {SectionComponent && (
          <Container>
            <SectionComponent />
          </Container>
        )} */}
      </FullContainer>
    </>
  );
};

export default SectionContainer;
