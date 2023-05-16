import React from 'react'
import Vapoly from "../assets/vapoly.jpg";
import Valogo from  "../assets/valogo.png";
import {HiInformationCircle} from "react-icons/hi";

const Confirm = () => {
  return (
    <div>
             <img className="w-full h-full object-cover " src={Vapoly} alt="bgm"></img>

   
        <div className=" absolute top-36  w-full left-1/4">

            <div className=" border-none z-14 rounded-3xl p-4 w-1/2 h-fix pb-28  bg-gray-100 text-black bg-opacity-75">
                <div className="  pt-10">
                    <div className='text-center '>
                        <h1 className=" text-5xl font-bold font-signature">
                            Commercial Package

                            <div>
                                {/* Package input backend */}
                            </div>
                        </h1>
                        <h2 className='py-6 font-bold  text-3xl '>
                            ₱ 40,000

                            <div>
                                {/* Package input backend */}
                            </div>
                        </h2>
                    </div>
                    <ul className=' list-disc text-2xl pt-2 pl-24 space-y-8 font-semibold'>
                        <li>
                            12hrs of Filming
                        </li>
                        <li>
                            Professional Camera and Audio Equipment
                        </li>
                        <li>
                            1x 15 seconds Commercial
                        </li>
                        <li>
                            HD Video Output
                        </li>
                        <div className=' flex'>
                        <li>
                            Location:
                        </li>
                        <div className=' pl-10 font-bold'>
                                {/* Insert Backend */}
                            </div>
                        </div>

                        <div className=' flex'>
                        <li>
                            Video Duration:
                        </li>

                            <div className=' pl-10 font-bold'>
                                {/* Insert Backend */}
                            </div>
                        </div>

                        <div className=' flex'>
                        <li>
                           Quality:
                        </li>
                        <div className=' pl-10 font-bold'>
                                {/* Insert Backend */}
                            </div>
                        </div>

                        <div className=' flex'>
                        <li>
                           Amount to be Paid
                            (Reservation Fee):
                        </li>
                        <div className=' pl-10 font-bold'>
                                {/* Insert Backend */}
                            </div>
                        </div>
                    </ul>

                    <div className=' flex px-32 ml-10'>
          <div className=" pt-10  ">
            <div className=" cursor-pointer text-center font-bold  text-2xl pt-1 px-20 border-2 border-solid  rounded-2xl text-sky-600 border-sky-600 hover:scale-105 duration-300">
              <h1>Go Back</h1>
            </div>
          </div>

          <div className=" pt-10 pl-20  ">
            <div className=" cursor-pointer text-center font-bold  text-2xl pt-1 px-20 border-4 border-none  rounded-2xl text-white bg-sky-600 hover:scale-105 duration-300">
              <h1>Confirm</h1>
            </div>
          </div>
        </div>
                </div>
            </div>
            


        </div>

    </div>
   
  )
}

export default Confirm