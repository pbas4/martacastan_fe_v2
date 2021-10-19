import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ListContainer = styled(motion.ul)`
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.media.md`
    width: 40vw;
  `}
`;

export const ListItem = styled(motion.li)`
  font-size: 1.3em;
  font-weight: 400;
  list-style: none;
  letter-spacing: 0.05em;
  width: 100%;
  border-top: 1px solid rgba(242, 242, 242, 0.6);
  color: #f2f2f2;
  cursor: pointer;
  overflow: hidden;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.media.md`
    font-size: 1.6em;
    flex-direction: row;
  `}

  ${(props) => props.isLast && ' border-bottom: 1px solid rgba(242, 242, 242, 0.6); '}

  div.title {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  span {
    font-weight: 300;
    font-size: 0.5em;
    color: rgba(242, 242, 242, 0.8);
    text-transform: none;
  }
`;

export const ListItemImage = styled.div`
  width: 100%;
  height: 250px;
  padding-bottom: 10px;
`;

export const ItemContent = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
`;

export const FilterContainer = styled(motion.ul)`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 200;
  list-style: none;
  color: rgba(242, 242, 242, 0.8);
  margin-bottom: 1em;

  li:first-child {
    padding-left: 0 !important;
  }
`;

export const FilterItem = styled(motion.li)`
  font-size: 1.2em;
  padding: 0 10px;
  transition: color 0.3s;

  ${({ theme: { colors } }) => `
    color: ${colors.white};

    &:hover {
      color: ${colors.lightBlue};
    }
  `}

  ${({ theme: { media } }) => media.md`
    font-size: 1.5em;
  `}

  ${({ isSelected, theme: { colors } }) => isSelected && `
    color: ${colors.lightBlue};
  `}
`;
