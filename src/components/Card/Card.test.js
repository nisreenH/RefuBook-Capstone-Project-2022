import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  test('renders the card', () => {
    const props = {
      BlogTitle: 'Test Title',
      subTitle: 'Test Subtitle',
      blogImgUrl: 'https://example.com/test.jpg',
      userId: '123'
    };
    const blogId = '456';
    render(<Card props={props} blogId={blogId} />);

    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText(props.BlogTitle)).toBeInTheDocument();
    expect(screen.getByText(props.subTitle)).toBeInTheDocument();
    expect(screen.getByAltText('Test Title')).toBeInTheDocument();
  });
});
