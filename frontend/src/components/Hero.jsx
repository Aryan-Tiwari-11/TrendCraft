import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative w-full bg-gray-50 overflow-hidden">
      
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-20 lg:py-32 gap-12">

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">

          {/* Tagline */}
          <span className="text-[#FF6B6B] uppercase font-semibold text-sm tracking-widest">
            Trending Now
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-snug">
            Step into the <span className="text-[#4ECDC4]">Future of Style</span>
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-lg">
            Elevate your wardrobe with our latest arrivals. Premium fabrics, modern designs, and exclusive collection.
          </p>

          {/* Call to Action */}
          <div className="flex items-center gap-5 mt-4">
            <Link 
              to="/collection"
              className="bg-[#4ECDC4] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#3bb3a8] transition-all duration-300"
            >
              Shop Now
            </Link>
            <Link 
              to="/about"
              className="text-gray-900 font-semibold border-b-2 border-transparent hover:border-[#FF6B6B] transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={assets.hero_img}
            alt="Hero Banner"
            className="w-full max-w-md lg:max-w-full rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF6B6B] rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#4ECDC4] rounded-full opacity-30 blur-3xl"></div>

    </section>
  )
}

export default Hero
