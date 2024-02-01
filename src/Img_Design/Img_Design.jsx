import React from "react";
import Image_7 from "../assets/Image_7.png";
import Image_8 from "../assets/Image_8.png";
import Image_9 from "../assets/Image_9.png";
import Image_10 from "../assets/Image_10.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Img_Design() {
  return (
    <div className="flex flex-col mt-10 mb-10 md:flex-row items-center justify-center max-w-[65%] ms-auto me-auto gap-5">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={Image_7} alt="" />
        <div className=" flex flex-col items-center justify-center">
          <h2 className="lg:text-xl text-sm font-bold">Parker Carter</h2>
          <p>Design, Australia</p>
        </div>
        <div className="flex flex-row gap-5">
          <FaFacebookF /> <FaTwitter />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={Image_8} alt="" />
        <div className=" flex flex-col items-center justify-center">
          <h2 className="lg:text-xl text-sm font-bold">Avery Jackson</h2>
          <p>Design, Australia</p>
        </div>
        <div className="flex flex-row gap-5">
          <FaFacebookF /> <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={Image_9} alt="" />
        <div className=" flex flex-col items-center justify-center">
          <h2 className="lg:text-xl text-sm font-bold">Luna James</h2>
          <p>Design, Australia</p>
        </div>
        <div className="flex flex-row gap-5">
          <FaFacebookF /> <FaTwitter />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={Image_10} alt="" />
        <div className=" flex flex-col items-center justify-center">
          <h2 className="lg:text-xl text-sm font-bold"> Gianna Mateo</h2>
          <p>Design, Australia</p>
        </div>
        <div className="flex flex-row gap-5">
          <FaFacebookF /> <FaTwitter />
        </div>
      </div>
    </div>
  );
}

export default Img_Design;
