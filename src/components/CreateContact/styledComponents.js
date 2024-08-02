import {styled} from "@mui/material/styles";
import {Box, InputLabel, TextField} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

export const CreateBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '32%',
  minWidth: '280px',
  top: 0
});

export const CreateInputLabel = styled(InputLabel)({
  marginBottom: '2px !important',
  paddingLeft: '8px',
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: 400,
  color: '#000'
});

export const CreateTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '48px',
    borderRadius: '8px'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#aaa'
    }
  }
});

export const CreateLoadingButton = styled(LoadingButton)({
  marginTop: '6px !important',
  borderRadius: 4,
  border: '1px solid #aaa',
  backgroundColor: '#fff !important',
  boxShadow: 'unset !important',
  padding: '10px 20px !important',
  width: '100%',
  color: '#000 !important',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  textTransform: 'capitalize',
  transition: 'all 300ms ease',
  '&:hover': {
    borderColor: '#000'
  },
  '&.Mui-disabled': {
    color: 'transparent !important'
  }
});
