import {CircularProgress} from "@mui/material";
import {PreloaderBox} from "./styledComponents.js";

const Preloader = () => {
  return (
    <PreloaderBox>
      <CircularProgress sx={{color: 'grey'}} />
    </PreloaderBox>
  );
};

export default Preloader;
