import React from "react";

import PageContainer from "../Components/PageContainer";
import { PrimaryButton } from "../Components/Buttons/PrimaryButton";
import { SecondaryButton } from "../Components/Buttons/SecondaryButton";
import CardStack from "../Components/CardStack";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { faq } from "../utils/helpers";

function Home() {
  return (
    <>
      <PageContainer>
        <div className=" flex justify-center items-center w-full h-[90vh]">
          <section className=" w-full md:w-1/2   bg-transparent">
            <div className=" flex flex-col gap-4 w-4/5 mx-auto  justify-center  h-full ">
              <p className=" text-8xl font-bold ">
                Team Up. Contribute. <br />{" "}
                <span className=" text-primaryPink ">Innovate. Win.</span>
              </p>

              <h1 className="text-xl font-light text-white/70 mt-7">
                <span className=" text-3xl">
                  Welcome to{" "}
                  <span className=" text-primaryPink">ShowDown 1.0</span>
                </span>
                —where ideas ignite! Whether you're a pro or a beginner, this is
                your chance to turn sparks into real-world solutions. Let's hack
                something awesome!
              </h1>
              <div className="flex gap-4 mt-5  ">
                <PrimaryButton>Register</PrimaryButton>
                <SecondaryButton>Login</SecondaryButton>
              </div>
            </div>
          </section>
          <section className="h-full w-full md:w-1/2 flex  justify-center items-center">
            {/* <div className=" w-2/5 rounded-xl pt-5 pb-20 px-5 backdrop-blur-sm ">
              <img src={HomeLeft} alt="Home Left" className=" rounded-xl" />
            </div> */}
            <CardStack />
          </section>
        </div>
        <div className=" flex flex-col gap-4 w-[90vw] mx-auto mt-5 dark backdrop-blur-lg border-pink-900/30 border-2 py-10 rounded-xl relative my-5">
          <div className=" w-40 h-3 bg-black border-b border-x border-pink-900/50  -top-[2px] rounded-b-md left-12 z-30 absolute "></div>
          <p className=" text-5xl text-center font-bold">
            Have some <span className=" text-primaryPink">FAQs</span> ?
          </p>
          <div className=" mx-auto w-4/5 text-white/70 text-xl">
            <Accordion>
              {faq.map((item, index) => (
                <AccordionItem key={index} title={item.question}>
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default Home;
