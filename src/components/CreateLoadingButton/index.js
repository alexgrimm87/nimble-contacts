import {styled} from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";

export const CreateLoadingButton = styled(LoadingButton)({
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
