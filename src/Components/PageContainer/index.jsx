import React from "react";
import { BG } from "../../Assets";

function PageContainer() {
  return (
    <div className=" h-screen w-screen relative    ">
      <img src={BG} className=" h-full w-full z-[2]" alt="" />
      <div className=" h-full w-full absolute top-0 left-0 z-[5] backdrop-blur-lg bg-gradient-to-r from-black/50 to-black/80"></div>
    </div>
  );
}

export default PageContainer;
