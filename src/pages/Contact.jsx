import React from 'react'
import Vanillabgm from '../assets/vanillabgm.png';
import {AiFillFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiOutlineSend} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";



const Contact = () => {
  return (
    <div className=' relative'>
        <img className="w-full h-full object-cover " src={Vanillabgm} alt="bgm"></img>

        <div className=' absolute top-36  w-1/2 h-1/2 left-1/4'>

            <div className='border-none  p-4  bg-black text-white bg-opacity-75' >
                <div className=' flex space-x-40 text-6xl font-bold px-20 pt-10 pb-40'>
                    <div>
                        <h1> Contact Us</h1>
                        <div className=' pt-20 space-y-3 text-xl'>
                            <div>
                                {/* Name Backend */}
                                Name
                            </div>
                            <div>
                                {/* Email Backend */}
                                Email Address
                            </div>
                            <div>
                                {/* Message Backend */}
                                Message 
                            </div>

                            <div className=" pt-10  ">
                                <div className=" cursor-pointer text-center font-bold  text-2xl py-2  rounded-2xl bg-sky-600 border-sky-600 hover:scale-105 duration-300">
                                    <h1 >Submit</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className=' text-center'> FAQ</h1>
                        <div className=' pt-10 space-y-3 text-xl'>
                            <div>
                                {/*  Backend */}
                                
                            </div>
                            <div>
                                {/*  Backend */}
                                
                            </div>
                            <div>
                                {/*  Backend */}
                               
                            </div>
                            <div>
                                {/*  Backend */}
                                
                            </div>
                            <div>
                                {/*  Backend */}
                                
                            </div>
                            <div>
                                {/*  Backend */}
                               
                            </div>

                            <div className=" pt-10  ">
                                <div className="flex cursor-pointer space-x-24 py-2">
                                    <div>
                                    <BsTelephone className=" w-10 absolute  hover:scale-125 duration-300" size={'50px'} />
                                    </div>
                                    <div>
                                    <AiOutlineSend className=" w-10 absolute  hover:scale-125 duration-300" size={'50px'} />
                                    </div>
                                    <div>
                                    <AiFillFacebook className=" w-10 absolute  hover:scale-125 duration-300" size={'50px'} />
                                    </div>
                                    <div>
                                    <AiFillYoutube className="  w-10 absolute  hover:scale-125 duration-300" size={'50px'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact