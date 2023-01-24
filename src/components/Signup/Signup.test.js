import React from 'react';
import { render, screen } from '@testing-library/react';
import Signup from './Signup';
import { MemoryRouter } from 'react-router-dom';

describe('Signup', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    expect(screen.getByText('Already a member?')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
