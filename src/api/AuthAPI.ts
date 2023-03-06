import { authentication, database } from '../firebase-config'
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { GetSingleData } from './CRUD_API'

export function LoginAPI(email:string, password:string,clearPass?:any,closePopup?:any) {

    signInWithEmailAndPassword(authentication, email, password)
        .then((userAuth) => {
            GetSingleData('users', userAuth.user.uid).then((user:any) => {
                localStorage.setItem('currentUser',JSON.stringify({...user,uid: userAuth.user.uid}))
                window.location.reload()
            })
            closePopup()
        })
        // display the error if any
        .catch((err) => {
            clearPass()
            alert(err.message)
        });
}

export async function Register(newUser:any, password:string) {
    // Create a new user with Firebase
    await createUserWithEmailAndPassword(authentication, newUser.userEmail, password).then((userAuth) => {
        // Update the newly created user with a display name and a picture
        updateProfile(userAuth.user, {
            displayName: `${newUser.fullName}`,
        })
        setDoc(doc(database, "users", userAuth.user.uid), newUser)
        LoginAPI(newUser.userEmail, password)
    }).catch((error) => {
        alert(error.message)
    })
}

export function Logout() {
    authentication.signOut().then(() => {
        localStorage.removeItem('currentUser')
    })
}


