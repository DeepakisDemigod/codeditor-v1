import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-sec flex justify-around items-center">
      <Link to="/home">
        <img src={logo} alt="logo" className="w-36 object-contain opacity-60"/>
      </Link>
      <Link to="/home/auth">
        <div className="font-almarai bg-pri px-2 py-1 ">
          <button>start coding</button>
        </div>
      </Link>
    </div>
  )
}

export default Navbar   
