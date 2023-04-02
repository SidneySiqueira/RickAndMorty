import React from 'react';
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/Redux/store';
import Filter from '.';
import { optionsGender, optionsStatus } from '@/utils/options';

describe('Filter component', () => {
    test('renders Filter component without errors', () => {
        const onClose = jest.fn();
        const allCharacters = jest.fn();
        const setTyping = jest.fn();

        const { getByText } = render(
            <Provider store={store}>
                <Filter
                    isOpen={true}
                    onClose={onClose}
                    allCharacters={allCharacters}
                    optionsStatus={optionsStatus}
                    optionsGender={optionsGender}
                    setTyping={setTyping}
                />
            </Provider>
        );
        expect(getByText('Filtro')).toBeInTheDocument();
        expect(getByText('Filtrar')).toBeInTheDocument();
        expect(getByText('Limpar filtros')).toBeInTheDocument();
    });
});