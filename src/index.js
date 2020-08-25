import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
