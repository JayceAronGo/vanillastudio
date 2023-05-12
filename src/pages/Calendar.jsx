import React from 'react'
import Vapoly from "../assets/vapoly.jpg";
import Valogo from  "../assets/valogo.png";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";


const Calendar = () => {
  return (
    <div>
        <img className="w-full h-full object-cover " src={Vapoly} alt="bgm"></img>
    
    <div className="flex items-center justify-center">

        <div className=' absolute border-none z-14 top-1/4 left-1/4 rounded-xl p-4 w-1/3 h-fit bg-white'>

        </div>
    </div>







        <div className=" flex items-center justify-center ">
     <img className="absolute w-1/2 top-1/4 left-75 z-10 hover:scale-105 duration-300" src={Valogo} alt="logo" ></img>
    </div>

        <div className=" flex items-center justify-center ml-6 ">
           <AiFillInstagram className="absolute  filter invert  top-1/2 z-10 ml-40 hover:scale-125 duration-300" size={'50px'} />
           <AiFillYoutube className="absolute  top-1/2 z-10 ml-0 filter invert hover:scale-125 duration-300" size={'50px'} />
           <AiFillFacebook className="absolute  top-1/2 z-10 -ml-40 filter invert hover:scale-125 duration-300" size={'50px'} />
        

    </div>
    </div>
  )
}
export default Calendar