import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cce656',
    },
    secondary: {
      main: '#f35e78',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 200,
    },
    h2: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"Mulish", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Mulish", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    },
    caption: {
      fontFamily: '"Mulish", "Helvetica", "Arial", sans-serif',
    },
    subtitle1: {
      fontFamily: '"Mulish", "Helvetica", "Arial", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Mulish", "Helvetica", "Arial", sans-serif',
    },
    fontFamily: '"Mulish", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;