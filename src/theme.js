import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    allVariants: {
      fontWeight: 500
    },
    h3: {
      fontSize: '16px',
      fontWeight: 500
    }
  }
});

export default theme;
