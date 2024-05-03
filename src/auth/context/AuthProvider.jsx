import { useReducer } from "react";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";
import { types } from "../tipos/tipos";

const initialState = {
    logged: false,
}

const init = () => {
    const user= JSON.parse(localStorage.getItem('user')); 

    return{
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState, init);

    const login = ( name = '' ) => {

        const user = { id: 'ABC0', name}

        const action = {
            type: types.login,
            payload: {
                id: 'ABC', 
                name: name
            } 
        }

        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action);
    }
    
    return (
        <AuthContext.Provider value={{
            authState,
            login: login
        }}>
            { children }
        </AuthContext.Provider>
    ); 

}
