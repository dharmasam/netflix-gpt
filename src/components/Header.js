import React from 'react'
import { NETFLIX_IMAGE } from '../utils/constants'
const Header = () => {
  return (
    <div className='absolute z-10 bg-gradient-to-br from-gray-950'>
        <img className='w-56' src={NETFLIX_IMAGE} alt='some'></img>
    </div>
  )
}

export default Header