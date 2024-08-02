import {useForm} from "react-hook-form";
import {Typography} from "@mui/material";
import {
  CreateBox,
  CreateInputLabel,
  CreateLoadingButton,
  CreateTextField
} from "./styledComponents.js";
import {useDispatch, useSelector} from "react-redux";
import {postContact} from "../../store/createContact/asyncActions.js";
import {fetchContacts} from "../../store/contacts/asyncActions.js";

const avatarDemo = 'https://static.intercomassets.com/avatars/800277/square_128/custom_avatar-1542751821.png';

const CreateContact = ({margin}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.createContact);

  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
    setError
  } = useForm();

  const handleSubmitForm = async (data) => {
    const {firstName, lastName} = data;

    if (!firstName && !lastName) {
      setError("firstName", {
        type: "manual",
        message: "First Name or Last Name must be filled",
      });
      setError("lastName", {
        type: "manual",
        message: "First Name or Last Name must be filled",
      });
      return;
    }

    try {
      const contactData = {
        record_type: 'person',
        privacy: {
          edit: null,
          read: null,
        },
        owner_id: null,
        fields: {
          'first name': [{ value: data.firstName || ' ', modifier: '', label: 'first name' }],
          'last name': [{ value: data.lastName || ' ', modifier: '', label: 'last name' }],
          email: [{ value: data.email, modifier: '', label: 'email' }]
        },
        avatar_url: avatarDemo
      };
      await dispatch(postContact(contactData));
      dispatch(fetchContacts());
      reset();
    } catch (e) {
      return e;
    }
  };

  return (
    <CreateBox
      component="form"
      sx={{
        '& .MuiInputBase-root': {
          m: '0 0 13px 0',
          width: '100%'
        },
        margin: {xs: '0 0 33px 0', md: `${margin}`},
        position: {xs: 'static', md: 'sticky'},
        height: {xs: 'auto', md: '100vh'}
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Typography variant="h2" component="h2">
        Create Contact
      </Typography>
      <CreateInputLabel shrink htmlFor="firstName">
        First Name
      </CreateInputLabel>
      <CreateTextField
        id="firstName"
        fullWidth={true}
        {...register('firstName')}
        error={!!errors.firstName}
        helperText={errors.firstName && errors.firstName.message}
      />
      <CreateInputLabel shrink htmlFor="lastName">
        Last Name
      </CreateInputLabel>
      <CreateTextField
        id="lastName"
        fullWidth={true}
        {...register('lastName')}
        error={!!errors.lastName}
        helperText={errors.lastName && errors.lastName.message}
      />
      <CreateInputLabel shrink htmlFor="email">
        Email
      </CreateInputLabel>
      <CreateTextField
        id="email"
        fullWidth={true}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address'
          }
        })}
        error={!!errors.email}
        helperText={errors.email && errors.email.message}
      />
      <CreateLoadingButton
        loading={loading}
        type="submit"
        variant="contained"
      >
        Add Contact
      </CreateLoadingButton>
    </CreateBox>
  );
};

export default CreateContact;
