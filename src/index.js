import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#e0e0e0',
      dark: '#252936',
      contrastText: '#252936',
    },
    secondary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#252936',
      contrastText: '#8e8e8e',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

