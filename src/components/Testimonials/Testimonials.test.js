import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Testimonials from './Testimonials';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

afterEach(cleanup);

describe('Testimonials component', () => {
  test('renders the testimonials title', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Testimonials />
      </I18nextProvider>
    );
    expect(screen.getByText('Testimonials')).toBeInTheDocument();
  });

  test('renders the first testimonial text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Testimonials />
      </I18nextProvider>
    );
    expect(screen.getByText('First testimonial text')).toBeInTheDocument();
  });

  test('renders the second testimonial text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Testimonials />
      </I18nextProvider>
    );
    expect(screen.getByText('Second testimonial text')).toBeInTheDocument();
  });

  test('renders the partners title', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Testimonials />
      </I18nextProvider>
    );
    expect(screen.getByText('Our Partners')).toBeInTheDocument();
  });
});

