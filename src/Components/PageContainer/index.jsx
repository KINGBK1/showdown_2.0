import React from "react";
import { BG } from "../../Assets";
import Navbar from "../Navbar";

function PageContainer() {
  return (
    <div className="h-screen w-screen overflow-y-hidden overflow-x-hidden">
      <Navbar/>
    <div className=" relative  text-white  ">
        <img src={BG} className="h-full w-full z-[2]" alt="" />
      <div className=" h-full w-full absolute top-0 left-0 z-[5]  bg-gradient-to-r from-black/50 to-black/80"></div>
    </div>
    </div>
  );
}

export default PageContainer;
