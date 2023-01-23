import React from 'react';
import { render, fireEvent ,screen } from '@testing-library/react';
import Footer from './Footer';
import { UserAuth } from '../../context/authContext';
import {i18next } from 'i18next';
import { db } from '../../firebase';
import { Firestore } from 'firebase/firestore';

jest.mock('i18next', () => ({
  changeLanguage: jest.fn(),
}));
jest.mock('../../context/authContext', () => {
    return {
    UserAuth: jest.fn().mockReturnValue({
      user: {
        displayName: db.userName,
        email: db.emaill,
        photoURL: db.photoURL,
      },
      logOut: jest.fn().mockResolvedValue(),
    }),
  }
});

describe('Footer', () => {
    test('should display the user name and email, and call logOut when sign out button is clicked', () => {
     
      expect(screen.getByTestId('user-name').textContent).toBe('Test User');
      expect(screen.getByTestId('user-email').textContent).toBe('testuser@example.com');
      expect(screen.getByTestId('user-img').src).toBe('https://example.com/testuser.jpg');
  
      const signOutButton = screen.getByTestId('sign-out-button');
      fireEvent.click(signOutButton);
      expect(UserAuth().logOut).toHaveBeenCalled();
    });
  
    test('should change the language when a different option is selected in the select element', () => {
         render(<Footer />);
        const select = screen.getByTestId('language-select');
    
        fireEvent.change(select, { target: { value: 'ar' } });
        expect(i18next.changeLanguage).toHaveBeenCalledWith('ar');
      });
    });
