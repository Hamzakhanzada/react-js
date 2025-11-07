import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="text-xl font-bold">MyBrand</a>

      {/* Mobile Toggle Button */}
      <input type="checkbox" id="menuToggle" className="hidden peer" />

      <label htmlFor="menuToggle" className="cursor-pointer lg:hidden block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>

      {/* Navigation Links */}
      <ul className="flex gap-6 lg:flex-row flex-col lg:static absolute lg:bg-transparent bg-white 
      left-0 right-0 top-[64px] p-5 lg:p-0 shadow lg:shadow-none opacity-0 
      peer-checked:opacity-100 peer-checked:top-[64px] lg:opacity-100 transition-all duration-300">
        <li><a href="#" className="hover:text-blue-600">Home</a></li>
        <li><a href="#" className="hover:text-blue-600">About</a></li>
        <li><a href="#" className="hover:text-blue-600">Services</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
