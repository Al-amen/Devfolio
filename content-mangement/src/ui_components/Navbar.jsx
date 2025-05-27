import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { Switch } from "@/components/ui/switch"
import ResponsiveNavbar from './ResponsiveNavbar';

export const Navbar = () => {
    const [showNavBar, setShowNavBar] = React.useState(false);
    const toggleNavBar = () => {
        setShowNavBar(!showNavBar);
    };

  return (
    <>
    
        <nav className="max-container padding-x py-6 flex justify-between items-center  gap-6 sticky top-0 z-10 bg-[#FFFFFF] dark:bg-[#141624]">
        <a to="/" className="text-[#141624] text-2xl dark:text-[#FFFFFF]">
          DevFolio
        </a>
        <ul className="flex items-center  justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
          <li>Hi, Clinton</li>

          <li>Logout</li>
          <li>Login</li>
          <li>Register</li>
          <li className="font-semibold">Create post</li>
        </ul>

        <Switch />
        <FaHamburger className="text-2xl cursor-pointer hidden max-md:block dark:text-white" onClick={toggleNavBar}  />
       
      </nav> 
      {showNavBar && <ResponsiveNavbar />}
      
    </>
  )
}
