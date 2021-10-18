import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const LayoutWrapper = styled.div`
  margin: 0 auto;
  
  ${({ theme: { pageMargins, maxWidths } }) => `
    max-width: ${maxWidths.content}px;
    padding: 0 ${pageMargins.sm}px; 
  `}

  ${({ theme: { pageMargins, media } }) => media.md`
    padding: 0 ${pageMargins.md}px 0 ${pageMargins.md}px; 
  `}
`;

const Layout = ({ children, logoImage }) => (
  <>
    <Header logoImage={logoImage} />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </>
);

export default Layout;
