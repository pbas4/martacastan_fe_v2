import React from 'react';
import { Container, PageTitle, PageDescription } from './components';

const titlesVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
};

const Title = ({ title, description }) => (
  <Container variants={containerVariants}>
    <PageTitle variants={titlesVariants}>
      {title}
    </PageTitle>
    <PageDescription variants={titlesVariants}>
      {description}
    </PageDescription>
  </Container>
);

export default Title;
