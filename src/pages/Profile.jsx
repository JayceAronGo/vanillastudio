import React from 'react'
import Vapoly from "../assets/vapoly.jpg";
import Valogo from  "../assets/valogo.png";
import {CgProfile} from "react-icons/cg";


const Profile = () => {
  return (
    <div className='flex  h-screen '>
    
  <nav className="bg-gray-900 text-white w-60 shadow-xl ">
    <div className=' flex flex-col'>
        <div className=' ' >
            <div className=' py-10 px-16 '>
            <img className=" w-60" src={Valogo} alt="logo" ></img>
            </div>

            <div className=' py-10'>
                <div className='flex-grow grid place-items-center'>
                    <div className=' text-center text-white flex bg-sky-600 p-6 mb-4  '>
                        <div className=' mr-6 '> <CgProfile size={'40px'} /> </div>
                            <h1 className='text-3xl font-bold'>Account </h1>
                    </div>
                </div>
           
           <div className=' pt-40'>
                <div className='flex-grow flex flex-col pt-96 px-4'>
                    <div className=' p-6 cursor-pointer text-center font-bold text-2xl py-4 border-4 border-solid border-sky-600   text-sky-600 hover:scale-105 duration-300 '>
                        <h1 className=' text-4xl text-sky-400  font-bold '> Logout</h1>
                    </div>
                </div>
           </div>
           </div>

        </div>
    </div>

      </nav>
 

      <img className="w-full h-full object-cover " src={Vapoly} alt="bgm"></img>


<div className=" absolute top-36  w-full left-1/4">

   <div className=" border-none z-14 rounded-3xl p-4 w-1/2 h-fix pb-28  bg-gray-100 text-black bg-opacity-75">
       <div className="  pt-10 pb-20">
           <div className='text-center '>
               <h1 className=" text-6xl font-bold font-signature">
                   Profile

               </h1>
            </div>

           <ul className='  text-2xl pt-2 px-24 space-y-10 font-semibold  '>
               <div className=' flex space-x-10 border-b-2 border-black '>
               <li>
                  Prefix:
               </li>
               <div className=' pl-24 font-bold'>
                Mr
                       {/* Insert Backend */}
                   </div>
               </div>

               <div className=' flex space-x-10 border-b-2 border-black'>
               <li>
                  First Name:
               </li>
               <div className=' pl-10 font-bold'>
                Juan Luna
                       {/* Insert Backend */}
                   </div>
               </div>

               <div className=' flex space-x-10 border-b-2 border-black'>
               <li>
                  Last Name:
               </li>
               <div className=' pl-10 font-bold'>
                Ginebra
                       {/* Insert Backend */}
                   </div>
               </div>
               
               <div className=' flex space-x-10 border-b-2 border-black'>
               <li>
                  Email:
               </li>
               <div className=' pl-28 font-bold'>
                test
                       {/* Insert Backend */}
                   </div>
               </div>

               <div className=' flex space-x-10 border-b-2 border-black'>
               <li>
                  Phone Number:
               </li>
               <div className=' pl-2 font-bold'>
                #09295143806
                       {/* Insert Backend */}
                   </div>
               </div>

               <div className=' flex space-x-10 border-b-2 border-black'>
               <li>
                  Company Name:
               </li>
               <div className=' pl-10 font-bold'>
                test
                       {/* Insert Backend */}
                   </div>
               </div>
           </ul>



           <div className=' flex px-32 ml-10'>


 <div className=" mt-20 pl-40 flex absolute  ">
   <div className=" cursor-pointer  font-bold  text-2xl pt-1 px-20 border-8 border-none  rounded-2xl text-white bg-sky-600 hover:scale-105 duration-300">
     <h1 className=' text-center'>Update</h1>
   </div>
 </div>
</div>
       </div>
   </div>
   


</div>
</div>




  )
}

export default Profile