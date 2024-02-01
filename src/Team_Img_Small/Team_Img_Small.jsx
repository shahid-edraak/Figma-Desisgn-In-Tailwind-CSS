import React from "react";
import Rectangle_30 from "../assets/Rectangle_30.png";
function Team_Img_Small() {
  return (
    <div className="flex items-center justify-center md:mb-10 mb-5">
      <img src={Rectangle_30} alt="" className="relaitive" />
      <h1 className=" font-sans absolute text-white font-bold text-xl  md:text-2xl ">
        Team Single
      </h1>
    </div>
  );
}

export default Team_Img_Small;
