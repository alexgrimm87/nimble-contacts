import {render, screen} from '@testing-library/react';
import ErrorMessage from './index.jsx';

describe('ErrorMessage Component', () => {
  it('renders the error message correctly', () => {
    const error = 'Something went wrong!';

    render(<ErrorMessage error={error} />);
    expect(screen.getByText(`Error: ${error}`)).toBeInTheDocument();
  });

  it('renders the correct error message when given a different message', () => {
    const error = 'Another error occurred!';

    render(<ErrorMessage error={error} />);
    expect(screen.getByText(`Error: ${error}`)).toBeInTheDocument();
  });
});
