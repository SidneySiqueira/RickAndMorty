import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import store from '@/Redux/store';
import Search from '.';

test('renders Search component', () => {
    const allCharacters = jest.fn();
    const setTyping = jest.fn();
    const setNumberPage = jest.fn();
    const { getByTestId } = render(
        <Provider store={store}>
            <Search 
            allCharacters={allCharacters}
            typing={''}
            setTyping={setTyping} 
            setNumberPage={setNumberPage} />
        </Provider>
    );
    const searchComponent = getByTestId('box-search');
    expect(searchComponent).toBeInTheDocument();
});