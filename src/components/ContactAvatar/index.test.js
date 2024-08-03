import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactAvatar from './index.jsx';

jest.mock('./styledComponents.js', () => ({
  ContactAvatarStyled: ({src, alt, sx}) => (
    <img src={src} alt={alt} style={sx} />
  )
}));

describe('ContactAvatar Component', () => {
  test('renders with correct src and alt attributes', () => {
    const props = {
      avatar: 'https://example.com/avatar.jpg',
      name: 'Alex',
      size: 72
    };

    const {getByAltText} = render(<ContactAvatar {...props} />);

    const avatarElement = getByAltText('Alex');

    expect(avatarElement).toHaveAttribute('src', props.avatar);
    expect(avatarElement).toHaveAttribute('alt', 'Alex');
    expect(avatarElement).toHaveStyle('height: 72px');
    expect(avatarElement).toHaveStyle('width: 72px');
  });

  test('defaults to size 54 if no size is provided', () => {
    const props = {
      avatar: 'https://example.com/avatar.jpg',
      name: 'Alex'
    };

    const {getByAltText} = render(<ContactAvatar {...props} />);
    const avatarElement = getByAltText('Alex');

    expect(avatarElement).toHaveStyle('height: 54px');
    expect(avatarElement).toHaveStyle('width: 54px');
  });
});
