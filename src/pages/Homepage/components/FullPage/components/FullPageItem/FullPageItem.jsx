import React, { useState } from 'react';
import {
  Container,
  BlobContainer,
  Blob,
} from './components';
import Title from '../Title';
import BlobBackground from '../BlobBackground';

function LandingPage({
  title,
  description,
  bgImage,
  handleOnClick,
  componentIndex,
}) {
  const [isBlobHovered, setIsBlobHovered] = useState(false);
  const parentVariants = {
    show: {
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: [0.6, 0.05, -0.01, 0.9],
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
        staggerChildren: 0.3,
      },
    },
  };

  const blobVariants = {
    show: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <Container
      variants={parentVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      key={title}
      onClick={(section) => handleOnClick(section)}
    >
      <BlobContainer isClickable={componentIndex !== 0}>
        <Title
          title={title}
          description={description}
          // TODO add effect
        />
        <Blob variants={blobVariants} isBlobHovered={isBlobHovered}>
          <BlobBackground
            onHover={() => setIsBlobHovered(true)}
            onHoverLeave={() => setIsBlobHovered(false)}
            imgFluid={bgImage?.childImageSharp?.fluid}
          />
        </Blob>
      </BlobContainer>
    </Container>
  );
}

export default LandingPage;