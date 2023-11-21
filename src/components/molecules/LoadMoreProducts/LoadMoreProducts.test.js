import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../../redux/store';
import LoadMoreProducts from './LoadMoreProducts';

test("load more Component", () => { 
        render(<Provider store={store}><LoadMoreProducts loadMore={jest.fn()} /></Provider>);
        const buttonElement = screen.getByText("Load More");
        expect(buttonElement).toBeInTheDocument();
        fireEvent.click( buttonElement )   
})
