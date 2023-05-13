import React from "react";
import Vapoly from "../assets/vapoly.jpg";
import Valogo from  "../assets/valogo.png";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import { useState } from 'react';

const OurWorks = () => {
  
  return (

    <div className="" >
        <img className="w-full h-full object-cover " src={Vapoly} alt="bgm"></img>
 
    <div className=" flex items-center justify-center ">
        <img className="absolute w-1/2 top-1/4 left-75 z-10 hover:scale-105 duration-300" src={Valogo} alt="logo" ></img>
    </div>
  
    <div className=" flex items-center justify-center ml-6 ">
              <AiFillInstagram className="absolute  filter invert  top-1/2 z-10 ml-40 hover:scale-125 duration-300" size={'50px'} />
              <AiFillYoutube className="absolute  top-1/2 z-10 ml-0 filter invert hover:scale-125 duration-300" size={'50px'} />
              <AiFillFacebook className="absolute  top-1/2 z-10 -ml-40 filter invert hover:scale-125 duration-300" size={'50px'} />

    </div>


    <section className="bg-gray-300 py-20 w-full" >
      <div className="container mx-auto flex  pt-20 space-x-20 pl-40">
        <div className="border border-black border-solid rounded-xl p-4 w-1/2 h-fit bg-white ">
          <div className="py-10 pr-30">
            <h1 className=" text-4xl font-extrabold font-signature pt-5">Commercial</h1>
            <h1 className=" text-2xl font-extrabold font-signature pt-2 pl-2">₱ 40,000</h1>
            <ul className=" list-none py-7 text-2xl font-bold">
              <li className="pt-4">
                  12 hrs of Filming
              </li>
              <li className="pt-4">
                Professional Camera and Audio Equipment
              </li>
              <li className="pt-4">
                1x15 seconds Commercial
              </li>
              <li className="pt-4">
                HD Video Output
              </li>
            </ul>
            <div className=" text-center font-semibold underline text-xl pt-7">
              Price starts only at ₱40,000 and may vary depends on add on and changes.
            </div>
          </div>
          <div className=" cursor-pointer text-sky-600 text-4xl underline  ml-52 pb-20 font-bold">
        <h1 className="">Reserve Now</h1>
      </div>
        </div>

        <div className="border border-none p-4 w-1/3 h-fit  ">
            <div className=" px-4">
            <h1 className=" font-extrabold font-signature text-5xl">Inclusions:</h1>
            <p className=" text-left font-semibold py-10 whitespace-pre-line tracking-wide text-2xl"> Lorem ipsum dolor sit amet, 

                consectetur adipiscing elit, 
                
                sed do eiusmod tempor incididunt ut labore et

                dolore magna aliqua. Ut enim ad minim veniam, 

                quis nostrud exercitation ullamco laboris nisi ut 

                ex ea commodo consequat. Duis aute irure dolor in 

                reprehenderit in voluptate velit esse cillum dolore eu 

                fugiat nulla pariatur. Excepteur sint occaecat 

                cupidatat non proident, sunt in culpa qui officia 

                deserunt mollit anim id est laborum.</p>
            </div>
        </div>
      </div>

    </section>

    <section className="bg-white py-10">
      <div></div>
    </section>


 

    <section className="bg-gray-300 py-16 w-full h-fit" >
      <div className="container mx-auto">
        
      </div>
    </section>


   


    </div>  
  )

}

export default OurWorks