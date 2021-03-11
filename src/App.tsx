import Routes from './routes';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import * as themes from './styles/theme';
import { useAppTheme } from './hooks/theme';

function App() {
  const { currentTheme } = useAppTheme();

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
