import React, { useState } from "react";

import PageContainer from "../Components/PageContainer";
import Timer from "../Components/HomeComponents/Timer";
import RotatingText from "../Components/HomeComponents/RotatingText";
import LandingPage from "../Components/HomeComponents/LandingPage";
import WhyThisHackathon from "../Components/HomeComponents/WhyThisHackathon";
import Stats from "../Components/HomeComponents/Stats";
import Themes from "../Components/HomeComponents/Themes";
import FAQs from "../Components/HomeComponents/Faq";
import MarkdownEditor from "@uiw/react-markdown-editor";

function Home() {
  const [markdown, setMarkdown] = useState("");

  return (
    <>
      <PageContainer>
        <LandingPage />
        <RotatingText />
        <Timer targetDate={new Date("2025-01-17T00:00:00")} />
        <div className=" sec-bg">
          <Stats />
          <WhyThisHackathon />
          {console.log(markdown)}
          <Themes />
        </div>

        <FAQs />
        <MarkdownEditor
      value={markdown}
      height="200px"
      onChange={(value, viewUpdate) => setMarkdown(value)}
    />
      </PageContainer>
    </>
  );
}

export default Home;
