import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import isEmail from 'validator/lib/isEmail';
import AppButton from '../../../global_components/AppButton';
import TextField from '../../../global_components/TextField';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthState } from '../../../contexts/AuthContext'
import { LoginAPI } from '../../../api/AuthAPI';

const Login = (props:any) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [showPass, setShowPass] = useState(false)
    const { authPopup, setAuthPopup } = useAuth()

    function toggleShowPass() {
        setShowPass(!showPass)
    }

    const SwitchAuthState = (state: string) => {
        setAuthPopup({ ...authPopup, authState: state })
        setEmail('')
        setPass('')
    }

    return (
        <div className="flex flex-col items-center justify-center my-16">
            <div className="flex text-lg max-[414px]:text-base">
                <p>Don't have an account?</p>
                <p onClick={() => {
                    SwitchAuthState(AuthState.register)
                }}
                    className="ml-2 text-brown cursor-pointer 
                    hover:decoration-brown hover:underline hover:decoration-2 hover:underline-offset-8"
                >Register</p>
            </div>
            <div className="flex my-4 text-3xl">
                <p className="mr-2">Login to</p>
                <a
                    href="/"
                    className="hover:underline hover:decoration-2 hover:underline-offset-8 text-brown"
                >MythWorld</a>
            </div>
            <div className="w-72 m-auto">
                <TextField label='Email' type='text' value={email} onChange={(event: any) => setEmail(event.target.value)} />
                <TextField label='Password' type={showPass ? 'text' : 'password'}
                    value={pass} onChange={(event: any) => setPass(event.target.value)}
                    icon={showPass ? faEyeSlash : faEye} iconClick={toggleShowPass}
                />
                <p onClick={() => {
                    SwitchAuthState(AuthState.reset)
                }}
                    className="ml-2 text-dark-grey cursor-pointer text-center text-lg
                    hover:decoration-dark-grey hover:underline hover:decoration-2 hover:underline-offset-8"
                >Forgot your password?</p>
            </div>
            <AppButton content="Login" className="lg:w-24" disabled={!(isEmail(email) && (pass !== ''))}
                onClick={() => {
                    LoginAPI(email, pass, () => setPass(''), () => props.onClose())
                }}
            />
        </div>
    )
}

export default Login
