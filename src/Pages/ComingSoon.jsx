import React, { useState } from "react";
import PageContainer from "../Components/PageContainer";

const ComingSoon = () => {
 
  return (
    <PageContainer>
        <div className=" h-full items-center justify-center flex w-full  backdrop-blur-lg">
            <div className=" text-4xl  font-bold">
            <h1 className="text-6xl text-center text-white animate-glow">COMING SOON ...</h1>
            </div>
        </div>
    </PageContainer>
  );
};

export default ComingSoon;
