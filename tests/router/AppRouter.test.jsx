const { render, screen } = require("@testing-library/react");
const { AuthContext } = require("../../src/auth");
const { MemoryRouter } = require("react-router-dom");
const { AppRouter } = require("../../src/router/AppRouter");

describe("Pruebas en <AppRouter />", () => {
    
    test("Debe de mostrar el Login si no está autenticado", () => {
        const contextValue = {
            logged: false,
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Login').length).toBe(2); 

    });


    test('debe de mostrar el componente de marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1); 

    });

});
