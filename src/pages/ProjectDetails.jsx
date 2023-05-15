import React from 'react'
import Vapoly from "../assets/vapoly.jpg";
import Valogo from  "../assets/valogo.png";
import {HiInformationCircle} from "react-icons/hi";


const ProjectDetails = () => {
  return (
    <div className=' relative'>
        <img className="w-full h-full object-cover " src={Vapoly} alt="bgm"></img>

   
    <div className=" absolute top-36  w-full left-1/4  ">

        <div className=" border-none z-14 rounded-3xl p-4 w-1/2 h-fix  pb-40 bg-black bg-opacity-75 ">
            <div className=' flex z-16 top-64 '>
              <div className=" p-4 mr-40 right-1/2">
                <div className='text-white py-10 mr-1 pl-12'>

                  <h1 className=' text-5xl font-bold mr-5'> Rules and Guidelines </h1>
                    <ul className=' py-6 text-left text-xl'>
                      <li className=' mb-4'>
                          Any permits and documents needed to shoot on the project venue will be handled by the customer. 
                      </li>
                      <li className=' mb-4'>
                          There will be a change in price depending on the location, no. of outputs and video duration.
                      </li>
                      <li className=''>
                          The packages are only estimated price of the project.
                      </li>
                    </ul>
                </div>
              </div>
              
              <div className=" py-20 px-70">
                <div className=' ml-20'>
                  <img className=" w-60 mr-96" src={Valogo} alt="logo" ></img>
                </div>

                  <ul className=' text-white mr-60'>
                      <li className=' pt-5'>
                        Project Venue:
                          <div>
                             {/* Venue Backend */}
                          </div>
                      </li>

                      <div className='absolute flex pr-40 space-x-24 pt-10'>
                      <li className='  '>
                        No. of Output: 
                          <div>
                             {/* Ouput Backend */}
                          </div>
                      </li>
                      <li className=' '>
                         Video Duration:
                          <div>
                             {/* Video Backend */}
                          </div>
                      </li>
                      </div>
                      
                      <div className=' flex'>
                      <li className=' pt-40 pl-14'>
                        Map Location:
                          <div>
                            {/* Location Backend */}
                          </div>
                      </li>
                      </div>

                      <div className=' flex'>
                      <li className=' pt-10'>
                          Package Price
                            <div>
                              {/* Price Backend */}
                            </div>
                      </li>
                      </div>

                      <div className=' flex'>
                      <li className=' pt-10'>
                          Reservation Fee
                            <div>
                              {/* Fee Backend */}
                            </div>
                      </li>
                      </div>

                      <div className='absolute flex pt-10 '>
                        <div>     
                          {/* insert check backend */}
                        </div>
                      <li className=' underline  '>
                          I have read the rules and guidelines implemented by the studio

                      </li>
                      
                      <HiInformationCircle className='cursor-pointer mt-1 ml-1' />
                      </div>
                  </ul>

                  <div className='flex absolute z-16 bottom-3/5 py-10 right-2/4 '>
          <div className=' flex pl-30 '>
          <div className=" py-20 ">
            <div className=" cursor-pointer text-center font-bold  text-2xl py-1 px-16 border-2 border-solid  rounded-2xl text-sky-600 border-sky-600 hover:scale-105 duration-300">
              <h1>Go Back</h1>
            </div>
          </div>

          <div className=" py-20 px-4  ">
            <div className=" cursor-pointer text-center font-bold  text-2xl py-1 px-16 border-4 border-none  rounded-2xl text-white bg-sky-600 hover:scale-105 duration-300">
              <h1>Continue</h1>
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
export default ProjectDetails