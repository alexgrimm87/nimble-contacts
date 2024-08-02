import {styled} from "@mui/material/styles";
import {
  Card,
  CardContent,
  IconButton,
  Typography
} from "@mui/material";

export const ContactCard = styled(Card)({
  position: 'relative',
  display: 'flex',
  marginBottom: '30px',
  padding: '16.5px 45px 25px 17.5px',
  width: '100%',
  background: '#ededed',
  boxShadow: 'unset',
  '&:last-child': {
    marginBottom: 0
  }
});

export const ContactIconButton = styled(IconButton)({
  position: 'absolute',
  top: '9px',
  right: '19px',
  padding: 0,
  color: '#000'
});

export const ContactCardContent = styled(CardContent)({
  flex: '1 0 auto',
  padding: 0,
  margin: '7px 0 0 14.5px'
});

export const ContactTypography = styled(Typography)({
  textTransform: 'capitalize'
});
