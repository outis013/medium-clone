import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header bg-yellow-400 p-2'>
        <div className='header-content w-[75%] m-auto flex justify-between items-center'>
            <div className='logo ' ><h1 className='text-[2.5rem]'>Medium</h1></div>
            <nav className='nav '>
                <ul className='nav-container flex gap-6 items-center justify-end'>
                    <li className='nav-item'><Link to='ourstory' > Our story </Link></li>
                    <li className='nav-item'> <Link to='membership' >Membership</Link> </li>
                    <li className='nav-item'> <Link to='write'>Write</Link> </li>
                    <li className='nav-item'> <Link to='signin'>Sign In</Link> </li>
                    <li className='nav-item text-white rounded-xl px-4  py-1 bg-black'> <Link to='getstarted'>Get started</Link> </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header