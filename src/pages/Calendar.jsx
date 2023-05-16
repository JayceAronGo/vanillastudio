import React from 'react'
import Vapoly from "../assets/vapoly.jpg";
import Valogo from  "../assets/valogo.png";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";


const Calendar = () => {
  return (
    <div className=''>
        <img className="w-full h-full object-cover " src={Vapoly} alt="bgm"></img>

   
    <div className="flex items-center justify-center">

        <div className="absolute border-none z-14 top-1/4 right-1/4 rounded-xl p-4 w-1/2 h-fix  pb-40 bg-white  bg-opacity-75">
          <div className=" py-60">
              <div className="">

              {/* Calendar API */}
              <div>

              </div>
              
              </div>
          
          </div>
        </div>

        <div className='flex absolute z-16 top-3/4 right-1/4'>
          <div className=' flex pr-3'>
          <div className=" py-20 ">
            <div className=" cursor-pointer text-center font-bold  text-2xl py-4 px-16 border-4 border-none  rounded-3xl text-white bg-sky-600 hover:scale-105 duration-300">
              <h1>Go Back</h1>
            </div>
          </div>

          <div className=" py-20 px-40  ">
            <div className=" cursor-pointer text-center font-bold  text-2xl py-4 px-16 border-4 border-none  rounded-3xl text-white bg-sky-600 hover:scale-105 duration-300">
              <h1>Continue</h1>
            </div>
          </div>
          </div>
        </div>

    </div>

 <section className="bg-gray-300 py-10 w-full" >
      <div className="container mx-auto">
      </div>
    </section>
    </div>
  )
}
export default Calendar