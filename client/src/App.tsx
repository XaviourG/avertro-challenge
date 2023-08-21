import { CssBaseline, ThemeProvider } from '@mui/material';
import SecurityStrategyAuditPage from './pages/SecurityStrategyAuditPage';
import DefaultTheme from './core/Theme';
import TopNav from './components/navigation/TopNav';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline/>
      <TopNav/>
      <SecurityStrategyAuditPage />
    </ThemeProvider>
  );
}

export default App;
