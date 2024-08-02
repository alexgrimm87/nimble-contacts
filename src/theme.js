import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    allVariants: {
      fontWeight: 500
    },
    h2: {
      marginBottom: '7px',
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: 500
    },
    h3: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 500
    },
  }
});

export default theme;
