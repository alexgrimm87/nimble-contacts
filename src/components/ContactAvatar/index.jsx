import {ContactAvatarStyled} from "./styledComponents.js";

const ContactAvatar = ({avatar, name}) => <ContactAvatarStyled src={avatar} alt={`${name}`} />;

export default ContactAvatar;
