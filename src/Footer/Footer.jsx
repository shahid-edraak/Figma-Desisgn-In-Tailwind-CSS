import React from "react";
import { RiHome2Fill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <div className="flex  flex-col justify-start items-center md:flex-row mt-10 mb-10 gap-[30px] max-w-[65%] ms-auto me-auto">
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-row justify-center gap-3">
          <RiHome2Fill className="text-[#CDA274] text-3xl" />
          <h2 className="font-bold md:text-2xl text-xl">SELHONO</h2>
        </div>
        <div className="flex items-center justify-center">
          <p className="md:w-[70%]">
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 md:gap-10">
          <FaFacebookF /> <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>
      <div className="flex flex-col gap-3  items-center w-[45%] mid:w-[30%] justify-center">
        <div className="flex md:text-2xl text-sm  font-bold ">
          <h1>Pages</h1>
        </div>

        <h2>About Us</h2>
        <h2>Our Projects</h2>
        <h2>Our Team</h2>
        <h2>Contact Us</h2>
        <h2>Services</h2>
      </div>
      <div className="flex flex-col gap-3 items-center w-[45%]  mid:w-[30%] ">
        <div className="flex md:text-2xl text-sm font-bold">
          <h1>Services</h1>
        </div>
        <h2>Kitchan</h2>
        <h2>Living Area</h2>
        <h2>Bathroom</h2>
        <h2>Dinning Hall</h2>
        <h2>Bedroom</h2>
      </div>
      <div className="flex flex-col gap-3 items-center ">
        <div className="flex md:text-2xl text-sm font-bold">
          <h1>Contact</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5">
          <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <p> contact@selhono.com</p>
        </div>
        <p className="flex mt-3">(123) 456 - 7890</p>
      </div>
    </div>
  );
}

export default Footer;
