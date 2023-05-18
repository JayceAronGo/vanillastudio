import React, { useState, useEffect } from 'react'
import {CgProfile} from "react-icons/cg";
import Valogo from  "../assets/valogo.png";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const links = [
    {
        id:1,
        link:'Our Works'
    },

    {
        id:2,
        link:'Packages'
    },

    {
        id:3,
        link:'About'
    },
 
    {
        id:4,
        link:'Contact'
    },
 ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-20">
        <div>
        <img className=" w-32" src={Valogo} alt="logo" ></img>
        </div>
    <ul className="md:flex justify-center " >
    
    
     {links.map(({id, link}) => (
  <li key={id} className=" pt-6 ml-20 px-16 cursor-pointer cap font-bold font-signature text-center text-white hover:scale-105 duration-300 ">{link}</li>
     ))}
    
    </ul>

    <div></div>
    <div>
        <CgProfile size={'50px'} />
    </div>

    </div>
  )
}

export default Navbar