import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: none;
`;

export const PageTitle = styled(motion.h2)`
  ${({ theme: { landingPage } }) => `
    color: ${landingPage.title.color};
    font-size: ${landingPage.title.sm.fontSize}em;
    font-weight: ${landingPage.title.sm.fontWeight};
    letter-spacing: ${landingPage.title.sm.letterSpacing}em;
    line-height: ${landingPage.title.sm.lineHeight}em;
    padding-bottom: ${landingPage.title.sm.paddingBottom}px;
    text-align: center;
  `}

  ${({ theme, theme: { landingPage } }) => theme.media.md`
    font-size: ${landingPage.title.md.fontSize}em;
    letter-spacing: ${landingPage.title.md.letterSpacing}em;
  `}
`;

export const PageDescription = styled(motion.h4)`
  ${({ theme: { landingPage, media } }) => media.md && `
    color: ${landingPage.description.color};
    font-size: ${landingPage.description.fontSize}em;
    font-weight: ${landingPage.description.fontWeight};
    letter-spacing: ${landingPage.description.letterSpacing}em;
  `}
`;
