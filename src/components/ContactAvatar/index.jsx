import {ContactAvatarStyled} from "./styledComponents.js";

const ContactAvatar = ({avatar, name, size = 54}) => {
  return (
    <ContactAvatarStyled
      src={avatar}
      alt={`${name}`}
      sx={{
        height: `${size}px`,
        width: `${size}px`
      }}
    />
  );
};

export default ContactAvatar;
