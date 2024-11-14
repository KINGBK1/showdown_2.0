import React, { useState } from "react";

import PageContainer from "../Components/PageContainer";
import Timer from "../Components/HomeComponents/Timer";
import RotatingText from "../Components/HomeComponents/RotatingText";
import LandingPage from "../Components/HomeComponents/LandingPage";
import WhyThisHackathon from "../Components/HomeComponents/WhyThisHackathon";
import Stats from "../Components/HomeComponents/Stats";
import Themes from "../Components/HomeComponents/Themes";
import FAQs from "../Components/HomeComponents/Faq";
import Sponsers from "../Components/HomeComponents/Sponsers";
import { MdMail, MdPhone } from "react-icons/md";

function Home() {
  return (
    <>
      <PageContainer>
        <LandingPage />
        <RotatingText />
        <div className="sec-bg">
          {/* <Timer targetDate={new Date("2025-01-17T00:00:00")} /> */}
          <Stats />
          <Themes />
        </div>
        {/* <WhyThisHackathon /> */}
        {/* <Sponsers /> */}

        <FAQs />

        <div className=" w-full md:w-1/2 mx-auto mb-10 flex flex-col gap-4 p-5">
          <div className="w-full  border-1 glass-card flex flex-col justify-center items-center p-5 ">
            <p className="text-2xl text-secondaryPink font-bold">
              Sponsorship and Partnership
            </p>
            <div className="flex items-center mt-4">
              <MdPhone className="mr-2" />
              <a href="tel:+91 7890912728" className="text-lg">
                +91 7890912728
              </a>
              <p className="ml-2">(Ayush Bhartia) </p>
            </div>
            <div className="flex items-center mt-4">
              <MdPhone className="mr-2" />
              <a href="tel:+91 9679670516" className="text-lg">
                +91 9679670516
              </a>
              <p className="ml-2">(Suman Karmakar) </p>
            </div>
            <div className="flex items-center mt-2">
              <MdMail className="mr-2" />
              <a href="mailto:nitdlug@gmail.com" className="text-lg">
                nitdlug@gmail.com
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default Home;
