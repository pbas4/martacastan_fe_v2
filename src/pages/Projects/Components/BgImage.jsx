import { motion } from 'framer-motion';
import styled from 'styled-components';
import ResponsiveImage from '../../../components/ResponsiveImage/ResponsiveImage';

const ImageContainer = styled(motion.div)`
  width: 50vw;
  height: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: -1;

  opacity: .6;
`;

const BgImage = ({ bgImage }) => (
  <ImageContainer
    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100, ease: 'easeIn' }}
  >
    <ResponsiveImage
      formats={bgImage.formats}
      mainSrc={bgImage.url}
      altText={bgImage.name}
      style={{ width: '100%', minHeight: '100%', objectFit: 'cover' }}
    />
  </ImageContainer>
);

export default BgImage;
