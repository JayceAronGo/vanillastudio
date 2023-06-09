import React, { useEffect,  } from 'react';
import 'swiper/swiper.min.css';
import Swiper from 'swiper';



const Terts = () => {

  
    useEffect(() => {
        new Swiper('.swiper-container', {
          // Customize Swiper options here

          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            delay: 5000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay even when the user interacts with the slider
          },

        });
      }, []);



  return (
    <div className="swiper-container aspect-video ">
    <div className="swiper-wrapper ">
    <div className="swiper-slide">
   
        <iframe
          width="75%"
          height="80%"
          src="https://www.youtube.com/embed/C6AJwRD_w18?autoplay=1"
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>

      </div>

      <div className="swiper-slide">
   
   <iframe
          width="75%"
          height="80%"
     src="https://www.youtube.com/embed/UqdlNym1J0k?autoplay=2"
     title="YouTube Video"
     frameBorder="0"
     allowFullScreen
   ></iframe>

 </div>

 <div className="swiper-slide">
   
   <iframe
          width="75%"
          height="80%"
     src="https://www.youtube.com/embed/rQ6tn7_GcbY?autoplay=2"
     title="YouTube Video"
     frameBorder="0"
     allowFullScreen
   ></iframe>

 </div>

 <div className="swiper-slide">
   
   <iframe
          width="75%"
          height="80%"
     src="https://www.youtube.com/embed/Ztrq2k_Ibnw?autoplay=2"
     title="YouTube Video"
     frameBorder="0"
     allowFullScreen
   ></iframe>

 </div>
  
  
    </div>
    <div className="swiper-pagination"></div>

   
  </div>
  );
};

export default Terts
