import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Index Page', () => {
    it('should render the App component inside a Provider with the store and a BrowserRouter', () => {
      render(
        <React.StrictMode>
          <BrowserRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </BrowserRouter>
        </React.StrictMode>
      );
  
      // Use screen.getBy* to test the rendered elements
      expect(screen.getByTestId('root')).toBeInTheDocument();
      expect(screen.getByTestId('app')).toBeInTheDocument();
      expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
    });
  });
  