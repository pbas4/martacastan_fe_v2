import { css } from 'styled-components';

const mediaQueryBuilder = (sizes) => Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
      ${sizes[label]} {
        ${css(...args)};
      }
    `;
  return acc;
}, {});

const fontFamily = '"Heebo", "Helvetica", "Arial", sans-serif';

const colors = {
  white: '#F2F2F2',
  softLight: 'rgba(242, 242, 242, .8)',
  whiteLight: 'rgba(242, 242, 242, .5)',
  beige: '#f2eadf',
  black: '#282623',
  backgroundColor: '#282623',
  backgroundColorDark: 'rgba(15, 15, 14)',
  darkBlue: '#014059',
  lightBlue: '#5E9ABF',
  red: '#e94940',
};

const screenWidths = {
  sm: { width: 600 },
  md: { width: 960 },
  lg: { width: 1280 },
  xl: { width: 1920 },
};

const breakpoints = {
  sm: `@media only screen and (min-width: ${screenWidths.sm.width}px)`,
  md: `@media only screen and (min-width: ${screenWidths.md.width}px)`,
  lg: `@media only screen and (min-width: ${screenWidths.lg.width}px)`,
  xl: `@media only screen and (min-width: ${screenWidths.xl.width}px)`,
  landscape: '@media only screen and (orientation: landscape)',
  portrait: '@media only screen and (orientation: portrait)',
};

const media = mediaQueryBuilder(breakpoints);

const maxWidths = {
  content: 1650,
};

const pageMargins = {
  xs: 8,
  sm: 16,
  xm: 24,
  md: 32,
  ml: 46,
  lg: 64,
};

const theme = {
  fontFamily,
  colors,
  screenWidths,
  breakpoints,
  media,
  maxWidths,
  pageMargins,
};

export default theme;
