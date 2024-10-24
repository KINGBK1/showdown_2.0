import React from "react";

export const TimeLineCard = ({ obj, idx }) => {
  return (
    
      <div
        className={`flex ${
          idx % 2 !== 0 ? "flex-col" : "flex-col-reverse"
        } items-center w-[500px]`}
      >
        <div className="backdrop-blur-lg border-pink-900 border-2 w-[350px] h-96 flex-shrink-0 p-10 mx-6">
          <div>
            <div className=" text-primaryPink text-lg font-semibold">
              {obj.title}
            </div>
            <div>{obj.desc}</div>
          </div>
        </div>
        <div className="h-16 w-[8px]  bg-white"></div>
        <div className=" flex h-[20px] w-full justify-center items-center my-4">
          <div className="h-[8px] w-1/2  bg-white"></div>
          <div className="h-[30px] w-[30px] mx-2 bg-primaryPink rounded-full  "></div>
          <div className="h-[8px] w-1/2  bg-white"></div>
        </div>
        <div className="h-16 w-[8px]  bg-white"></div>
        <div className="backdrop-blur-lg bg-primaryPink w-48 h-20 flex flex-shrink-0 justify-center items-center p-10 ">
          <div className="font-black text-2xl">19th OCT</div>
        </div>
      </div>
    
  );
};
