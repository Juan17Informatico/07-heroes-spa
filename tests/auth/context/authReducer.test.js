import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/tipos/tipos";



describe('Pruebas en el authReducer', () => {

    const name = 'Juan'; 
    // const user = { id: 'ABC', name}; 


    test('Debe de retornar el estado por defecto', () => {

        const stateInitial = { logged: false }; 

        const { logged } = authReducer(stateInitial, {});

        expect(logged).toBeFalsy();
    }); 

    test('Debe de llamar el login y establecer el User', () => {

        const stateInitial = { logged: false };
        const action = {
            type: types.login,
            payload: {
                id: 'ABC', 
                name: name
            }
        }; 

        const  { logged, user }  = authReducer(stateInitial, action);

        expect(logged).toBeTruthy();
        expect(user.name).toBe(name);

    });

    test('Debe de (logout) borrar el name del usuario y logged en false', () => {

        const stateInitial = {
            logged: true,
            user: { id: '123', name: name }
        }
        const action = {
            type: types.logout,
        }; 

        const  { logged, user }  = authReducer( stateInitial, action );


        expect(logged).toBeFalsy();
        expect(user).toBeUndefined();

    });

})