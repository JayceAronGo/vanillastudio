import React from "react";
import Vanillabgm from "../assets/vanillabgm.png";
import Vawork1 from "../assets/vawork1.jpg";
import Vawork2 from "../assets/vawork2.JPG";
import Vawork3 from "../assets/vawork3.jpg";
import Vawork4 from "../assets/vawork4.jpg";
import Valogo from  "../assets/valogo.png";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import { useState } from 'react';

const OurWorks = () => {
  
  return (

    <div className="" >
        <img className="w-full h-full object-cover " src={Vanillabgm} alt="bgm"></img>
 
    <div className=" flex items-center justify-center ">
        <img className="absolute w-1/2 top-1/4 left-75 z-10 hover:scale-105 duration-300" src={Valogo} alt="logo" ></img>
    </div>
  
    <div className=" flex items-center justify-center ml-6 ">
              <AiFillInstagram className="absolute  filter invert  top-1/2 z-10 ml-40 hover:scale-125 duration-300" size={'50px'} />
              <AiFillYoutube className="absolute  top-1/2 z-10 ml-0 filter invert hover:scale-125 duration-300" size={'50px'} />
              <AiFillFacebook className="absolute  top-1/2 z-10 -ml-40 filter invert hover:scale-125 duration-300" size={'50px'} />

    </div>


    <section className="bg-gray-300 py-10 w-full" >
      <div className="container mx-auto">
      </div>
    </section>

    <section className="bg-white  py-40">
      <div className="container mx-auto"><h1 className="text-center text-8xl ml-2 font-signature font-black">
      Our Works</h1>
      </div>
      <div className="flex flex-wrap m-6 w-30 h-30 ml-6">

        <div className="w-1/2 h-1/2">
          <img src={Vawork1} className="object-cover w-full h-full  py-14 px-16" />
        </div>

        <div className="w-1/2 h-1/2">
          <img src={Vawork2} className="object-cover w-full h-full py-14 px-16" />
        </div>

        <div className="w-1/2 h-1/2">
          <img src={Vawork3} className="object-cover w-full h-full px-16" />
        </div>

        <div className="w-1/2 h-1/2">
         <img src={Vawork4} className="object-cover w-full h-full px-16" />
        </div>
      </div>
    </section>

    <section className="bg-gray-300 py-16 w-full" >
      <div className="container mx-auto">
        <h1 className="text-center text-6xl ml-2 font-signature  font-extrabold">Explore Vanilla Production Studio in Different Fields</h1>
      </div>
    </section>

    <section className="bg-white py-10 w-full" >
      <div className="container mx-auto">
      </div>
    </section>


    </div>


      
  )

  
}

export default OurWorks