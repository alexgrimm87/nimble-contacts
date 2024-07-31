import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchContacts} from "../../store/contacts/asyncActions.js";
import ContactItem from "../ContactItem/index.jsx";
import Preloader from "../Preloader/index.jsx";
import ErrorMessage from "../ErrorMessage/index.jsx";

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
    <div>
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
    </div>
  );
};

export default Contacts;
