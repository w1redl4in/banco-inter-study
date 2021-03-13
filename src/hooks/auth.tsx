/* eslint-disable @typescript-eslint/no-redeclare */
import {
  useCallback,
  useContext,
  createContext,
  useState,
  PropsWithChildren,
  useMemo,
} from 'react';

export type User = string;

export type AuthContext = {
  signIn(name: string): void;
  currentUser: User;
  signed: boolean;
  signOut(): void;
};

const AuthContext = createContext<AuthContext | null>(null);

export const AuthContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [currentUser, setCurrentUser] = useState<User>('');
  const [signed, setSigned] = useState(false);

  const signIn = useCallback((name: string) => {
    setCurrentUser(name);
    setSigned((sign) => !sign);
  }, []);

  const signOut = useCallback(() => {
    setCurrentUser('');
    setSigned((sign) => !sign);
  }, []);

  const value = useMemo(
    () => ({
      currentUser,
      signIn,
      signed,
      signOut,
    }),
    [currentUser, signIn, signed, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthHook = (): AuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuthHook must be used within an AuthContextProvider`);
  }

  return context;
};
