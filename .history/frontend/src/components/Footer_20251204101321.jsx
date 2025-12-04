import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative bg-gray-50 text-gray-700 pt-24 pb-10 px-6 overflow-hidden">

      {/* Decorative Blur Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF6B6B] opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#4ECDC4] opacity-20 blur-3xl rounded-full"></div>

      {/* Main Footer Grid */}
      <div className="relative flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 max-w-6xl mx-auto">

        {/* Logo & Description */}
        <div>
          <img 
            src={assets.logo} 
            alt="" 
            className="mb-6 w-40 opacity-95 drop-shadow-md"
          />

          <p className="w-full md:w-3/4 text-gray-600 leading-relaxed text-[15px]">
            Elevating fashion with quality craftsmanship, modern aesthetics, 
            and everyday comfort. Step into styles created to complement 
            your personality and redefine your wardrobe.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-semibold mb-5 text-[#4ECDC4] tracking-wide">
            COMPANY
          </p>

          <ul className="flex flex-col gap-2 text-gray-600 font-medium">
            <li className="cursor-pointer hover:text-[#FF6B6B] transition">Home</li>
            <li className="cursor-pointer hover:text-[#FF6B6B] transition">About Us</li>
            <li className="cursor-pointer hover:text-[#FF6B6B] transition">Shipping</li>
            <li className="cursor-pointer hover:text-[#FF6B6B] transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xl font-semibold mb-5 text-[#4ECDC4] tracking-wide">
            GET IN TOUCH
          </p>

          <ul className="flex flex-col gap-2 text-gray-600 font-medium">
            <li className="cursor-pointer hover:text-[#FF6B6B] transition">
              +91 83198 30017
            </li>
            <li className="cursor-pointer hover:text-[#FF6B6B] transition">
              aryantiwari5276@gmail.com
            </li>
            <li className="cursor-pointer hover:text-[#FF6B6B] transition">
              Indore, Madhya Pradesh
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative mt-14 text-center">
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-gray-500">
          © 2025 FashionHub — Designed & Developed by Aryan Tiwari.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
