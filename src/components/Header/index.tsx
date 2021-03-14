import {
  AnimatedContainer,
  Wrapper,
  AnimatedLeftNav,
  AnimatedRightNav,
  Avatar,
} from './styles';
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import { useAuthHook } from '../../hooks/auth';

const Header: React.FC = () => {
  const { currentUser } = useAuthHook();

  return (
    <AnimatedContainer initial="unMounted" exit="unMounted" animate="mounted">
      <Wrapper>
        <AnimatedLeftNav>
          <BancoInter />
          Internet Banking
        </AnimatedLeftNav>
        <AnimatedRightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <Avatar>{currentUser.charAt(0)}</Avatar>
        </AnimatedRightNav>
      </Wrapper>
    </AnimatedContainer>
  );
};

export default Header;
