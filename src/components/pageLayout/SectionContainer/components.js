import styled from 'styled-components';

export const SectionTitle = styled.h1`
  font-size: 1em;
  font-weight: 200;
  letter-spacing: .1em;

  ${({ theme: { colors } }) => `
    color: ${colors.whiteLight};
    `}

  ${({ theme: { media } }) => media.md`
    font-size: 1em;
  `}
`;

export const FullDivider = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;

  ${({ bgColor }) => `
    background: ${bgColor};
  `}
`;
