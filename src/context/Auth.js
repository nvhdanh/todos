import React, { useState } from 'react'

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => {},
    logout: () => {}
})

const AuthContextProvider = props => {
    const [authState, setAuthState] = useState(false)

    const handleLogin = () => {
        setAuthState(true)
    }

    const handleLogout = () => {
        setAuthState(false)
    }

    return (
        <AuthContext.Provider value={{
    		isAuth:authState,
    		login:handleLogin,
    		logout:handleLogout
    	}}>
    		{props.children}
    	</AuthContext.Provider>
    )

}

export default AuthContextProvider
