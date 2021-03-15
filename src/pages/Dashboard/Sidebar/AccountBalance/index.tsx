import Button from '../../../../components/Button';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Container, Balance } from './styles';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import BalanceSecret from './BalanceSecret';

const AccountBalance: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isValueVisible, setIsValueVisible] = useState(false);

  return (
    <Container>
      <Balance>
        <span>Saldo em Conta:</span>
        <AnimatePresence>
          {isHidden && <BalanceSecret setIsValueVisible={setIsValueVisible} />}
        </AnimatePresence>
        <div>
          R$ 1,3232.00
          <strong>{isValueVisible}</strong>
        </div>
      </Balance>

      <Button
        variant="transparent"
        onClick={() => setIsHidden((prevState) => !prevState)}
      >
        {isHidden ? <FiEyeOff /> : <FiEye />}
      </Button>
    </Container>
  );
};

export default AccountBalance;
