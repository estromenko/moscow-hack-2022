import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    info: {
      main: 'rgb(255, 255, 255)',
    },
    primary: {
      main: 'rgb(255, 255, 255)',
      contrastText: 'rgb(0, 0, 0)',
    },
    secondary: {
      main: '#CC2222',
      contrastText: 'rgb(255, 255, 255)',
    },
  },
});

export default theme;
