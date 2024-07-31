import {Box, CircularProgress} from "@mui/material";

const Preloader = () => {
  return (
    <Box sx={{textAlign: 'center'}}>
      <CircularProgress sx={{color: 'grey'}} />
    </Box>
  );
};

export default Preloader;
