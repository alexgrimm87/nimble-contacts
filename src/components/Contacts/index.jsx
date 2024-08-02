import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Typography} from "@mui/material";
import {fetchContacts} from "../../store/contacts/asyncActions.js";
import Preloader from "../Preloader";
import ErrorMessage from "../ErrorMessage";
import ContactItem from "../ContactItem";

const Contacts = () => {
  const dispatch = useDispatch();
  const {contacts, loading, error} = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Box sx={{
      width: {xs: '100%', md: '64%'}
    }}>
      <Typography variant="h2" component="h2">
        Contacts
      </Typography>
      {contacts.map((contact) => {
        const companyNameField = contact.fields["company name"];
        const firstNameField = contact.fields["first name"];
        const lastNameField = contact.fields["last name"];
        const emailField = contact.fields["email"];

        const companyName = companyNameField && companyNameField.length > 0 ? companyNameField[0].value : null;
        const firstName = firstNameField && firstNameField.length > 0 ? firstNameField[0].value : "";
        const lastName = lastNameField && lastNameField.length > 0 ? lastNameField[0].value : "";
        const email = emailField && emailField.length > 0 ? emailField[0].value : "";

        return (
          <ContactItem
            key={contact.id}
            avatar={contact.avatar_url}
            name={companyName ? companyName : `${firstName} ${lastName}`}
            email={email}
            tags={contact.tags}
          />
        )
      })}
    </Box>
  );
};

export default Contacts;
