import React from "react";
import { MdCalendarMonth, MdLocationPin } from "react-icons/md";
import { robot } from "../../Assets";
import { Typewriter } from "react-simple-typewriter";
import Timer from "./Timer";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { SecondaryButton } from "../Buttons/SecondaryButton";

function LandingPage() {
  return (
    <div className=" flex flex-col md:flex-row justify-center r w-full min-h-[90vh] relative">
      <section className=" w-full  ">
        <div className=" flex flex-col gap-4 mx-auto h-full ">
        <div className=" flex flex-col w-4/5 mx-auto gap-4 pt-16">
          
          <p className=" text-5xl md:text-8xl font-bold ">
            Team Up. <br />{" "}
            <span className=" text-primaryPink ">
              {" "}
              <Typewriter
                words={["Code.", "Create.", "Conquer."]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>

          <h1 className="text-lg md:text-3xl font-bold mt-3">
            {/* <span className=" text-xl">
              Welcome to{" "}
              <span className=" text-primaryPink font-bold">Showdownn '24</span>
            </span> */}
            The official hackathon of NIT Durgapur
          </h1>
          <div className=" flex flex-col gap-2 mb-4">
            <p className=" flex items-center gap-2">
              <MdLocationPin className=" text-2xl" /> National Institute of
              Technology Durgapur, West Bengal, India
            </p>
            <p className=" flex items-center gap-2">
              <MdCalendarMonth className=" text-2xl" /> 17th - 19th January 2025
            </p>
          </div>
        </div>
          <div className="flex gap-4 md:w-4/5 mx-auto  ">
            <PrimaryButton>Register</PrimaryButton>
            <SecondaryButton>Join our Discord</SecondaryButton>
          </div>
          <Timer targetDate={new Date("2025-01-17T00:00:00")} />
        </div>
      </section>
      <section className="h-full w-full md:w-1/2 hidden md:!flex absolute right-0  justify-end items-end ">
        <img
          src={
            "https://res.cloudinary.com/dogqbjx8a/image/upload/robot_km2uja.webp"
          }
          className=" h-full md:w-[70%]"
          alt=""
        />
      </section>
    </div>
  );
}

export default LandingPage;
