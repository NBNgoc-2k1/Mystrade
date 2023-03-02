import React, { useState } from 'react'
import { AuthContext, AuthState } from '../contexts/AuthContext'

const index = (props:any) => {
    const [authPopup,setAuthPopup] = useState({ open: false, authState: AuthState.login})
    return (
        <AuthContext.Provider value={{authPopup,setAuthPopup}} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default index
