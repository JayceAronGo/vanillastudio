import React from 'react'
import Vapoly from "../assets/vapoly.jpg";
import Valogo from  "../assets/valogo.png";
import {CgProfile} from "react-icons/cg";

const Signin = () => {
  return (
    <div className=' relative '>
         <nav className="bg-gray-900 text-white  shadow-xl w-full h-32">
    <div className=' flex flex-col'>
        <div className=' ' >
            <div className=' py-10 px-16 '>
            <img className=" w-40" src={Valogo} alt="logo" ></img>
            </div>

 

        </div>
    </div>

      </nav>

      <img className="w-full h-fit object-cover  " src={Vapoly} alt="bgm"></img>


<div className=" absolute top-60  left-1/4 px-40">

   <div className="border-none z-14 rounded-3xl p-4 w-auto h-fix pb-28 px-20 bg-gray-100 text-black bg-opacity-75">
       <div className="  pt-10 pb-32">
 

       <form  className='flex flex-col mt-14 space-y-10  text-4xl place-items-center'>

        
        <div className=''>
        <input className=' rounded-xl px-4 py-1 ' 
          type="email"
          placeholder="Username"
        ></input>
        </div>

        <div>
        <input className=' rounded-xl px-4 py-1'
          type="password"
          placeholder="Password"
        ></input>
        </div>

        <div className='py-2 cursor-pointer text-center font-bold  text-2xl pt-1 px-20 border-8 border-none rounded-2xl text-white bg-sky-600 hover:scale-105 duration-300'>
        <button type="submit text0">Sign In</button>
        </div>
      </form>


    
       </div>

       
   </div>
   
   <div className=' px-20'>
   <div className=' absolute border-solid border-t border-black px-56  bottom-40'>

</div>


</div>

</div>



    </div>
  )
}

export default Signin