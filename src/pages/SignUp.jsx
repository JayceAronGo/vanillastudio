import React from 'react'
import Vapoly from "../assets/vapoly.jpg";
import Valogo from  "../assets/valogo.png";

const SignUp = () => {
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


<div className=" absolute top-40  left-1/4 px-20">

   <div className="border-none z-14 rounded-3xl p-4 w-auto h-fix pb-10 px-20 bg-gray-100 text-black bg-opacity-75">
       <div className="  pt-10 ">


       <div className=' flex space-x-4 font-semibold'>
            
            <div className='rounded-xl py-4 bg-white px-6'>
                <h1> MR</h1>
            </div>

            <div className='rounded-xl py-4 bg-white px-20'>
                <h1>First Name</h1>
            
            </div>

            <div className='rounded-xl py-4 bg-white px-20'>
                <h1>Last Name</h1>
            
            </div>
      
    </div>
 
       <div  className='flex flex-col mt-8 space-y-6 font-semibold '>

        <div className=' rounded-xl py-3 bg-white px-20'>
            <h1 className=' text-center'> 
                Email Address
            </h1>
        </div>

        <div className=' rounded-xl py-3 bg-white px-20'>
            <h1 className=' text-center'> 
                Contact Number
            </h1>
        </div>

        <div className=' rounded-xl py-3 bg-white px-40'>
            <h1 className=' text-center'> 
                Company Name
            </h1>
        </div>

        <div className=' rounded-xl py-3 bg-white px-40'>
            <h1 className=' text-center'> 
                Username
            </h1>
        </div>

        <div className=''>

         <div className='flex space-x-4 font-semibold'>
            <div className='w-1/2 rounded-xl py-3 bg-white'>
                <h1 className='text-center'>
                    Password
                </h1>
            </div>
            <div className=' w-1/2 rounded-xl py-3 bg-white'>
                <h1 className='text-center'>
                Confirm Password
                </h1>
            </div>
        </div>
        </div>



    <div>
        <div className=' space-y-2 font-semibold pl-4'>
            <ul className=' list-disc '>Password Must Contain:
                <li> At least one number</li>
                <li> At least 8 characters</li>
                <li> At least 1 special character </li>
                <li> At least 1 lower and uppercase character </li>
            </ul>
        </div>
    </div>

    <div className=' text-center'>
        <p> I have read terms and conditions</p>
    </div>
      
    <div className=' px-20'>
            <div className='py-4 text-center cursor-pointer  font-bold  text-4xl pt-1 px-4  border-none rounded-2xl text-white bg-sky-600 hover:scale-105 duration-300'>
        <button type="submit text  ">Sign In</button>
        </div>

    </div>
       </div>

      </div>




       
   </div>
   


</div>


</div>





  )
}

export default SignUp