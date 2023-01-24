import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Blogs from './Blogs';
import { UserAuth } from '../../context/authContext';
import 'firebase';
import 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('firebase/firestore', () => ({
  db: {
    collection: jest.fn().mockReturnValue({
      get: jest.fn().mockReturnValue({
        forEach: jest.fn(),
      }),
    }),
  },
}));

describe('Blogs component', () => {
  afterEach(cleanup);
  it('handle redirection when user is not logged in', () => {
    const navigate = jest.fn();
    const { getByTextId } = render(
      <UserAuth.Provider value={{ user: null }}>
        <Blogs />
      </UserAuth.Provider>
    );

    const createBlogBtn = getByTextId('create your blog');
    createBlogBtn.click();
    expect(navigate).toHaveBeenCalledWith('/signup');
  });
});
