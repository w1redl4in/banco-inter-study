/* eslint-disable @typescript-eslint/no-redeclare */
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
  useMemo,
} from 'react';

export type ThemeState = 'light' | 'dark';

export type AppThemeContext = {
  currentTheme: ThemeState;
  handleTheme(): void;
};

const AppThemeContext = createContext<AppThemeContext | null>(null);

export const AppThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeState>('light');

  const handleTheme = useCallback(() => {
    setCurrentTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  }, []);

  const value = useMemo(
    () => ({
      currentTheme,
      handleTheme,
    }),
    [currentTheme, handleTheme]
  );

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = (): AppThemeContext => {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error(`useAppTheme must be used within an AppThemeProvider`);
  }

  return context;
};
