import { BackgroundSection } from './components';
import ResponsiveImage from '../../../../../../components/ResponsiveImage/ResponsiveImage';

const BlobBackground = ({
  bgImage, onHover, onHoverLeave,
}) => (
  <BackgroundSection
    onHoverStart={onHover}
    onHoverEnd={onHoverLeave}
  >
    <ResponsiveImage formats={bgImage.formats} mainSrc={bgImage.url} altText={bgImage.name} />
  </BackgroundSection>
);

export default BlobBackground;
