import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme: { colors } }) => `${colors.backgroundColor}`};

  ${({ theme: { pageMargins, header } }) => `
    height: ${header.height}px;
    padding: 0 ${pageMargins.sm}px; 
  `}

  ${({ theme: { pageMargins, media } }) => media.md`
    padding: 0 ${pageMargins.md}px 0 ${pageMargins.md}px; 
  `}
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.div`
  width: 150px;
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;

  li:first-child {
    margin-right: 5px;
  }

  li {
    cursor: pointer;
    transition: color .3s;

    ${({ theme: { header: { links } } }) => `
      color: ${links.color};
      font-size: ${links.fontSize}em;
      font-weight: ${links.fontWeight};
      letter-spacing: ${links.letterSpacing}em;

      &:hover {
        color: ${links.colorHover};
      }
    `}

    a {
      padding: 10px;
    }
  }

  a.active-link-selected {
    ${({ theme: { header: { links } } }) => `
      color: ${links.colorActive};
    `}
  }
`;
