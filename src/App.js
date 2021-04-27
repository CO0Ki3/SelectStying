import SelectDisplay from './componants/SelectDisplay';
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        
      }
    }
  },
})

function App() {
  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <SelectDisplay />
    </MuiThemeProvider>
  );
}

export default App;
