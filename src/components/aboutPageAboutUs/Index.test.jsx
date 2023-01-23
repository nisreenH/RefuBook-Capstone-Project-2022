
import OurStory from './Index';
import React from 'react';
import { render, cleanup } from '@testing-library/react';



jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('OurStory component', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { container } = render(<OurStory />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeInTheDocument();
  });
});

