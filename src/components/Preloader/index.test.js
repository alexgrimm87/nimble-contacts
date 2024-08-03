import {render, screen} from '@testing-library/react';
import Preloader from './index.jsx';

jest.mock('@mui/material', () => ({
  CircularProgress: () => <div>Loading...</div>,
}));

jest.mock('./styledComponents.js', () => ({
  PreloaderBox: ({children}) => <div>{children}</div>,
}));

describe('Preloader Component', () => {
  it('renders CircularProgress inside PreloaderBox', () => {
    render(<Preloader />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByText('Loading...').parentElement).toBeInTheDocument();
  });
});
