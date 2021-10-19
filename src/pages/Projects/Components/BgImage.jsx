import { motion } from 'framer-motion';
import styled from 'styled-components';
// import BackgroundImage from 'gatsby-background-image';

const ImageContainer = styled(motion.div)`
  width: 50vw;
  height: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: -1;

  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  opacity: .6;
`;

const BgImage = ({ bgImage }) => (
  <ImageContainer
    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    // exit={{ opacity: 0, x: 100, ease: 'easeIn' }}
  >
    Image
    {/* <BackgroundImage
      Tag="div"
      fluid={bgImage?.childImageSharp?.fluid}
      style={{ width: '100%', height: '100%' }}
    /> */}
  </ImageContainer>
);

export default BgImage;
