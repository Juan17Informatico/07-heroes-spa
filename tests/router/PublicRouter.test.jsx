import { render, screen } from "@testing-library/react";
import { PublicRouter } from "../../src/router/PublicRouter";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en el componente <PublicRouter />", () => {
    test("Debe de mostrar el children si no está autenticado", () => {
        const contextValue = {
            logged: false,
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRouter>
                    <h1>Ruta pública</h1>
                </PublicRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Ruta pública")).toBeTruthy();
        // screen.debug();
    });

    test("debe de navegar si está autenticado", () => {
        const contextValue = {
            logged: true,
            user: {
                name: "Strider",
                id: "ABC123",
            },
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/login"]}>
                    <Routes>
                        <Route path="marvel" element={<h1>Página de marvel</h1>} />
                        <Route
                            path="login"
                            element={
                                <PublicRouter>
                                    <h1>Ruta pública</h1>
                                </PublicRouter>
                            }
                        />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Página de marvel')).toBeTruthy();

    });
});
