import React from 'react';

const Icon = ({ theme, name, ...props }) => {
  if (name && theme.icons[name]) {
    return React.createElement(theme.icons[name], props);
  }
  if (process.env.NODE_ENV === 'development') {
    if (!name) {
      // eslint-disable-next-line no-console
      console.error(
        'Warning: You did not pass a name to the <Icon /> component!',
      );
    } else if (!theme.icons[name]) {
      // eslint-disable-next-line no-console
      console.error(
        `Warning: You passed: "${name}" as a name to the <Icon /> component, but that value does not exist in the theme!`,
      );
    }
  }
  return React.createElement(theme.icons.fallback, props);
};

export default Icon;
