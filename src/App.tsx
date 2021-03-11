import Routes from './routes';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { light as theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
