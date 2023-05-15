import React from 'react'
import Valogo from  "../assets/valogo.png";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiOutlineCopyrightCircle} from "react-icons/ai";

const Footer = () => {
  return (
    <div className=''>
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

    <div className="text-white  mt-18 pt-10 flex justify-center">
      <AiOutlineCopyrightCircle className="   pb-3 mr-5 " size={'50px'} />
      <h1 className=" text-3xl">2023 Copyright: Vanilla Video Production</h1>
    </div>

    </section>
    </div>
  )
}

export default Footer