import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewslatterBox from '../components/NewslatterBox'

const Contact = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-28">

      {/* Title */}
      <div className="text-center text-3xl pt-14 border-t border-gray-300">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Content Section */}
      <div className="my-16 flex flex-col md:flex-row gap-14 items-center">

        {/* Image */}
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[450px] rounded-2xl shadow-2xl object-cover"
        />

        {/* Info Card */}
        <div className="flex flex-col gap-6 bg-white p-10 rounded-2xl shadow-xl border border-gray-200">

          <div>
            <p className="text-xl font-semibold text-gray-900">Our Store</p>
            <p className="text-gray-600 mt-1">
              54709 Willms Station <br /> Suite 350, Washington, USA
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-900">Contact Info</p>
            <p className="text-gray-600 mt-1">
              Tel: (415) 555-0132 <br /> Email: aryantiwari52576@gmail.com
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-900">Careers at Forever</p>
            <p className="text-gray-600">
              Learn more about our teams and job openings.
            </p>
          </div>

          <button className="mt-2 bg-[#4ECDC4] text-white px-10 py-3 rounded-full shadow-lg hover:bg-[#3bb3a8] transition duration-300">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewslatterBox />
    </div>
  )
}

export default Contact
