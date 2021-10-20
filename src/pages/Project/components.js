import styled from 'styled-components';

export const MainImageWrapper = styled.div`
  width: 100vw;
  height: 60vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  margin-top: 60vh;
  position: relative;
  width: 100%;
  padding-top: ${({ theme: { pageMargins } }) => pageMargins.md}px;
`;

export const Title = styled.h1`
  ${({ theme: { landingPage } }) => `
    color: ${landingPage.title.color};
    font-size: ${landingPage.title.sm.fontSize}em;
    font-weight: ${landingPage.title.sm.fontWeight};
    letter-spacing: ${landingPage.title.sm.letterSpacing}em;
    line-height: ${landingPage.title.sm.lineHeight}em;
    padding-bottom: ${landingPage.title.sm.paddingBottom}px;
  `}

  ${({ theme, theme: { landingPage } }) => theme.media.md`
    font-size: ${landingPage.title.md.fontSize}em;
    letter-spacing: ${landingPage.title.md.letterSpacing}em;
  `}
`;

export const Categories = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const Category = styled.p`
  font-size: 14px;
  padding-right: 10px;

  ${({ theme: { colors } }) => `
    color: ${colors.lightBlue};
  `}
`;

export const Description = styled.div`
  columns: 2;
  
  ${({ theme: { landingPage, media } }) => media.md && `
    color: ${landingPage.description.color};
    font-size: 1em;
    font-weight: ${landingPage.description.fontWeight};
    letter-spacing: ${landingPage.description.letterSpacing}em;
  `}
`;

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  width: 50%;
  padding: 2%;
`;
