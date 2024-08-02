import {useDispatch} from "react-redux";
import {Box, Link} from "@mui/material";
import {
  ContactCard,
  ContactCardContent,
  ContactIconButton,
  ContactTypography
} from "./styledComponents.js";
import {CancelOutlined} from "@mui/icons-material";
import {deleteContact, fetchContacts} from "../../store/contacts/asyncActions.js";
import ContactAvatar from "../ContactAvatar";
import Tags from "../Tags";

const ContactItem = ({id, avatar, name, email, tags}) => {
  const dispatch = useDispatch();

  const deleteContactHandler =  async () => {
    try {
      await dispatch(deleteContact(id));
      dispatch(fetchContacts());
    } catch (e) {
      return e;
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
      <ContactAvatar avatar={avatar} name={name} />
      <Box>
        <ContactCardContent>
          <ContactTypography component="h3" variant="h3">
            {name}
          </ContactTypography>
          <Link href={`mailto:${email}`} color="inherit">
            {email}
          </Link>
          <Tags tags={tags} />
        </ContactCardContent>
      </Box>
    </ContactCard>
  );
};

export default ContactItem;
