import React from 'react'
import Vapoly from "../assets/vapoly.jpg";
import Valogo from  "../assets/valogo.png";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";

 const Packages = () => {
  return (
    <div>
        <img className="w-full h-full object-cover " src={Vapoly} alt="bgm"></img>
 
 <div className=" flex items-center justify-center ">
     <img className="absolute w-1/2 top-1/4 left-75 z-10 hover:scale-105 duration-300" src={Valogo} alt="logo" ></img>
 </div>

 <div className=" flex items-center justify-center ml-6 ">
        <AiFillInstagram className="absolute  filter invert  top-1/2 z-10 ml-40 hover:scale-125 duration-300" size={'50px'} />
        <AiFillYoutube className="absolute  top-1/2 z-10 ml-0 filter invert hover:scale-125 duration-300" size={'50px'} />
        <AiFillFacebook className="absolute  top-1/2 z-10 -ml-40 filter invert hover:scale-125 duration-300" size={'50px'} />
 </div>

 <section className="bg-gray-300 py-auto  w-full" >
    <div>
        <h1 className='text-center font-bold text-6xl py-20'>Basic Packages</h1>
        
        <div className="flex px-20 space-x-20 pb-20 pt-6">
            <div className="border border-black border-solid rounded-xl p-4 w-1/3 h-fit bg-white">
            <div className="py-10 pr-30">
            <h1 className=" text-4xl font-extrabold font-signature pt-5">Commercial</h1>
            <h1 className=" text-2xl font-extrabold font-signature pt-2 pl-2">₱ 40,000</h1>
            <ul className=" list-disc py-7  pl-7 text-2xl font-bold">
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
            <div className=" text-center font-semibold underline text-xl pt-7 pb-6">
              Price starts only at ₱40,000 and may vary depends on add on and changes.
            </div>
            <div className=" cursor-pointer text-center font-bold  text-2xl py-4 border-4 border-solid border-sky-600  rounded-3xl text-sky-600 hover:scale-105 duration-300">
              <h1>See Details</h1>
            </div>
          </div>
            </div>

            <div className="border border-black border-solid rounded-xl p-4 w-1/3 h-fit bg-white">
            <div className="py-10 pr-30">
            <h1 className=" text-4xl font-extrabold font-signature pt-5">Documentary Film</h1>
            <h1 className=" text-2xl font-extrabold font-signature pt-2 pl-2">₱ 200,000</h1>
            <ul className=" list-none py-7 text-2xl font-bold">
              <li className="pt-4">
                  12 hrs of Filming
              </li>
              <li className="pt-4">
                Professional Camera and Audio Equipment
              </li>
              <li className="pt-4">
                1x10-15 seconds Commercial
              </li>
              <li className="pt-4">
                HD Video Output
              </li>
            </ul>
            <div className=" text-center font-semibold underline text-xl pt-7 pb-6">
              Price starts only at ₱200,000 and may vary depends on add on and changes.
            </div>
            <div className=" cursor-pointer text-center font-bold  text-2xl py-4 border-4 border-solid border-sky-600  rounded-3xl text-sky-600 hover:scale-105 duration-300">
              <h1>See Details</h1>
            </div>
          </div>
            </div>

            <div className="border border-black border-solid rounded-xl p-4 w-1/3 h-fit bg-white">
            <div className="py-10 pr-30">
            <h1 className=" text-4xl font-extrabold font-signature pt-5">Corporate AVP</h1>
            <h1 className=" text-2xl font-extrabold font-signature pt-2 pl-2">₱ 75,000</h1>
            <ul className=" list-none py-7 text-2xl font-bold">
              <li className="pt-4">
                  12 hrs of Filming
              </li>
              <li className="pt-4">
                Professional Camera and Audio Equipment
              </li>
              <li className="pt-4">
                1x2-3 seconds Commercial
              </li>
              <li className="pt-4">
                HD Video Output
              </li>
            </ul>
            <div className=" text-center font-semibold underline text-xl pt-7 pb-6">
              Price starts only at ₱75,000 and may vary depends on add on and changes.
            </div>
            <div className=" cursor-pointer text-center font-bold  text-2xl py-4 border-4 border-solid border-sky-600  rounded-3xl text-sky-600 hover:scale-105 duration-300">
              <h1>See Details</h1>
            </div>
            </div>
            </div>
        </div>

        
    </div>

    <div className='pb-20'>
        <h1 className='text-center font-bold text-6xl pt-10 pb-10'>4K Packages</h1>
        <div className="flex px-20 space-x-20 pb-20 pt-6">
            <div className="border border-black border-solid rounded-xl p-4 w-1/3 h-fit bg-white">
            <div className="py-10 pr-30">
            <h1 className=" text-4xl font-extrabold font-signature pt-5">Commercial</h1>
            <h1 className=" text-2xl font-extrabold font-signature pt-2 pl-2">₱ 80,000</h1>
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
                4K Video Output
              </li>
            </ul>
            <div className=" text-center font-semibold underline text-xl pt-7 pb-6">
              Price starts only at ₱80,000 and may vary depends on add on and changes.
            </div>
            <div className=" cursor-pointer text-center font-bold  text-2xl py-4 border-4 border-solid border-sky-600  rounded-3xl text-sky-600 hover:scale-105 duration-300">
              <h1>See Details</h1>
            </div>
          </div>
            </div>

            <div className="border border-black border-solid rounded-xl p-4 w-1/3 h-fit bg-white">
            <div className="py-10 pr-30">
            <h1 className=" text-4xl font-extrabold font-signature pt-5">Documentary Film</h1>
            <h1 className=" text-2xl font-extrabold font-signature pt-2 pl-2">₱ 400,000</h1>
            <ul className=" list-none py-7 text-2xl font-bold">
              <li className="pt-4">
                  12 hrs of Filming
              </li>
              <li className="pt-4">
                Professional Camera and Audio Equipment
              </li>
              <li className="pt-4">
                1x10-15 seconds Commercial
              </li>
              <li className="pt-4">
                4K Video Output
              </li>
            </ul>
            <div className=" text-center font-semibold underline text-xl pt-7 pb-6">
              Price starts only at ₱400,000 and may vary depends on add on and changes.
            </div>
            <div className=" cursor-pointer text-center font-bold  text-2xl py-4 border-4 border-solid border-sky-600  rounded-3xl text-sky-600 hover:scale-105 duration-300">
              <h1>See Details</h1>
            </div>
          </div>
            </div>

            <div className="border border-black border-solid rounded-xl p-4 w-1/3 h-fit bg-white">
            <div className="py-10 pr-30">
            <h1 className=" text-4xl font-extrabold font-signature pt-5">Corporate AVP</h1>
            <h1 className=" text-2xl font-extrabold font-signature pt-2 pl-2">₱ 150,000</h1>
            <ul className=" list-none py-7 text-2xl font-bold">
              <li className="pt-4">
                  12 hrs of Filming
              </li>
              <li className="pt-4">
                Professional Camera and Audio Equipment
              </li>
              <li className="pt-4">
                1x2-3 seconds Commercial
              </li>
              <li className="pt-4">
                4K Video Output
              </li>
            </ul>
            <div className=" text-center font-semibold underline text-xl pt-7 pb-6">
              Price starts only at ₱150,000 and may vary depends on add on and changes.
            </div>
            <div className=" cursor-pointer text-center font-bold  text-2xl py-4 border-4 border-solid border-sky-600  rounded-3xl text-sky-600 hover:scale-105 duration-300">
              <h1>See Details</h1>
            </div>
            </div>
            </div>
        </div>
        
    </div>

 </section>


    </div>
  )
}

export default Packages