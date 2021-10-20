import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

/**
 * ANIMATIONS
 */
const morph = keyframes`
  0% { border-radius: 30% 70% 70% 30% / 30% 35% 65% 70% }
  20% { border-radius: 52% 48% 51% 49% / 66% 54% 46% 34% }
  40% { border-radius: 66% 34% 32% 68% / 35% 64% 36% 65% }
  60% { border-radius: 42% 58% 70% 30% / 68% 34% 66% 32% }
  80% { border-radius: 55% 45% 42% 58% / 38% 70% 30% 62% }
  100% { border-radius: 30% 70% 70% 30% / 30% 35% 65% 70% }
`;

const movement = keyframes`
  0% { transform: rotate3d(10%, 5%, 10%); perspective: 500px;}
  40% { transform: rotate3d(20%, 15%, 5%); perspective: 750px; }
  80% {transform: rotate3d(5%, 10%, 15%); perspective: 1000px; }
`;

/**
 * COMPONENTS
 */
export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  ${({ theme: { maxWidths } }) => `
    max-width: ${maxWidths.content}px;
  `}
`;

export const BlobContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isClickable }) => isClickable && `
    cursor: pointer;
  `}
`;

export const Blob = styled(motion.div)`
  position: fixed;
  z-index: -1;
  height: 400px;
  width: 400px;
  background: transparent;
  overflow: hidden;      
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 1s ease-in-out;
  
  animation: 
    ${morph} 25s ease-in-out infinite both alternate,
    ${movement} 25s ease-in-out infinite both;
    
  /* ${(props) => props.isBlobHovered && css`
    transform: scale(1.03);
  `} */
`;
