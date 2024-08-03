import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, Link} from "react-router-dom";
import {Box, Link as MuiLink} from "@mui/material";
import {ContactTypography} from "../../components/ContactItem/styledComponents.js";
import {ContactBox} from "./styledComponents.js";
import {fetchContactById} from "../../store/contacts/asyncActions.js";
import Preloader from "../../components/Preloader";
import ErrorMessage from "../../components/ErrorMessage";
import ContactAvatar from "../../components/ContactAvatar";
import Tags from "../../components/Tags";
import AddTagForm from "../../components/AddTagForm";

const Contact = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {contact, isContactFetching, error} = useSelector((state) => state.contacts);

  const companyNameField = contact.fields?.["company name"];
  const firstNameField = contact.fields?.["first name"];
  const lastNameField = contact.fields?.["last name"];
  const emailField = contact.fields?.["email"];

  const companyName = companyNameField && companyNameField.length > 0 ? companyNameField[0].value : null;
  const firstName = firstNameField && firstNameField.length > 0 ? firstNameField[0].value : "";
  const lastName = lastNameField && lastNameField.length > 0 ? lastNameField[0].value : "";
  const email = emailField && emailField.length > 0 ? emailField[0].value : "";

  useEffect(() => {
    dispatch(fetchContactById(id));
  }, [dispatch, id]);

  if (isContactFetching) {
    return <Preloader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
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
      <Box sx={{marginBottom: '35px'}}>
        {!!contact?.tags?.length && (
          <ContactTypography component="h3" variant="h3">
            Tags
          </ContactTypography>
        )}
        <Tags tags={contact.tags} />
      </Box>
      <AddTagForm id={id} tags={contact.tags} />
    </ContactBox>
  );
};

export default Contact;
