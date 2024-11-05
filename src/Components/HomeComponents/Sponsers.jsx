import React from "react";

function Sponsers() {
  return (
    <div>
      {" "}
      <div className="">
        <p className=" text-5xl text-center font-bold uppercase">
          Our <span className=" text-primaryPink">Sponsors</span>
        </p>
      </div>
      <div className=" flex flex-wrap gap-10 justify-center my-6">
        {Array.from({ length: 10 }).map((_, index) => (
                  <div className=" w-64 h-36 bg-white rounded-md"></div>

        ))}{" "}
      </div>

      <div className=" w-4/5 backdrop-blur-0"></div>
    </div>
  );
}

export default Sponsers;
