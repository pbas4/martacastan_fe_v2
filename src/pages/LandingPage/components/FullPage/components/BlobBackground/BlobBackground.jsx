import { BackgroundSection } from './components';

const BlobBackground = ({ imgFluid, onHover, onHoverLeave }) => (
  <BackgroundSection
    onHoverStart={onHover}
    onHoverEnd={onHoverLeave}
  >
    {/* <BackgroundImage
      Tag="div"
      fluid={imgFluid}
      style={{ width: '400px', height: '400px' }}
    /> */}
    Image
  </BackgroundSection>
);

export default BlobBackground;
