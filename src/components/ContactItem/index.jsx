import {Box, Link} from "@mui/material";
import {
  ContactCard,
  ContactCardContent,
  ContactIconButton,
  ContactTypography
} from "./styledComponents.js";
import {CancelOutlined} from "@mui/icons-material";
import ContactAvatar from "../ContactAvatar";
import Tags from "../Tags";

const ContactItem = ({avatar, name, email, tags}) => {

  return (
    <ContactCard>
      <ContactIconButton aria-label="delete" size="large">
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
