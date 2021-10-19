/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
import { NavLink } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderContent,
  ImgContainer,
  ListContainer,
} from './components';

const Header = ({ logoImage }) => (
  <HeaderWrapper>
    <HeaderContent>
      <ImgContainer as={NavLink} to="/">
        {/* <Image fluid={logoImage?.childImageSharp?.fluid} /> */}
        Image
      </ImgContainer>

      <ListContainer>
        <li>
          <NavLink to="/projects" activeClassName="active-link-selected">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link-selected">
            About
          </NavLink>
        </li>
      </ListContainer>

    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
