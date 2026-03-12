import React from 'react'
import { NavLink } from 'react-router'
import Home from './Home'

function Header() {
  return (
    <div className='flex justify-between p-3 px-8 items-center bg-gray-400'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71OmS66kZmpYPs0ej0L6WUWTkb6wq69RCig&s" width="80px" alt="" />
        <nav >
            <ul className='flex justify-between text-center gap-10 p-2'>
                <li>
                    <NavLink to='' className={({isActive}) => isActive ? "text-blue-400 bg-blue-200 p-3" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/productslist' className={({isActive}) => isActive ? "text-blue-400 bg-blue-200 p-3" : ""}>Products list</NavLink>
                </li>
                <li>
                    <NavLink to='/contactus' className={({isActive}) => isActive ? "text-blue-400 bg-blue-200 p-3" : ""}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header