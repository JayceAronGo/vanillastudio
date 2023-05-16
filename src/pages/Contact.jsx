import React from 'react'
import Vanillabgm from '../assets/vanillabgm.png';
import Vabout from '../assets/vabout.png';

const Contact = () => {
  return (
    <div className=' relative'>
        <img className="w-full h-full object-cover " src={Vanillabgm} alt="bgm"></img>

        <div className=' absolute top-36  w-1/2 h-1/2 left-1/4'>

            <div className='border-none  p-4  bg-black text-white bg-opacity-75' >
                <div className=' flex space-x-56 text-6xl font-bold px-20 pt-10'>
                    <div>
                        <h1> Contact Us</h1>
                        <div>

                        </div>
                    </div>

                    <div>
                        <h1> FAQ</h1>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact