import styled from 'styled-components';

// TODO: do this responsive properly
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  ${({ theme }) => theme.media.md`
    flex-direction: row;
  `}
`;

export const SideContainer = styled.div`
  width: 100%;

  ${({ theme }) => theme.media.md`
    width: 50%;
  `}
`;

export const DescriptionTitle = styled.h2`
  font-size: 1.4em;
  font-weight: 200;
  color: ${({ theme: { colors } }) => `${colors.white}`};
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.2em;
  font-weight: 200;
  color: ${({ theme: { colors } }) => `${colors.softLight}`};
  line-height: 1.6em;
  border-bottom: 1px solid rgba(242, 242, 242, 0.6);
  padding-bottom: 16px;
  margin-bottom: 16px;

  ${({ theme }) => theme.media.md`
    padding-bottom: 32px;
    margin-bottom: 32px;
  `}
`;

export const SocialLinkWrapper = styled.div`
  margin-top: 16px;
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme: { colors } }) => `${colors.softLight}`};

  span {
    font-size: 1.4em;
    font-weight: 400;
    padding-right: 16px;
  }

  a {
    color: ${({ theme: { colors } }) => `${colors.lightBlue}`};
    font-size: 1em;
    font-weight: 200;
  }
`;
