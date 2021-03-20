import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cross finger emoji', () => {
  render(<App />);
  const crossFingerElement = screen.getByText(/🤞🏻/i);
  expect(crossFingerElement).toBeInTheDocument();
});
