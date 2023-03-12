import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import AppButton from '../../../global_components/AppButton';
import TextField from '../../../global_components/TextField';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthState } from '../../../contexts/AuthContext'
import { Register } from '../../../api/AuthAPI';
import isEmail from 'validator/lib/isEmail';

const SignUp = (props: any) => {
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showPass, setShowPass] = useState(false)
    const { authPopup, setAuthPopup } = useAuth()

    function toggleShowPass() {
        setShowPass(!showPass)
    }

    const SignUp = (email: string, pass: string, fullname: string, address: string, phone: string) => {
        var newUser = {
            'userEmail': email,
            'fullName': fullname,
            "blogs": [],
            'bookmark': [],
            'address': address,
            'phoneNumber': phone,
            'orders': [],
            'favoriteProducts': []
        }
        Register(newUser, pass);
        props.onClose()
    }

    const SwitchAuthState = (state: string) => {
        setAuthPopup({ ...authPopup, authState: state })
    }

    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <div className="flex mt-3 mb-2 text-lg max-[414px]:text-sm">
                <p>Already have an account?</p>
                <p onClick={() => {
                    SwitchAuthState(AuthState.login)
                }}
                    className="ml-2 text-brown cursor-pointer 
            hover:decoration-brown hover:underline hover:decoration-2 hover:underline-offset-8"
                >Login</p>
            </div>
            <div className="flex my-2 sm:my-4 text-lg sm:text-2xl">
                <p className=" mr-2">Create Your</p>
                <a
                    className="text-brown hover:underline hover:decoration-2 hover:underline-offset-8"
                    href='/'
                >MythWorld</a>
                <p className="ml-2">Account</p>
            </div>
            <div className="w-72 m-auto">
                <TextField label='Full name' type='text' value={fullName} placeholder='e.g. John Wick'
                    onChange={(event: any) => setFullName(event.target.value)} />
                <TextField label='Email' type='email' value={email} onChange={(event: any) => setEmail(event.target.value)} />
                <TextField label='Password' type={showPass ? 'text' : 'password'}
                    value={pass} onChange={(event: any) => setPass(event.target.value)}
                    icon={showPass ? faEyeSlash : faEye} iconClick={toggleShowPass}
                />
                <TextField label='Phone number' type='text' value={phoneNumber} onChange={(event: any) => setPhoneNumber(event.target.value)} />
                <TextField label='Address' type='text' value={address} onChange={(event: any) => setAddress(event.target.value)} />

            </div>
            <AppButton content='Sign Up' disabled={!isEmail(email) || pass.length < 8} onClick={() => {
                SignUp(email, pass, fullName ,address,phoneNumber)
            }} />
        </div>
    )
}

export default SignUp
