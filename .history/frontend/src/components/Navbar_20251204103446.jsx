import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logOut = () => {
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    navigate('/login')
  }

  return (
    <div className="relative bg-gray-50 shadow-sm z-50">
      
      {/* Decorative Blurred Circles */}
      <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#FF6B6B] opacity-20 blur-2xl rounded-full"></div>
      <div className="absolute -bottom-16 -right-12 w-48 h-48 bg-[#4ECDC4] opacity-20 blur-2xl rounded-full"></div>

      <div className="flex items-center justify-between py-5 px-3 sm:px-8 font-medium relative">
        
        <Link to="/">
          <img src={assets.logo} alt="" className="w-36" />
        </Link>

        {/* Nav Links */}
        <ul className="hidden sm:flex gap-8 text-sm text-gray-700 tracking-wide">
          <NavLink to="/" className="hover:text-[#FF6B6B] transition-all">HOME</NavLink>
          <NavLink to="/collection" className="hover:text-[#FF6B6B] transition-all">COLLECTION</NavLink>
          <NavLink to="/about" className="hover:text-[#FF6B6B] transition-all">ABOUT</NavLink>
          <NavLink to="/contact" className="hover:text-[#FF6B6B] transition-all">CONTACT</NavLink>

          {/* Admin Button */}
          {!token && (
            <NavLink 
              to="https://trendcraft-admin.vercel.app/"
              target="_blank"
            >
              <button className="px-5 h-10 bg-[#4ECDC4] text-white rounded-full font-semibold shadow-md hover:bg-[#39b9aa] transition-all">
                Admin Login
              </button>
            </NavLink>
          )}
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <img 
            onClick={() => setShowSearch(true)} 
            src={assets.search_icon} 
            alt="" 
            className="w-5 cursor-pointer hover:opacity-70 transition" 
          />

          <div className="group relative">
            <img 
              onClick={() => token ? null : navigate("/login")} 
              className="w-5 cursor-pointer hover:opacity-70 transition" 
              src={assets.profile_icon} 
              alt="" 
            />

            {/* Profile Dropdown */}
            {token && (
              <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white shadow-xl rounded-lg border">
                  <p className="cursor-pointer hover:text-[#FF6B6B]">My Profile</p>
                  <p 
                    onClick={() => navigate("/orders")} 
                    className="cursor-pointer hover:text-[#FF6B6B]"
                  >
                    Orders
                  </p>
                  <p 
                    onClick={logOut} 
                    className="cursor-pointer hover:text-[#FF6B6B]"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} alt="" className="w-5 min-w-5 hover:opacity-70 transition" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Menu */}
          <img 
            onClick={() => setVisible(true)} 
            src={assets.menu_icon} 
            alt=""  
            className="w-5 cursor-pointer sm:hidden" 
          />
        </div>

        {/* Mobile Sidebar */}
        <div className={`absolute top-0 bottom-0 bg-white shadow-xl transition-all ${visible ? "w-64" : "w-0"} overflow-hidden`}>
          <div className="flex flex-col text-gray-700 tracking-wide pt-5">
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
              <p>Back</p>
            </div>

            <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border-b hover:text-[#FF6B6B]" to="/">HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border-b hover:text-[#FF6B6B]" to="/collection">COLLECTION</NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border-b hover:text-[#FF6B6B]" to="/about">ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border-b hover:text-[#FF6B6B]" to="/contact">CONTACT</NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
