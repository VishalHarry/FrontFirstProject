import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Header() {
  return (
    <nav className="w-full flex h-16 items-center justify-between p-6 bg-zinc-100 sticky top-0 z-10 shadow-md">
  <h1 className="text-2xl font-bold text-[#090c31]">LOGO</h1>

  {/* Desktop Menu */}
  <main className="hidden lg:flex w-[70%] justify-end gap-12">
    <HashLink className="hover:text-[#5853ff]" to={"/#home"}>Home</HashLink>
    <HashLink className="hover:text-[#5853ff]" to={"/contact"}>Contacts</HashLink>
    <HashLink className="hover:text-[#5853ff]" to={"/#about"}>About</HashLink>
    <HashLink className="hover:text-[#5853ff]" to={"/#brand"}>Brand</HashLink>
    <HashLink className="hover:text-[#5853ff]" to={"/services"}>Services</HashLink>
  </main>

  {/* Hamburger Menu */}
  <div className="lg:hidden flex flex-col justify-center items-end">
    <input type="checkbox" id="menu-toggle" className="hidden peer" />
    <label
      htmlFor="menu-toggle"
      className="text-2xl text-[#090c31] cursor-pointer"
    >
      <span className="block">☰</span>
    </label>

    {/* Mobile Menu */}
    <div className="peer-checked:flex hidden fixed top-0 left-0 h-full w-[50%] bg-zinc-100 flex-col items-start p-6 gap-8">
      <HashLink className="hover:text-[#5853ff]" to={"/#home"}>
        Home
      </HashLink>
      <HashLink className="hover:text-[#5853ff]" to={"/contact"}>
        Contacts
      </HashLink>
      <HashLink className="hover:text-[#5853ff]" to={"/#about"}>
        About
      </HashLink>
      <HashLink className="hover:text-[#5853ff]" to={"/#brand"}>
        Brand
      </HashLink>
      <HashLink className="hover:text-[#5853ff]" to={"/services"}>
        Services
      </HashLink>
    </div>
  </div>
</nav>

  
  )
}

export default Header
