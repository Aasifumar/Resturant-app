// HeroSection.js - Hero banner component
/* eslint-disable react/prop-types */
import React from 'react';
import bannerImage from '../../assets/images/1.jpg';
import burger from '../../assets/images/3.png';

const HeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative min-h-[500px] lg:min-h-[500px] flex items-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage || bannerImage}')`,
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight animate-fadeIn">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl animate-fadeIn">
                {subtitle}
              </p>
            )}
            <button className="px-8 py-3 mt-4 rounded-full bg-[#eb7c02] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300">
              Order Now
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={burger}
              alt="Burger"
              className="hidden lg:block w-full max-w-[420px] animate-softFloat rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
