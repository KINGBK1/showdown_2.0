import React from "react";

import PageContainer from "../Components/PageContainer";
import Timer from "../Components/HomeComponents/Timer";
import RotatingText from "../Components/HomeComponents/RotatingText";
import LandingPage from "../Components/HomeComponents/LandingPage";
import WhyThisHackathon from "../Components/HomeComponents/WhyThisHackathon";
import Stats from "../Components/HomeComponents/Stats";
import Themes from "../Components/HomeComponents/Themes";
import FAQs from "../Components/HomeComponents/Faq";

function Home() {
  return (
    <>
      <PageContainer>
        <LandingPage />
        <RotatingText />
        <Timer targetDate={new Date("2025-01-17T00:00:00")} />
        <div className=" sec-bg">
          <Stats />
          <WhyThisHackathon />
          <Themes />
        </div>
        <FAQs />
      </PageContainer>
    </>
  );
}

export default Home;
