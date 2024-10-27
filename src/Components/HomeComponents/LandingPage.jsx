import React from "react";
import { MdCalendarMonth, MdLocationPin } from "react-icons/md";
import { robot } from "../../Assets";

function LandingPage() {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center w-full min-h-[90vh]">
      <section className=" w-full md:w-1/2   bg-transparent">
        <div className=" flex flex-col gap-4 w-4/5 mx-auto  justify-center  h-full ">
          <p className=" text-5xl md:text-8xl font-bold ">
            Team Up. Contribute. <br />{" "}
            <span className=" text-primaryPink ">Innovate. Win.</span>
          </p>

          <h1 className="text-lg md:text-2xl font-light text-white/70 mt-7">
            <span className=" text-xl">
              Welcome to{" "}
              <span className=" text-primaryPink font-bold">ShowDown '24</span>
            </span>
            — The official hackathon of NIT Durgapur
          </h1>
          <div className=" flex flex-col gap-2">
            <p className=" flex items-center gap-2">
              <MdLocationPin className=" text-xl" /> National Institute of
              Technology Durgapur, West Bengal, India
            </p>
            <p className=" flex items-center gap-2">
              <MdCalendarMonth className=" text-xl" /> 17th - 19th January 2025
            </p>
          </div>
          {/* <div className="flex gap-4 mt-5  ">
          <SecondaryButton>Explore</SecondaryButton>
        </div> */}
        </div>
      </section>
      <section className="h-full w-full md:w-1/2 hidden md:!flex  justify-end items-end ">
        <img src={robot} className=" h-full md:w-[70%]" alt="" />
      </section>
    </div>
  );
}

export default LandingPage;
