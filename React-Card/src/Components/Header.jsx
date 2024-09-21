import React from 'react'
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <nav className='bg-slate-900 text-cyan-300 text-xl flex justify-between items-center p-2 pr-2 h-20'>

        <h2 className='text-3xl'>Logo Here</h2>

        <div className='flex space-x-8 items-center'>
          <Link to={'/'}>Home</Link>
          <Link to={'/cart'} className="flex items-center text-3xl">
            <FiShoppingBag className='text-3xl mr-2'/>
          </Link>
        </div>

      </nav>
    </>
  )
}

export default Header;
