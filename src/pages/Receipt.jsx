import React from 'react'
import Vapoly from "../assets/vapoly.jpg";

const Receipt = () => {
  return (
    <div>
    <img className="w-full h-full object-cover " src={Vapoly} alt="bgm"></img>


<div className=" absolute top-36  w-full left-1/4">

   <div className=" border-none z-14 rounded-3xl p-4 w-1/2 h-fix pb-28  bg-gray-100 text-black">
       <div className="  pt-10 pb-32">
           <div className='text-center '>
               <h1 className=" text-5xl font-bold font-signature">
                  Thank You For Reserving

               </h1>
            </div>

            <div className='flex  pl-72' >
               <h2 className='py-6 font-bold  text-2xl '>
                   Reference No:

                   <div>
                       {/* Package input backend */}
                   </div>
               </h2>
            </div>
           <ul className='  text-2xl pt-2 pl-24 space-y-8 font-semibold'>
               <div className=' flex'>
               <li>
                  Package Price:
               </li>
               
               <div className=' pl-10 font-bold'>
                       {/* Insert Backend */}
                   </div>
               </div>

               <div className=' flex'>
                        <li>
                            Reservation Fee:
                        </li>
                        <div className=' pl-10 font-bold'>
                                {/* Insert Backend */}
                            </div>
                        </div>

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
                            Quality:
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
           </ul>

            <div>
                {/* Insert Backend */}
            </div>

        
           <div className=' flex px-32 ml-10'>


 <div className="  mt-40 pl-40 flex absolute  ">
   <div className=" cursor-pointer text-center font-bold  text-2xl pt-1 px-20 border-8 border-none  rounded-2xl text-white bg-sky-600 hover:scale-105 duration-300">
     <h1 className=''>Return Home</h1>
   </div>
 </div>
</div>
       </div>
   </div>
   


</div>

</div>
  )
}

export default Receipt