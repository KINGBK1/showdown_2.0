import React from "react";
import { stats } from "../../utils/helpers";

function Stats() {
  return (
    <div className=" flex flex-col-reverse md:flex-row  gap-4 w-full min-h-[30vh] mx-auto  py-6 md:py-10 rounded-xl relative ">
      <div className=" w-full md:w-1/2 px-6  grid grid-cols-2   gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className={` flex flex-col glass-card w-full  py-5 px-4 ${
                index === 2 && " col-span-2"
              } `}
            >
              <p className=" text-white/80 text-center text-2xl my-2">
                {item.title}
              </p>
              <p className=" text-secondaryPink font-bold text-center text-3xl">
                {index === 1 && "Rs."} {item.number}
                {index === 2 ? "Hours" : "+"}
              </p>
            </div>
          ))}
      </div>
      <div className=" w-full md:w-1/2 flex flex-col justify-center items-center gap-5 ">
        <p className=" text-5xl text-center font-bold">
          At a <span className=" text-primaryPink">Glance</span>
        </p>
        <p className=" text-white/70 text-xl text-center">
          Get a quick look at the impact and scale of Showdown
        </p>
      </div>
    </div>
  );
}

export default Stats;
