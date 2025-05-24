import React from 'react'
import { FaBarsProgress } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { CiDark } from "react-icons/ci"
import { MdSunny } from "react-icons/md"

const Navbar = (props) => {
  return (
    <div>
      <nav className={`p-2 fixed top-0 w-full  z-40 ${props.mode==="dark"?"bg-blue-900":"bg-white"}`}>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-2xl'>Portfoliou</h2>
          </div>

          <div>
            <ul className='flex gap-5 font-medium '>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/'>Blog</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>

          <div>
            {props.mode === "dark" ?<button onClick={()=>props.toglemode()}  className='text-2xl font-semibold text-white cursor-pointer'><MdSunny /></button>: <button onClick={()=>props.toglemode()}  className='text-2xl text-black cursor-pointer font-semibold'><CiDark /></button>}
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
