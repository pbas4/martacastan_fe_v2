import React from 'react';
import styled from 'styled-components';

const CrossIconStyled = styled.div`
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 50px;

  ${({ theme: { media } }) => media.md`
    width: 60px;
    height: 60px;
  `}

  ${({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
  `}

  &::after, &::before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => `${theme.colors.white}`};
    top: calc(50% - .5px);
    border-radius: 2px;
    transition: all .3s;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::after, &::before {
      background-color: ${({ theme }) => `${theme.colors.lightBlue}`};
    }
  }
`;

const CrossIcon = ({ onClick }) => (
  <CrossIconStyled onClick={onClick || null} />
);

export default CrossIcon;
