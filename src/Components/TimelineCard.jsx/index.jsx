
import React from "react";

export const TimeLineCard = ({ obj, idx }) => {
  return (
    <div
      className={`flex ${
        idx % 2 !== 0 ? "flex-col" : "flex-col-reverse"
      } items-center w-[300px] md:w-[400px] lg:w-[500px]`}
    >
      <div className="backdrop-blur-sm bg-gray-200/5 rounded-2xl border-pink-900 border-2 w-[250px] md:w-[350px] h-72 md:h-96 flex-shrink-0 py-8 px-5 md:px-7 mx-4 md:mx-6 hover:shadow-[0px_0px_30px_10px] md:hover:shadow-pink-950 md:hover:shadow-[0px_0px_50px_20px] hover:shadow-pink-950">
        <div>
          <div className="text-primaryPink text-lg md:text-xl font-semibold">
            {obj.title}
          </div>
          <div className="text-sm md:text-md mt-2">{obj.desc}</div>
        </div>
      </div>
      <div className="h-8 md:h-16 w-[4px] md:w-[8px] bg-zinc-300"></div>
      <div className="flex h-[20px] w-full justify-center items-center my-2 md:my-4">
        <div className="h-[4px] md:h-[8px] w-1/2 bg-zinc-300"></div>
        <div className="h-[20px] md:h-[30px] w-[20px] md:w-[30px] mx-1 md:mx-2 bg-primaryPink rounded-full"></div>
        <div className="h-[4px] md:h-[8px] w-1/2 bg-zinc-300"></div>
      </div>
      <div className="h-8 md:h-16 w-[4px] md:w-[8px] bg-zinc-300"></div>
      <div className="backdrop-blur-lg rounded-lg bg-pink-600 w-32 md:w-48 h-16 md:h-20 flex flex-shrink-0 justify-center items-center">
        <div className="font-black text-lg md:text-2xl">{obj.date}</div>
      </div>
    </div>
  );
};

