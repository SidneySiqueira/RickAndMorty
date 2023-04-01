import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import store from '@/Redux/store';
import Search from '.';

test('renders Search component', () => {
    const setCharacters = jest.fn();
    const setLoading = jest.fn();
    const { getByTestId } = render(
        <Provider store={store}>
            <Search setCharacters={setCharacters} setLoading={setLoading} />
        </Provider>
    );
    const searchComponent = getByTestId('box-search');
    expect(searchComponent).toBeInTheDocument();
});