import React from "react";
import { sponsors } from "../../utils/helpers";

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
        {sponsors.map((ele, index) => (
                  <div key={index} className=" w-64 p-2 bg-slate-50 rounded-md flex flex-col items-center align-middle justify-center">
                    {ele.text?<>
                      <p className="font-semibold text-[#1c4980] text-center">{ele.text}</p>
                    </>
                      :<></>}
                    <img className="" src={ele.link} />
                  </div>

        ))}{" "}
      </div>

      <div className=" w-4/5 backdrop-blur-0"></div>
    </div>
  );
}

export default Sponsers;
