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
};

const AuthContext = createContext<AuthContext | null>(null);

export const AuthContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [currentUser, setCurrentUser] = useState<User>('');

  const signIn = useCallback((name: string) => {
    setCurrentUser(name);
  }, []);

  const value = useMemo(
    () => ({
      currentUser,
      signIn,
    }),
    [currentUser, signIn]
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
