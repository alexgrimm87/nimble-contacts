import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './index.jsx';

jest.mock('../../components/CreateContact', () => () => <div>CreateContact Component</div>);
jest.mock('../../components/Contacts', () => () => <div>Contacts Component</div>);

describe('Home Component', () => {
  test('renders CreateContact and Contacts components', () => {
    const { getByText } = render(<Home />);

    expect(getByText('CreateContact Component')).toBeInTheDocument();
    expect(getByText('Contacts Component')).toBeInTheDocument();
  });
});
