import { render, screen } from '@testing-library/react';

import InclusionCard from './InclusionCard';

const MOCK_TITLE = "test";
describe("InclusionCard Component", () => {
    test('renders product inclusion heading', () => {
        render(<InclusionCard title={MOCK_TITLE} />);

        const titleElement = screen.getByText(MOCK_TITLE);

        expect(titleElement).toBeInTheDocument();
    });
})
