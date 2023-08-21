import { CssBaseline, ThemeProvider } from '@mui/material';
import SecurityStrategyAuditPage from './pages/SecurityStrategyAuditPage';
import DefaultTheme from './core/Theme';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline/>
      <SecurityStrategyAuditPage />
    </ThemeProvider>
  );
}

export default App;
