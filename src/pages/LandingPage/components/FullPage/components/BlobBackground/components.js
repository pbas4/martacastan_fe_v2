import styled from 'styled-components';
import { motion } from 'framer-motion';

// eslint-disable-next-line import/prefer-default-export
export const BackgroundSection = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-size: 200%;
  background-position: center center;
  filter: blur(3px);
  transition: all 1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
