import AppRoutes from './pages/routes';
import { GlobalStyle } from './global-style';
import { ThemeProvider } from './context/theme-switcher';


function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
