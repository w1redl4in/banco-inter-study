import { PropsWithChildren } from 'react';
import { AnimatedContainer } from './styles';

const AuthLayout: React.FC = ({ children }: PropsWithChildren<unknown>) => {
  return <AnimatedContainer>{children}</AnimatedContainer>;
};

export default AuthLayout;
