import { usePresence } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { SHOW_SECRET_ANIMATION } from './animations';
import { AnimatedContainer } from './styles';

export type BalanceSecretProps = {
  setIsValueVisible: Dispatch<SetStateAction<boolean>>;
};

const BalanceSecret: React.FC<BalanceSecretProps> = ({ setIsValueVisible }) => {
  const [isPresent] = usePresence();

  useEffect(() => {
    setTimeout(() => setIsValueVisible(!isPresent), isPresent ? 120 : 0);
  });

  return (
    <AnimatedContainer
      key="balance-secret"
      initial={false}
      variants={SHOW_SECRET_ANIMATION}
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    />
  );
};

export default BalanceSecret;
