import React from "react";

import PageContainer from "../Components/PageContainer";
import { PrimaryButton } from "../Components/Buttons/PrimaryButton";
import { SecondaryButton } from "../Components/Buttons/SecondaryButton";
import CardStack from "../Components/CardStack";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { faq, stats, themes } from "../utils/helpers";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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
        <div className=" flex flex-col gap-4 w-[90vw] h-[50vh] mx-auto mt-5 py-10 rounded-xl relative my-5">
          <div className="">
            <p className=" text-5xl text-center font-bold">
              At a <span className=" text-primaryPink">Glance</span>
            </p>
            <p className=" text-white/70 text-xl text-center">
              Get a quick look at the impact and scale of Showdown
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
            {stats.map((item, index) => (
              <div key={index} className=" flex flex-col  ">
                <p className=" text-white text-center text-3xl">{item.title}</p>
                <p className=" text-white/70 text-center text-md my-1">
                  {item.subtitle}
                </p>
                <CountUp
                  start={0}
                  end={item.number}
                  scrollSpyOnce={true}
                  prefix={index === 1 ? "Rs." : ""}
                  suffix={index === 0 ? "+" : index === 2 ? " Hours" : ""}
                  delay={0}
                  className=" text-primaryPink text-center text-5xl mt-3"
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-[90vw] mx-auto mt-5  h-[60vh] relative my-5">
          <p className=" text-5xl text-center font-bold">
            <span className=" text-primaryPink">Themes</span>
          </p>
          <p className=" text-white/70 text-xl text-center">
            Explore the diverse themes that await you at Showdown
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {themes.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-[50rem] bg-cover bg-center group rounded-lg shadow-lg overflow-hidden"
              >
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="mt-2">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-[90vw] mx-auto mt-5 dark backdrop-blur-lg border-pink-900/30 border-2 py-10 rounded-xl relative my-5">
          <div className=" w-40 h-3 bg-black border-b border-x border-pink-900/50  -top-[2px] rounded-b-md left-12 z-30 absolute "></div>
          <p className=" text-5xl text-center font-bold">
            Have some <span className=" text-primaryPink">FAQs</span> ?
          </p>
          <p className=" text-white/70 text-xl text-center">
            Answers to the most frequently asked questions!
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
