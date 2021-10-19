import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  /* ul[class], */
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  html {
    box-sizing: border-box;
    font-smoothing: antialiased;
    overflow-y: auto;
    text-size-adjust: 100%;
    white-space: inherit;
    word-break: break-word;
    word-wrap: break-word;
    overscroll-behavior: contain;

    /* Prevent browser jumping on scroll */
    height: 100%;
    overflow: hidden;
  }

  body {
    font-size: 100%;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: ${theme?.colors?.backgroundColor};
    font-family: ${theme?.fontFamily};
    overscroll-behavior: contain;
    overflow-y: hidden;

    /* Prevent browser jumping on scroll */
    height: 100%;
    overflow: auto;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* Style links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
export default GlobalStyles;
