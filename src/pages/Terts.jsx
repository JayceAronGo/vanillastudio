import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'swiper/swiper.min.css';
import Swiper from 'swiper';

const Terts = ({ size }) => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      // Customize Swiper options here
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      spaceBetween: 80,
    });
  }, []);

  const slideStyle = {
    width: size,
    height: size,
  };

  return (
    <div className="swiper-container aspect-video ">
      <div className="swiper-wrapper">
        <div className="swiper-slide" style={slideStyle}>
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/C6AJwRD_w18?autoplay=1"
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="swiper-slide" style={slideStyle}>
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/UqdlNym1J0k?autoplay=2"
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="swiper-slide" style={slideStyle}>
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/UqdlNym1J0k?autoplay=2"
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

Terts.propTypes = {
  size: PropTypes.string,
};

export default Terts;
