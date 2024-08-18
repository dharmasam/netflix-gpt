import React from 'react'
import { NETFLIX_IMAGE } from '../utils/constants'
const Header = () => {
  return (
    <div className='absolute z-10'>
        <img className='w-44' src={NETFLIX_IMAGE} alt='some'></img>
    </div>
  )
}

export default Header