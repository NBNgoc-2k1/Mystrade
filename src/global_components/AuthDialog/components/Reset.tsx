import React, { useEffect, useState } from 'react'
import isEmail from 'validator/lib/isEmail';
import AppButton from '../../../global_components/AppButton';
import TextField from '../../../global_components/TextField';
import { useAuth } from '../../../contexts/AuthContext';
import { AuthState } from '../../../contexts/AuthContext'
import { sendPasswordResetEmail } from '@firebase/auth';
import { authentication } from '../../../firebase-config';
import { GetAllUser } from '../../../api/CRUD_API';
import { errorSnackbar, successSnackbar } from '../../../services';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '../../../toastify.css'

const Reset = () => {
    const [email, setEmail] = useState("");
    const [userList, setUserList] = useState([]);
    const [isUserExist, setUserExist] = useState(true);
    const [sendSuccess, setSendSuccess] = useState(false);
    const { authPopup, setAuthPopup } = useAuth()

    const SwitchAuthState = (state: string) => {
        setAuthPopup({ ...authPopup, authState: state })
    }

    useEffect(() => {
        GetAllUser().then((users) => setUserList(users))
    }, [])

    const CheckUserExist = (userEmail: string) => {
        userList.map(user => {
            if (Object.values(user).indexOf(userEmail) === -1) {
                setUserExist(false)
            }
            else {
                sendPasswordResetEmail(authentication,userEmail).then(() => {
                    successSnackbar('Send password reset email succesfully')
                    setUserExist(true)
                    SwitchAuthState(AuthState.login)
                })
                .catch((e) => {
                    errorSnackbar(e.message)
                })
                return
            }
        })
        {
            !isUserExist && errorSnackbar('User not found! Please check email again')
        }
    }

    return (
        <div className="flex flex-col items-center justify-center my-24">
            <ToastContainer style={{ fontFamily: 'Itim, cursive' }} />

            <div className="flex my-4 text-lg sm:text-2xl ">
                <p className="mr-2">Reset Your</p>
                <a
                    href="/"
                    className="hover:underline hover:decoration-2 hover:underline-offset-8 text-brown"
                >MythWorld</a>

                <p className="ml-2">Password</p>
            </div>
            <div className="w-72 m-auto">
                <TextField label='Email' type='email' value={email} onChange={(event: any) => setEmail(event.target.value)} />
            </div>
            <div className="flex sm:text-lg">
                <p>Back to</p>
                <p onClick={() => {
                    SwitchAuthState(AuthState.login)
                }}
                    className="ml-2 text-brown cursor-pointer 
            hover:decoration-brown hover:underline hover:decoration-2 hover:underline-offset-8"
                >Login</p>
            </div>
            <AppButton content="reset" disabled={!isEmail(email)} className="lg:w-24"
                onClick={() => {
                    CheckUserExist(email)
                }}
            />
        </div>
    )
}

export default Reset
