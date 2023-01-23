import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('renders user profile with name and carousel of blogs', () => {
  const user = { displayName: 'John Doe' };
  const blogs = [{
    id: 1,
    title: 'My first blog',
    text: 'This is the text for my first blog.',
    userProfilePic: 'https://via.placeholder.com/150',
    user: 'John Doe'
  }, {
    id: 2,
    title: 'My second blog',
    text: 'This is the text for my second blog.',
    userProfilePic: 'https://via.placeholder.com/150',
    user: 'John Doe'
  }];
  const data = [{ blogs }];

  render(<UserProfile data={data} user={user} />);

  // Check that the user's name is displayed
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();

  // Check that the carousel of blogs is displayed
  expect(screen.getByText(/My first blog/i)).toBeInTheDocument();
  expect(screen.getByText(/My second blog/i)).toBeInTheDocument();

  // Check that the avatar is displayed
  expect(screen.getByAltText(/avatar/i)).toBeInTheDocument();
  
  // Check the link to update profile
  expect(screen.getByTestId('update-profile-link')).toBeInTheDocument();
});
