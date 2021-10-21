import theme from './theme';

const components = {
  landingPage: {
    title: {
      sm: {
        fontSize: 2.2,
        letterSpacing: 0.03,
        lineHeight: 1.1,
        paddingBottom: 10,
      },
      md: {
        fontSize: 2.6,
        letterSpacing: 0.03,
      },
      color: theme.colors.softLight,
    },
    description: {
      fontSize: 1.6,
      fontWeight: 200,
      letterSpacing: 0.02,
      color: theme.colors.softLight,
    },
  },
  header: {
    height: 70,
    links: {
      fontSize: 0.9,
      fontWeight: 200,
      letterSpacing: 0.06,
      color: theme.colors.whiteLight,
      colorHover: theme.colors.white,
      colorActive: theme.colors.white,
    },
  },
};

export default components;
