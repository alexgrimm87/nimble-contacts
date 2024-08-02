import {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {Box, Link as MuiLink} from "@mui/material";
import {instanceAuth} from "../../services/api.js";
import {ContactTypography} from "../../components/ContactItem/styledComponents.js";
import Preloader from "../../components/Preloader/index.jsx";
import ContactAvatar from "../../components/ContactAvatar/index.jsx";
import Tags from "../../components/Tags/index.jsx";
import {ContactBox} from "./styledComponents.js";

const Contact = () => {
  const [contact, setContact] = useState();
  const {id} = useParams();
  const navigate = useNavigate();

  const companyNameField = contact?.fields?.["company name"];
  const firstNameField = contact?.fields?.["first name"];
  const lastNameField = contact?.fields?.["last name"];
  const emailField = contact?.fields?.["email"];

  const companyName = companyNameField && companyNameField.length > 0 ? companyNameField[0].value : null;
  const firstName = firstNameField && firstNameField.length > 0 ? firstNameField[0].value : "";
  const lastName = lastNameField && lastNameField.length > 0 ? lastNameField[0].value : "";
  const email = emailField && emailField.length > 0 ? emailField[0].value : "";

  useEffect(() => {
    (async () => {
      try {
        const {data} = await instanceAuth.get(`/v1/contact/${id}`);
        setContact(data.resources[0]);
      } catch (error) {
        alert('Error when getting the contact!');
        navigate('/');
      }
    })();
  }, []);

  if (!contact) {
    return <Preloader />;
  }

  return (
    <ContactBox>
      <Link to="/">Go back</Link>
      <Box sx={{display: 'flex', margin: '20px 0 27px 0'}}>
        <ContactAvatar
          avatar={contact.avatar_url}
          name={companyName ? companyName : `${firstName} ${lastName}`}
          size={76}
        />
        <Box sx={{margin: '13px 0 0 15px'}}>
          <ContactTypography component="h3" variant="h3">
            {companyName ? companyName : `${firstName} ${lastName}`}
          </ContactTypography>
          <MuiLink href={`mailto:${email}`} color="inherit">
            {email}
          </MuiLink>
        </Box>
      </Box>
      <Box>
        <ContactTypography component="h3" variant="h3">
          Tags
        </ContactTypography>
        <Tags tags={contact.tags} />
      </Box>
    </ContactBox>
  );
};

export default Contact;
