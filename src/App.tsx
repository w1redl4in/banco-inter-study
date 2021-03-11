import Routes from './routes';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import * as themes from './styles/theme';
import { useAppTheme } from './hooks/theme';
import { RootProvider } from './hooks';

function App() {
  const { currentTheme } = useAppTheme();

  return (
    <RootProvider>
      <ThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </RootProvider>
  );
}

export default App;
