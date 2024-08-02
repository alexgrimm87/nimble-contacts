import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {CancelOutlined} from "@mui/icons-material";
import {Box, Link as MuiLink} from "@mui/material";
import {
  ContactCard,
  ContactCardContent,
  ContactIconButton,
  ContactTypography
} from "./styledComponents.js";
import {deleteContact, fetchContacts} from "../../store/contacts/asyncActions.js";
import ContactAvatar from "../ContactAvatar";
import Tags from "../Tags";

const ContactItem = ({id, avatar, name, email, tags}) => {
  const dispatch = useDispatch();

  const deleteContactHandler =  async () => {
    if (window.confirm('Do you want to remove the contact?')) {
      try {
        await dispatch(deleteContact(id));
        dispatch(fetchContacts());
      } catch (e) {
        return e;
      }
    }
  }

  return (
    <ContactCard>
      <ContactIconButton
        aria-label="delete"
        size="large"
        onClick={deleteContactHandler}
      >
        <CancelOutlined />
      </ContactIconButton>
      <Link to={`contact/${id}`}>
        <ContactAvatar avatar={avatar} name={name} />
      </Link>
      <Box>
        <ContactCardContent>
          <Link to={`contact/${id}`}>
            <ContactTypography component="h3" variant="h3">
              {name}
            </ContactTypography>
          </Link>
          <MuiLink href={`mailto:${email}`} color="inherit">
            {email}
          </MuiLink>
          <Tags tags={tags} />
        </ContactCardContent>
      </Box>
    </ContactCard>
  );
};

export default ContactItem;
