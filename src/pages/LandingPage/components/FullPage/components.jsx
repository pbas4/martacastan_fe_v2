/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavigationContainer = styled(motion.div)`
  position: fixed;
  z-index: 100;
  top: 50%; //TODO centrar be

  ${({ theme: { pageMargins } }) => `
    right: ${pageMargins.lg}px; 
  `}
`;
