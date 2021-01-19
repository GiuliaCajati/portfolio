import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';//withRouter

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
  <BrowserRouter>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

