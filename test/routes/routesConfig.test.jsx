import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { routesConfig } from "../../src/routes/routesConfig";

describe('Pruebas en routesConfig', () => {

    test('debe de mostrar el login si no está autenticado', () => {
        const router = createMemoryRouter( routesConfig, {
            initialEntries: ['/marvel', '/login'],
            initialIndex: 1,
        })
        
        const contextValue = {
            logged: false,
        }
        
        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={ router }>
                </RouterProvider>
            </AuthContext.Provider>
        );
        expect(screen.getByText("LoginPage")).toBeTruthy();
    });

    test('debe de mostrar el componente de marvel si está autenticado', () => {
        const router = createMemoryRouter( routesConfig, {
            initialEntries: ['/login', '/marvel'],
            initialIndex: 1,
        }) 
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Monica Geller'
            }
        } 
        render(
            <AuthContext.Provider value={ contextValue }>
                <RouterProvider router={ router }>
                </RouterProvider>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Marvel Comics")).toBeTruthy();
    });

});