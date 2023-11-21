import { fireEvent, render, screen } from '@testing-library/react';

import Accordion from './Accordion';

test('renders learn react link', () => {
  render(<Accordion title={'Section 1'} >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
  </Accordion>);
  const linkElement = screen.getByText(/Section 1/i);
  expect(linkElement).toBeInTheDocument();
  const button = screen.queryByTestId('chevron')
  fireEvent.click(button)
  const element = screen.getByText(/Lorem ipsum dolor/i)
  expect(element).toBeInTheDocument();

});
