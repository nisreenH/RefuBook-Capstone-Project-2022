import React from 'react';
import { screen, render } from '@testing-library/react';
import Testimonials from './Testimonials';

test('Displays correct text from translation library', () => {
  render(<Testimonials />);
  expect(screen.getByText(/testimonial-title/i)).toBeInTheDocument();
  expect(screen.getByText(/first.text/i)).toBeInTheDocument();
  expect(screen.getByText(/first.whoSay/i)).toBeInTheDocument();
  expect(screen.getByText(/first.position/i)).toBeInTheDocument();
  expect(screen.getByText(/partners-title/i)).toBeInTheDocument();
});
