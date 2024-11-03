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
        <Sponsers />

        <FAQs />
      </PageContainer>
    </>
  );
}

export default Home;
