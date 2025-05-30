import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-primary">Prime Creative.</h1>
      <ul className="hidden md:flex hover:cursor-pointer">
        <li className="p-4 hover:text-primary hover:animate-pulse duration-50">Home</li>
        <li className="p-4 hover:text-primary hover:animate-pulse duration-50">Company</li>
        <li className="p-4 hover:text-primary hover:animate-pulse duration-50">Services</li>
        <li className="p-4 hover:text-primary hover:animate-pulse duration-50">About</li>
        <li className="p-4 hover:text-primary hover:animate-pulse duration-50">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose onClick={handleNav} size={20} />
        ) : (
          <AiOutlineMenu onClick={handleNav} size={20} />
        )}
      </div>
      <ul
        className={
          nav
            ? `fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`
            : `fixed left-[100%]`
        }
      >
        <h1 className=" w-full text-3xl font-bold text-primary m-4">Prime.</h1>

        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resourses</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
