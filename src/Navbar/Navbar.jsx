import logo from "../assets/logo.png";
import React, { useState } from "react";
import Search from "../assets/Search.png";
import { IoMenu } from "react-icons/io5";
// Import your Tailwind CSS file

function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="flex flex-row justify-evenly p-2 items-center  ">
      <div className="   flex md:gap-4 items-center  ">
        <img src={logo} alt="Logo" className="w-5 h-5  md:w-9 md:h-9" />
        <h1 className="md:text-2xl font-bold p-2 md:p-1 sm:font-medium">
          SELHONO
        </h1>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex font-medium flex-row gap-5 text-#292F36    ">
          <li>Home</li>
          <li> Pages</li>
          <li> Services</li>
          <li>Project</li>
          <li> Contact</li>
          <img src={Search} alt="search img" />
        </ul>
      </div>
      <div className="  mobile_menu lg:hidden ">
        <IoMenu className=" menu_class relative" onClick={handleNavbarToggle} />
        <div className="mobile_menu_div absolute right-4 bg-slate-200 pl-4 pr-4 sm:right-102 md:right-40">
          {isNavbarOpen && (
            <ul className="flex font-medium flex-col  text-#292F36 ">
              <li>Home</li>
              <li> Pages</li>
              <li> Services</li>
              <li>Project</li>
              <li> Contact</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
