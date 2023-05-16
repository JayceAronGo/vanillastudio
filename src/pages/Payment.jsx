import React from 'react'
import Vapoly from "../assets/vapoly.jpg";

const Payment = () => {
  return (
    <div>
    <img className="w-full h-full object-cover " src={Vapoly} alt="bgm"></img>


<div className=" absolute top-36  w-full left-1/4">

   <div className=" border-none z-14 rounded-3xl p-4 w-1/2 h-fix pb-28  bg-gray-100 text-black bg-opacity-75">
       <div className="  pt-10 pb-72">
           <div className='text-center '>
               <h1 className=" text-5xl font-bold font-signature">
                   Commercial Package

               </h1>
            </div>

            <div className='flex pl-24' >
               <h2 className='py-6 font-bold  text-3xl '>
                   Name:

                   <div>
                       {/* Package input backend */}
                   </div>
               </h2>
            </div>
           <ul className='  text-2xl pt-2 pl-24 space-y-8 font-semibold'>
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

            <div>
                {/* Insert Backend */}
            </div>


           <div className=' flex px-32 ml-10'>


 <div className=" mt-80 pl-24 flex absolute  ">
   <div className=" cursor-pointer text-center font-bold  text-2xl pt-1 px-20 border-8 border-none  rounded-2xl text-white bg-sky-600 hover:scale-105 duration-300">
     <h1 className=''>Proceed To PayMongo</h1>
   </div>
 </div>
</div>
       </div>
   </div>
   


</div>

</div>
  )
}

export default Payment