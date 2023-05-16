import React from 'react'
import Vanillabgm from '../assets/vanillabgm.png';
import Vabout from '../assets/vabout.png';

const About = () => {
  return (
    <div className=' relative'>

        <div>
            <img className="w-full h-full object-cover " src={Vanillabgm} alt="bgm"></img>

                
            <div className=' absolute top-32 space-x-14 left-72'>
                <div className=' px-80 mx-40 mb-20 text-7xl font-bold'>
                    <h1 className=' text-white'>ABOUT US</h1>
                </div>

                <div className=' flex'>  
                <div className=''>
                    <img src={Vabout} alt="aboutpic"></img>
                </div>
                
                
                <div className=' mt-32'>
                <div className=" border-none rounded-3xl p-4 h-fix w-fix bg-black text-white bg-opacity-75">
                <div className=' px-72 '>
                    
                </div>
                <div className=' pt-10 mb-40 px-10 py-10'>
                <div className=' relative '>
                <div className=' absolute  '>
                <p className=' text-xl font-bold text-left'>VFX Vanilla Studio Production is a full service video company. We specialize in production of digital commercials, music videos, film documentaries, and corporate communications. Our strengths are reliability, flexibility, creativity and interdisciplinary expertise. </p>

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

export default About