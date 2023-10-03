import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'
import google from '../Assets/google-logo.png'

export const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
        <img src={google} 
        className='w-[10%] relative top-[7px] left-[70px] max-sm:w-[100px] max-sm:left-[20px]' />
      </Link>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? '💡' : '🌙 '}</button>
    </div>
    <Search/>
  </div>
  )
}
