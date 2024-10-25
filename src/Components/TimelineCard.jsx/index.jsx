import React from "react";

export const TimeLineCard = ({ obj, idx }) => {
  return (
    
      <div
        className={`flex ${
          idx % 2 !== 0 ? "flex-col" : "flex-col-reverse"
        } items-center w-[500px]`}
      >
        
        <div className="backdrop-blur-sm  bg-gray-200/5 rounded-2xl border-pink-900 border-2 w-[350px] h-96 flex-shrink-0 py-10 px-7 mx-6 hover:shadow-[0px_0px_50px_20px] hover:shadow-pink-950 ">
          <div>
            <div className=" text-primaryPink text-xl font-semibold ">
              {obj.title}
            </div>
            <div className="text-ld mt-2">{obj.desc}</div>
          </div>
        </div>
        <div className="h-16 w-[8px]  bg-zinc-300"></div>
        <div className=" flex h-[20px] w-full justify-center items-center my-4">
          <div className="h-[8px] w-1/2  bg-zinc-300"></div>
          <div className="h-[30px] w-[30px] mx-2 bg-primaryPink rounded-full  "></div>
          <div className="h-[8px] w-1/2  bg-zinc-300"></div>
        </div>
        <div className="h-16 w-[8px]  bg-zinc-300"></div>
        <div className="backdrop-blur-lg rounded-lg bg-pink-600 w-48 h-20 flex flex-shrink-0 justify-center items-center p-10">
          <div className="font-black text-2xl">{obj.date}</div>
        </div>
      </div>
    
  );
};
