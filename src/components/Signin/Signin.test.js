import React from 'react';
import { render, screen } from '@testing-library/react';
import Signup from './Signin';
import { MemoryRouter } from 'react-router-dom';

describe('Signup', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });
});
