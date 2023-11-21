import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import StarRating from './StarRating';

const renderComponent = (props) => {
  return render(<StarRating {...props} />);
};
describe("StarRating Component", () => {
  test('renders star rating buttons', () => {
    renderComponent();
    const buttons = screen.getAllByRole('button', { ariaLabel: 'star rating' });

    expect(buttons.length).toEqual(5);
  });

  test('should able to hover and set star rating', () => {
    const handleChange = jest.fn();
    const handleHover = jest.fn();
    renderComponent({ readOnly: false, defaultRating: 0, onChangeValue: handleChange, onChangeHover: handleHover });
    const buttons = screen.getAllByRole('button');

    fireEvent.mouseEnter(buttons[2]);
    fireEvent.mouseLeave(buttons[2]);
    expect(handleHover).toHaveBeenCalledTimes(2);

    fireEvent.focus(buttons[2]);
    fireEvent.blur(buttons[2]);
    expect(handleHover).toHaveBeenCalledTimes(4);

    fireEvent.click(buttons[2]);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('should not able to hover and set star rating', () => {
    const handleChange = jest.fn();
    const handleHover = jest.fn();
    renderComponent({ readOnly: true, defaultRating: 3, onChangeValue: handleChange, onChangeHover: handleHover });
    const buttons = screen.getAllByRole('button');

    fireEvent.mouseEnter(buttons[2]);
    fireEvent.mouseLeave(buttons[2]);
    expect(handleHover).not.toHaveBeenCalledTimes(2);

    fireEvent.focus(buttons[2]);
    fireEvent.blur(buttons[2]);
    expect(handleHover).not.toHaveBeenCalledTimes(4);

    fireEvent.click(buttons[2]);
    expect(handleChange).not.toHaveBeenCalledTimes(1);
  });
})

