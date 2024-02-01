import React from "react";
import Image_6 from "../assets/Image_6.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
function Team_Single_Contact_Information() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-evenly mt-5 mb-6   ">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-1">
          <h1 className="md:text-3xl text-xl font-bold">Alex Johnson</h1>
          <p className=" ">Designer</p>
        </div>
        <p className="pl-1 pr-1 md:pl-0 md:pr-0 max-w-[90%] ml-8 md:ml-0  md:w-96 ">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrpobelie frandomised words which don't look
          even slightly believable.
        </p>

        <div className=" flex flex-col gap-4 md:items-start items-center">
          <p className="flex flex-row items-center gap-4">
            <MdOutlineEmail className="text-[#CDA274]" />
            info@selhono.com
          </p>
          <p className="flex flex-row items-center gap-4">
            <FaPhone className="text-[#CDA274]" />
            +1 (378) 400-1234
          </p>
          <p className="flex flex-row items-center gap-4 ">
            <GiWorld className="text-[#CDA274]" />
            www.selhono.com
          </p>
          <p className="flex flex-row items-center gap-4">
            <FaFacebookF /> <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </p>
        </div>
      </div>
      <div className="hidden w-80  md:flex ">
        <img src={Image_6} alt="" />
      </div>
    </div>
  );
}

export default Team_Single_Contact_Information;
