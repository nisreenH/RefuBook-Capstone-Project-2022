import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamSection from './TeamSection';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

describe('TeamSection', () => {
  it('renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <TeamSection />
      </I18nextProvider>
    );

    expect(screen.getByText('Team Heading')).toBeInTheDocument();
    expect(screen.getByText('Country1')).toBeInTheDocument();
    expect(screen.getByText('Country2')).toBeInTheDocument();
    expect(screen.getByText('Country3')).toBeInTheDocument();
    expect(screen.getByText('Country4')).toBeInTheDocument();
    expect(screen.getByText('Team Member 1')).toBeInTheDocument();
    expect(screen.getByText('Team Member 2')).toBeInTheDocument();
    //...and so on for all the team members' names
  });
});
