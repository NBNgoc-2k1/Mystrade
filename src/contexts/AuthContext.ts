import { createContext, useContext } from 'react'

export enum AuthState {
    login = 'login',
    register = 'register',
    reset = 'reset'
}

export type AuthContextType = {
    authPopup: {
        open: boolean,
        authState: AuthState
    };
    setAuthPopup: (authPopup: any) => void
}

export const AuthContext = createContext<AuthContextType>({
    authPopup: { open: false, authState: AuthState.login },
    setAuthPopup: authPopup => { }
})
export const useAuth = () => useContext(AuthContext);