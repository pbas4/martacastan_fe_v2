import React from 'react';
import styled from 'styled-components';

const BackIconStyled = styled.div`
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
    width: 50%;
    height: 1px;
    background-color: ${({ theme }) => `${theme.colors.white}`};
    top: calc(50% - .5px);
    border-radius: 2px;
    transition: all .3s;
    transform-origin: right;
  }

  &::before {
    transform: rotate(135deg);
  }

  &::after {
    transform: rotate(-135deg);
  }

  &:hover {
    &::after, &::before {
      background-color: ${({ theme }) => `${theme.colors.lightBlue}`};
    }
  }
`;

const BackIcon = ({ onClick }) => (
  <BackIconStyled onClick={onClick} />
);

export default BackIcon;
