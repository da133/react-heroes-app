import { Navbar } from "../../../src/ui/components/Navbar";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { fireEvent, render, screen } from "@testing-library/react";
import { routesConfig } from "../../../src/routes/routesConfig";
import { MemoryRouter, useNavigate, createMemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en el componente de <Navbar />', () => {
    
    const contextValue = {
        logged: true, 
        user: { 
            id: 'ABC', 
            name: 'Ross Geller' 
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ross Geller') ).toBeTruthy();
    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        const logoutBtn = screen.getByLabelText( 'logout-button' );
        fireEvent.click( logoutBtn );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate).toHaveBeenCalledWith('/login', {'replace': true});
    });

});