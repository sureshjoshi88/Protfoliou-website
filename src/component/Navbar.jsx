import React from 'react'
import { FaBarsProgress } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { CiDark } from "react-icons/ci"
import { MdSunny } from "react-icons/md"
import logos from "../images/portfolio_(1).png"

const Navbar = (props) => {
  return (
    <div>
      <nav className={`p-2 fixed top-0 w-full  z-40 bg-white/30 backdrop-blur-md `}>
        <div className='flex justify-between'>
          <div>
            <img className='w-10 h-10 rounded' src={[logos]} alt="" />
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
