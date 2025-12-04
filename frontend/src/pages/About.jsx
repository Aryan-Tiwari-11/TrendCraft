import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewslatterBox from "../components/NewslatterBox";

const About = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">

      {/* Decorative Background Circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FF6B6B] opacity-25 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#4ECDC4] opacity-25 blur-3xl rounded-full"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">

        {/* ABOUT US Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            ABOUT <span className="text-[#4ECDC4]">US</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Discover who we are and why thousands trust us.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <img 
            className="w-full md:max-w-[450px] rounded-2xl shadow-xl" 
            src={assets.about_img} 
            alt="" 
          />

          <div className="flex flex-col gap-6 md:w-2/4 text-gray-700 text-lg">
            <p>
              Forever was built with a passion for innovation and a mission to
              redefine the online shopping experience. We aim to bring high-quality,
              stylish, and affordable products right to your doorstep.
            </p>

            <p>
              From premium fashion and modern accessories to lifestyle essentials,
              we handpick every item from trusted brands to ensure quality,
              craftsmanship, and authenticity.
            </p>

            <h3 className="text-2xl font-bold text-[#FF6B6B]">Our Mission</h3>

            <p>
              Our mission is simple — to deliver convenience, confidence, and the
              best shopping journey. From browsing to delivery, our team is dedicated
              to providing a smooth, reliable, and delightful shopping experience.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="text-center my-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            WHY <span className="text-[#4ECDC4]">CHOOSE US</span>
          </h2>
          <p className="text-gray-600 mt-2">
            What makes us your trusted shopping partner
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row text-sm gap-6 mb-20">

          {/* Card 1 */}
          <div className="border bg-white px-10 md:px-16 py-10 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <b className="text-[#4ECDC4] text-lg">Quality Assurance</b>
            <p className="text-gray-600 mt-3">
              Every product is carefully vetted to meet our high-quality standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border bg-white px-10 md:px-16 py-10 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <b className="text-[#4ECDC4] text-lg">Convenience</b>
            <p className="text-gray-600 mt-3">
              User-friendly design and smooth ordering makes shopping effortless.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border bg-white px-10 md:px-16 py-10 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <b className="text-[#4ECDC4] text-lg">Customer Support</b>
            <p className="text-gray-600 mt-3">
              Our support team is always ready to help you at every step.
            </p>
          </div>
        </div>

        <NewslatterBox />
      </div>
    </section>
  );
};

export default About;
