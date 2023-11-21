import { fireEvent, render, screen } from '@testing-library/react';

import BookMark from './BookMark';

describe("BookMark Component", () => {
  test('renders button with bookmarked icon', () => {
    render(<BookMark isBookMarked={false} />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.getAttribute('aria-label')).toEqual('Bookmark');

    fireEvent.click(button);
    expect(button.getAttribute('aria-label')).toEqual('Remove Bookmark');
  });
})

