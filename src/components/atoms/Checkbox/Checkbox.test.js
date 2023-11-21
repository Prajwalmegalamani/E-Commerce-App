import { render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

describe("Testing Checkbox", () => {
  it('should test if checkbox is present', () => {
    render(<Checkbox />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument();
  })
  it('should be disabled when disabled prop is passed', () => {
    render(<Checkbox disabled="true" />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeDisabled();
  })
  it('should be checked when checked prop is passed', () => {
    render(<Checkbox checked={true} onChangeHandler={jest.fn()} />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeChecked();
  })

})