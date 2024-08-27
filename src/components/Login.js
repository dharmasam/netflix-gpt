import React, { useRef, useState } from 'react'
import Header from './Header'
import { LOGIN_BACKGROUND_IMAGE } from '../utils/constants'
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const email = useRef(null);
    const password = useRef(null);
    const toggleSignUpIn = () => {
        setSignInForm(!isSignInForm);
    }

    const handleOnClick = () => {
        const message = validate(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;
        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }
    }

    return (
        <div className='flex flex-col'>
            <Header />
            <div className='absolute'>
                <img src={LOGIN_BACKGROUND_IMAGE} alt='some'></img>
            </div>
            <div className='flex flex-col'>
                <div /* onSubmit={(e) => e.preventDefault()} */ className='absolute bg-black flex flex-col justify-center w-3/12  mx-auto right-0 left-0 my-60 items-center rounded-lg bg-opacity-80 min-h-[600px]'>
                    <h2 className='text-white font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                    {errorMessage && <p className='bg-[#D89D31] 2px m-4 p-4 rounded-sm max-w-80'>{errorMessage}</p>}
                    {!isSignInForm && <input className='w-4/6 my-3 p-3 rounded-sm bg-slate-500 text-white' type='text' placeholder='Full Name'></input>}

                    <input ref={email} className='w-4/6 my-3 p-3 rounded-sm bg-slate-500 text-white' type='email' placeholder='Email or mobile number'></input>
                    <input ref={password} className='w-4/6 my-3 p-3 rounded-sm bg-slate-500 text-white' type='password' placeholder='Password'></input>
                    <button className='w-4/6 my-3 p-3 h-11 bg-orange-600 rounded-sm text-white' onClick={handleOnClick} >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <h3 className='text-white'>OR</h3>
                    <div className='flex'>
                        <p className='text-white'>{isSignInForm ? "New to Netflix?" : "Already a member?"}</p>
                        <p className='text-white underline mx-2 cursor-pointer' onClick={toggleSignUpIn}> {isSignInForm ? "Sign Up Now" : "Sign In now"}</p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Login