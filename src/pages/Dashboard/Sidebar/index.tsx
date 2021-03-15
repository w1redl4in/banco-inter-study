import { DEFAULT_TRANSITION } from '../../../constants';
import { Wrapper, AnimatedContainer, AnimatedAmountInvested } from './styles';
import { FiBarChart2 } from 'react-icons/fi';
import AccountBalance from './AccountBalance';

const animation = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      ...DEFAULT_TRANSITION,
    },
  },
};

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <AnimatedContainer variants={animation}>
        <AccountBalance />
        <AnimatedAmountInvested
          whileHover={{ y: -4, transition: DEFAULT_TRANSITION }}
          whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
        >
          Ver Total Investido <FiBarChart2 size="1.6rem" />
        </AnimatedAmountInvested>
        <h1>Sidebar</h1>
      </AnimatedContainer>
    </Wrapper>
  );
};

export default Sidebar;
