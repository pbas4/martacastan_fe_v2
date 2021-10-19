import { motion } from 'framer-motion';
import styled from 'styled-components';

const ArrowContainer = styled(motion.div)`
  width: 30px;
  display: block;
  margin-right: 10px;
`;

const Arrow = () => (
  <ArrowContainer className="arrow">
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
      <path
        d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
        fill="#fff"
        fillRule="evenodd"
      />
    </motion.svg>
  </ArrowContainer>
);

export default Arrow;
