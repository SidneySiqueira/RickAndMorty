import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '@/Redux/store';
import Cards from ".";

describe("Cards component", () => {
    test("renders Cards component with given characters", () => {
        const characters = [
            {
                id: 1,
                name: "Rick Sanchez",
                image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            },
            {
                id: 2,
                name: "Morty Smith",
                image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            },
        ];

        const setChoice = jest.fn();
        const setOpenModal = jest.fn();
        const setLoading = jest.fn();

        const { getByTestId } = render(
            <Provider store={store}>
                <Cards
                    characters={characters as any}
                    setChoice={setChoice}
                    setOpenModal={setOpenModal}
                    setLoading={setLoading}
                />
            </Provider>
        );

        const boxCardElement = getByTestId("box-card");

        expect(boxCardElement).toBeInTheDocument();
        expect(boxCardElement.children.length).toBe(2);
    });
});