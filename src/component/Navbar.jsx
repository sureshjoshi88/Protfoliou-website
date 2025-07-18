import React from 'react'
import { FaBarsProgress } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { CiDark } from "react-icons/ci"
import { MdSunny } from "react-icons/md"
import logos from "../images/portfolio_(1).png"
import { MdCancel } from "react-icons/md";
import { memo } from 'react';


const Navbar = (props) => {
  return (
    <div>
      <nav className={`p-2 fixed top-0 w-full  z-40 ${props.mode==="light"?"bg-violet-50":"bg-mode"} `}>
        <div className='flex justify-between p-2'>
          <div>
            <img className='w-10 h-10 rounded' src={logos} alt="" />
          </div>

          <div className='hidden md:flex'>
            <ul className='flex md:gap-16 gap-10 font-medium '>
              <li><NavLink className={({isActive})=>isActive?'text-blue-400 border-b-2':""} to='/'>Home</NavLink></li>
              <li><NavLink className={({isActive})=>isActive?'text-blue-400 border-b-2':""} to='/about'>About</NavLink></li>
              <li><NavLink className={({isActive})=>isActive?'text-blue-400 border-b-2':""} to='/projects'>Project</NavLink></li>
              <li><NavLink className={({isActive})=>isActive?'text-blue-400 border-b-2':""} to='/contact'>Contact</NavLink></li>
            </ul>
          </div>

          <div>
            {props.mode === "dark" ?<button onClick={()=>props.toglemode()}  className='text-2xl font-semibold text-white cursor-pointer '><MdSunny /></button>: <button onClick={()=>props.toglemode()}  className='text-2xl text-black cursor-pointer font-semibold'><CiDark /></button>}
          </div>
          <div>
            <button  onClick={()=>props.toggleButton()} className='text-2xl md:hidden'><FaBarsProgress /></button>
          </div>
        </div>

<div>
        <div id='side-bar' className={`md:hidden absolute  p-1 top-0.5  h-60 w-30 rounded -right-100 ${props.mode==='light'?'bg-white':'bg-mode'}`}>
          <p className='flex justify-end text-3xl pe-2 text-red-600' onClick={()=>props.removeToggle()}><MdCancel /></p>
            <ul className=' gap-5 font-medium text-xl p-3'>
              <li className='mt-3 cursor-pointer'><NavLink className={({isActive})=>isActive?'text-blue-400 border-b-2':""} to='/'>Home</NavLink></li>
              <li className='mt-3 cursor-pointer'><NavLink className={({isActive})=>isActive?'text-blue-400 border-b-2':""} to='/about'>About</NavLink></li>
              <li className='mt-3 cursor-pointer'><NavLink className={({isActive})=>isActive?'text-blue-400 border-b-2':""} to='/projects'>Project</NavLink></li>
              <li className='mt-3 cursor-pointer'><NavLink className={({isActive})=>isActive?'text-blue-400 border-b-2':""} to='/contact'>Contact</NavLink></li>
            </ul>
          </div>
      </div>
      </nav>
      
    </div>
  )
}

export default memo(Navbar)
