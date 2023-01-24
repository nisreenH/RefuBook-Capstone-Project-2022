import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should display the navbar and routes', () => {
    render(<App />);
    const navbar = screen.getByTestId('navbar-test');
    expect(navbar).toBeInTheDocument();

    // check home route
    const home = screen.getByText(/home-section/i);
    expect(home).toBeInTheDocument();

    // check about route
    const about = screen.getByText(/about/i);
    expect(about).toBeInTheDocument();

    // check signup route
    const signup = screen.getByText(/signup/i);
    expect(signup).toBeInTheDocument();

    // check signin route
    const signin = screen.getByText(/signin/i);
    expect(signin).toBeInTheDocument();

    // check blogs route
    const blogs = screen.getByText(/blogs/i);
    expect(blogs).toBeInTheDocument();
  });
});
