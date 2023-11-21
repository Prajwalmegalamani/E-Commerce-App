import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LinkTo from './LinkTo';

describe("Testing link", () => {
    it('should test if link works', () => {
        render(<BrowserRouter>
            <LinkTo to={'testing'}>Testing</LinkTo>
        </BrowserRouter>)
        expect(screen.getByRole('link', { name: 'Testing' })).toBeTruthy();
        const links = screen.getAllByRole("link")
        expect(links[0].textContent).toEqual("Testing");
        expect(links[0].href).toContain("/testing");

    })

})