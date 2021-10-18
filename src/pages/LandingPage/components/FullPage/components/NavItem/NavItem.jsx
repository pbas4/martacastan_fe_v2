import React from 'react';
import { useTheme } from 'styled-components';
import { NavigationItem } from './components';

const NavItem = ({ isActive, handleClick }) => {
  const theme = useTheme();

  return (
    <NavigationItem
      onClick={handleClick}
      animate={{
        borderColor: isActive ? theme.colors.lightBlue : theme.colors.beige,
        background: isActive ? theme.colors.lightBlue : theme.colors.backgroundColor,
        scale: isActive ? 1.3 : 1,
      }}
    />
  );
};

export default NavItem;
