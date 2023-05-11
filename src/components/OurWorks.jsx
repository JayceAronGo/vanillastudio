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

<section className="bg-black py-8 w-full" >
<div>
  <div className="container ml-5 flex justify-end">
    <div className=" text-white text-2xl flex  ml-6">
      <h1 className=" mr-72 font-medium">Get connected with us on social networks:</h1>
    
      <div className=" filter invert ml-96 pl-96 ">
          <AiFillInstagram className=" w-10 absolute filter invert  ml-40 hover:scale-125 duration-300" size={'50px'} />
          <AiFillYoutube className="  w-10 absolute ml-60 filter invert hover:scale-125 duration-300" size={'50px'} />
          <AiFillFacebook className=" w-10 absolute ml-20 filter invert hover:scale-125 duration-300" size={'50px'} />
      </div>
</div>
    </div>
  </div>

  <div className="container flex justify-start pt-16  pl-2">
  <div>
  <img className=" w-32 ml-24" src={Valogo} alt="logo" ></img>
  </div>

  <div className="text-white text-3xl  pl-96 font-extrabold flex justify-between ">
     <div className=" pl-24 ">Links</div> 
     <div className="pl-60">Contact</div> 
     <div></div>
     <div className="pl-80">Overview</div>

    </div>


  </div>
  

  <div className="text-white text-2xl pl-20 flex " >
    <div className=" border border-transparent p-2 w-1/4  h-28">
      <p>Here you can use rows and columns to organize your footer content, Lorem ipsum dolor sit amet, consecteture</p>
      </div>

      <div className=" border border-transparent p-2  h-28 ml-36">
      <ul className=" list-none">
        <li>Packages</li>
        <li>FAQs</li>
        <li>Terms and Conditions</li>
      </ul>
      </div>

      <div className=" border border-transparent p-2  h-32  ml-16">
      <ul className=" list-none">
        <li>Parada, Valenzuela City PH</li>
        <li className="underline">vanillastudio@gmail.com</li>
        <li>+ 00 000 000 00</li>
        <li>+ 00 000 000 00</li>
      </ul>
      </div>

      <div className=" border border-transparent p-2  h-28 ml-32">
      <ul className=" list-none">
        <li>Our Works</li>
        <li>Packages</li>
        <li>About</li>
        <li>Contact</li>

      </ul>
      </div>

    </div>

<div className="text-white  mt-28 flex justify-center">
  <AiFillCopyrightCircle className="   pb-3 mr-5 " size={'50px'} />
  <h1 className=" text-3xl">2023 Copyright: Vanilla Video Production</h1>
</div>

</section>
      
  )

  
}

export default OurWorks