import React from 'react'
import { FaBarsProgress } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { CiDark } from "react-icons/ci"
import { MdSunny } from "react-icons/md"

const Navbar = (props) => {
  return (
    <div>
      <nav className='p-2 fixed top-0 w-full bg-white z-40'>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-2xl'>Portfoliou</h2>
          </div>

          <div>
            <ul className='flex gap-5 '>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/'>Blog</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>

          <div>
            {props.mode === "light" ?<button  className='text-2xl text-white'><MdSunny /></button>: <button  className='text-2xl text-black'><CiDark /></button>}
          </div>
          <div>
            <button className='text-2xl md:hidden'><FaBarsProgress /></button>
          </div>
        </div>


      </nav>
    </div>
  )
}

export default Navbar
