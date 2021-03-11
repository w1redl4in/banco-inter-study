import { PropsWithChildren } from 'react';
import { AuthContextProvider } from './auth';

export const RootProvider: React.FC = ({
  children,
}: PropsWithChildren<unknown>) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
