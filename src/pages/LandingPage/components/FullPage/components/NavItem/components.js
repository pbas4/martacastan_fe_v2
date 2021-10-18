import styled from 'styled-components';
import { motion } from 'framer-motion';

// eslint-disable-next-line import/prefer-default-export
export const NavigationItem = styled(motion.div)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 20px 0;
  opacity: .5;
  border: .5px solid;
  cursor: pointer;
`;
