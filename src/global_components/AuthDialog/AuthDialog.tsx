import { faClose } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import IconButton from '../IconButton'
import Login from './components/Login'
import Reset from './components/Reset'
import SignUp from './components/SignUp'
import auth_image from "../../assets/images/auth/auth_image.png"
import { useAuth } from '../../contexts/AuthContext'
import Modal from '../Modal'

const AuthDialog = () => {
    const {authPopup,setAuthPopup} = useAuth()

    function toggleOpenAuthDialog() {
        setAuthPopup({...authPopup,open:false})
    }

    return (
        <Modal open={authPopup.open}>
            <IconButton icon={faClose} className='absolute left-[85%]
                top-[15%]
                sm:top-[27%]
                lg:top-[22%]
                xl:left-[80%]'
                iconClass='text-3xl text-teal lg:text-white'
                onClick={toggleOpenAuthDialog}
            />
            <div className="flex w-5/6 bg-light-silver rounded-xl
                sm:w-4/5
                xl:w-2/3
            ">
                <div className="w-full lg:w-5/12 my-2">
                    {authPopup.authState === 'login' && <Login onClose={toggleOpenAuthDialog}/>}
                    {authPopup.authState === 'register' && <SignUp onClose={toggleOpenAuthDialog}/>}
                    {authPopup.authState === 'reset' && <Reset />}
                </div>
                <img className="max-lg:hidden lg:w-7/12 h-auto rounded-r-xl m-0 bg-brown"
                    src={auth_image}
                    alt="god in auth"
                />
            </div>
        </Modal>
    )
}

export default AuthDialog
