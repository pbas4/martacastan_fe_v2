import {
  Container,
  BlobContainer,
  Blob,
} from './components';
import Title from '../Title/Title';
import BlobBackground from '../BlobBackground/BlobBackground';

function LandingPage({
  title,
  description,
  bgImage,
  handleOnClick,
  componentIndex,
}) {
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
      onClick={() => handleOnClick()}
    >
      <BlobContainer isClickable={componentIndex !== 0}>
        <Title title={title} description={description} />
        <Blob variants={blobVariants}>
          <BlobBackground bgImage={bgImage} />
        </Blob>
      </BlobContainer>
    </Container>
  );
}

export default LandingPage;
