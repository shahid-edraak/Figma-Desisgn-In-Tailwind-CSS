import React from "react";
import { FaRegCircle } from "react-icons/fa6";

import { IoRemoveCircleOutline } from "react-icons/io5";
function Team_Bio() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center max-w-[65%] ms-auto me-auto mt-15 mb-15 ">
      <div className=" flex flex-col gap-4 items-center">
        <h1 className="font-bold md:text-2xl text-sm">Short Biography </h1>
        <p className="">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, njecthumour randomised words which
          don't look even slightly believable.
        </p>
        <p className="">
          Embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined but the majority
          have suffered alteration in some form chunks as necessary.
        </p>
      </div>
      <div className="flex flex-col gap-10  md:flex-row mt-[9px]">
        <div className="flex flex-col gap-[28px] items-center md:items-start ">
          <h1 className="font-bold md:text-2xl   text-sm ">
            Simplicity and Functionality
          </h1>
          <p className="max-w-[90%] ml-8 md:ml-0">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in belief.
          </p>
          <p className="max-w-[90rem] ml-8 md:ml-0">
            There are many variations of passages of Lorem Ipsum from available,
            but the majority have suffered alteration in some form, njecthumour
          </p>
          <div className="flex flex-col md:gap-7 gap-4 w-half md:w-full">
            <div className="flex flex-col gap-8 md:gap-3">
              <h1>Project Design</h1>
              <div className="flex relative">
                <div className=" w-[58%] md:w-[65%] h-1 bg-[#CDA274]  "></div>
                <div className="w-[39%] md:w-[35%] h-1 bg-[#F4F0EC] "></div>
                <FaRegCircle className="text-[#CDA274] font-bold top-[-7px]  absolute right-[32%]" />
                <h1 className="top-[-1.8rem] right-[30%] text-[12px] absolute">
                  65%
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h1>Team Management</h1>
              <div className="flex relative">
                <div className=" w-[88%] md:w-[95%] h-1 bg-[#CDA274]  "></div>
                <div className="w-[9%] md:w-[5%] h-1 bg-[#F4F0EC] "></div>
                <FaRegCircle className="text-[#CDA274]  font-bold top-[-7px]  absolute right-[2%]" />
                <h1 className="bottom-[1rem] right-1 text-[12px] absolute">
                  95%
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1>Client Satisfaction</h1>
              <div className="flex relative">
                <div className="w-[67%] md:w-[75%] h-1 bg-[#CDA274]   "></div>
                <div className="w-[30%] md:w-[25%] h-1 bg-[#F4F0EC]  "></div>
                <FaRegCircle className="text-[#CDA274] font-bold  absolute  right-[22%] top-[-7px]" />
                <h1 className="top-[-1.8rem] right-[20%] text-[12px] absolute">
                  75%
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center justify-center  ">
          <h1 className="font-bold md:text-2xl text-sm">Qustion And Answer</h1>
          <p className="md:max-w-[100%] max-w-[12rem] ">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.
          </p>
          <div className="flex flex-col gap-[5px] items-start md:w-60  bg-[#F4F0EC] pl-6 rounded-[20px] h-[13rem] pr-5 ">
            <div className="flex flex-col gap-8">
              <div className="flex flex-row pt-4">
                <h1 className="">Website & Mobile App Design?</h1>
                <div className="flexp pt-1 border-white  text-2xl  ">
                  <IoRemoveCircleOutline />
                </div>
              </div>

              <p className="max-w-[22rem]">
                Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem
                turpmaximus.
              </p>
            </div>
          </div>
          <div>
            <h1>How to Easy Successful Projects?</h1>
          </div>
          <div>
            <h1>International Trade Experience?</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team_Bio;
