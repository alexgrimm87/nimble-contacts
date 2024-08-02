import {Box} from "@mui/material";
import CreateContact from "../../components/CreateContact";
import Contacts from "../../components/Contacts";

const Home = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: {xs: 'column', md: 'row'},
      justifyContent: 'space-between',
      alignItems: {xs: 'center', md: 'unset'}
    }}>
      <CreateContact margin="0 40px 0 0" />
      <Contacts />
    </Box>
  );
};

export default Home;
