import React from 'react';
import { useRouter } from 'next/router';
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import store from '@/Redux/store';
import { render, screen } from '@testing-library/react';
import Modal from '.';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
  }));

describe('Modal', () => {
    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
          pathname: '/',
        });
    });
    const mockChoice = {
        id: '1',
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        gender: 'Male',
        species: 'Human',
        status: 'Alive',
        origin: { name: 'Earth' },
        location: { name: 'Earth' },
        episode: ['https://rickandmortyapi.com/api/episode/1'],
    };
    const mockSetOpenModal = jest.fn();

    it('should render character details', async () => {
        render(
            <Provider store={store}>
                <Modal choice={mockChoice as any} setOpenModal={mockSetOpenModal} />
            </Provider>
        );
        expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
        expect(screen.getByText('Gender:')).toBeInTheDocument();
        expect(screen.getByText('Male')).toBeInTheDocument();
        expect(screen.getByText('Species:')).toBeInTheDocument();
        expect(screen.getByText('Human')).toBeInTheDocument();
        expect(screen.getByText('Status:')).toBeInTheDocument();
        expect(screen.getByText('Alive')).toBeInTheDocument();
    });
})