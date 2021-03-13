import { PropsWithChildren } from 'react';
import { useTheme } from 'styled-components';
import { AnimatedContainer } from './styles';

export type AuthLayoutProps = {
  background: string;
};

const AuthLayout = (props: PropsWithChildren<AuthLayoutProps>) => {
  const { children, background } = props;
  const { colors } = useTheme();

  return (
    <AnimatedContainer
      initial={false}
      transition={{ duration: 0.35 }}
      animate={{ background }}
      exit={{ background: colors.lightGrey }}
    >
      {children}
    </AnimatedContainer>
  );
};

export default AuthLayout;
