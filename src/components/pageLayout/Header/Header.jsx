/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
import CrossIcon from '../../atoms/CrossIcon';
import BackIcon from '../../atoms/BackIcon';
import { useGlobalStateContext, useGlobalDispatchContext } from '../../../context/globalContext';
import {
  HeaderWrapper,
  HeaderContent,
  ImgContainer,
  ListContainer,
} from './components';

const Header = ({ logoImage }) => {
  const { displaySection } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const handleCloseSection = () => {
    dispatch({
      type: 'DISPLAY_SECTION',
      displaySection: {
        isLanding: true,
        sectionName: 'landing',
      },
    });
  };

  const handleGoToProjects = () => {
    dispatch({
      type: 'DISPLAY_SECTION',
      displaySection: {
        isLanding: false,
        sectionName: 'Projects',
      },
    });
  };

  const handleGoToAbout = () => {
    dispatch({
      type: 'DISPLAY_SECTION',
      displaySection: {
        isLanding: false,
        sectionName: 'About',
      },
    });
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <ImgContainer>
          {/* <Image fluid={logoImage?.childImageSharp?.fluid} /> */}
          Image
        </ImgContainer>

        {displaySection.isLanding ? (
          <ListContainer>
            <li onClick={handleGoToProjects}>Projects</li>
            <li onClick={handleGoToAbout}>About</li>
          </ListContainer>
        ) : (
          displaySection.sectionName !== 'Project' ? (
            <CrossIcon onClick={handleCloseSection} />
          ) : (
            <BackIcon onClick={handleGoToProjects} />
          )
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
