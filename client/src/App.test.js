import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to the W+R Studios Front End Challenge title', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to the W\+R Studios Front End Challenge/i);
  expect(welcomeMessage).toBeInTheDocument();
});
