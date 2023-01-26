import React from 'react';
import TeamSection from './index';
import { render } from '@testing-library/react';
import 'i18next/dist/cjs/i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

test('TeamSection renders correctly', () => {
  const { container } = render(
    <I18nextProvider i18n={i18n}>
      <TeamSection />
    </I18nextProvider>
  );
  expect(container).toMatchSnapshot();
});
