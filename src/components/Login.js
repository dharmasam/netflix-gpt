import React, { useState } from 'react'
import Header from './Header'
import { LOGIN_BACKGROUND_IMAGE } from '../utils/constants'

const Login = () => {
    const[isSignInForm, setSignInForm] = useState(true);
    const toggleSignUpIn = () => {
        setSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={LOGIN_BACKGROUND_IMAGE} alt='some'></img>
            </div>
            <div className='flex flex-col'>
                <form className='absolute bg-black flex flex-col justify-center w-3/12  mx-auto right-0 left-0 my-60 items-center rounded-lg bg-opacity-80 min-h-[600px]'>
                    <h2 className='text-white font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                    {!isSignInForm && <input className='w-4/6 my-3 p-3 rounded-sm bg-slate-500 text-white' type='text' placeholder='Full Name'></input>}

                    <input className='w-4/6 my-3 p-3 rounded-sm bg-slate-500 text-white' type='email' placeholder='Email or mobile number'></input>
                    <input className='w-4/6 my-3 p-3 rounded-sm bg-slate-500 text-white' type='password' placeholder='Password'></input>
                    <button className='w-4/6 my-3 p-3 h-11 bg-orange-600 rounded-sm text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <h3 className='text-white'>OR</h3>
                    <div className='flex'>
                        <p className='text-white'>{isSignInForm ? "New to Netflix?" : "Already a member?"}</p>
                        <p className='text-white underline mx-2 cursor-pointer' onClick={toggleSignUpIn}> {isSignInForm ? "Sign Up Now" : "Sign In now"}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login