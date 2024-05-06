import { types } from "../../../src/auth";

describe('Pruebas en "tipos.js"', () => {
    test("should first", () => {

        expect(types).toEqual({ 
            login: "[Auth] Login", 
            logout: "[Auth] Logout" 
        });

    });
});
