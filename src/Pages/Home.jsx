import React from "react";

import PageContainer from "../Components/PageContainer";
import { PrimaryButton } from "../Components/Buttons/PrimaryButton";
import { SecondaryButton } from "../Components/Buttons/SecondaryButton";
import CardStack from "../Components/CardStack";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { faq, stats, themes, whyUs } from "../utils/helpers";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { MdArrowForwardIos } from "react-icons/md";
import { FooterImg, robot } from "../Assets";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Home() {
  return (
    <>
      <PageContainer>
        <div className=" flex flex-col md:flex-row justify-center items-center w-full min-h-[90vh]">
          <section className=" w-full md:w-1/2   bg-transparent">
            <div className=" flex flex-col gap-4 w-4/5 mx-auto  justify-center  h-full ">
              <p className=" text-5xl md:text-8xl font-bold ">
                Team Up. Contribute. <br />{" "}
                <span className=" text-primaryPink ">Innovate. Win.</span>
              </p>

              <h1 className="text-lg md:text-xl font-light text-white/70 mt-7">
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
          <section className="h-full w-full md:w-1/2 flex  justify-end items-end">
            <img src={robot} className=" h-full md:w-[70%]" alt="" />
          </section>
        </div>
        <div className=" flex flex-col gap-4 w-[90vw] min-h-[50vh] mx-auto  py-6 md:py-10 rounded-xl relative my-5">
          <div className="">
            <p className=" text-5xl text-center font-bold">
              At a <span className=" text-primaryPink">Glance</span>
            </p>
            <p className=" text-white/70 text-xl text-center">
              Get a quick look at the impact and scale of Showdown
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-7 md:mt-20">
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
        <div className=" flex flex-col gap-4 w-[90vw]  mx-auto  py-10 rounded-xl relative my-5">
          <div className="">
            <p className=" text-5xl text-center font-bold">
              Why <span className=" text-primaryPink">Showdown 1.0</span>
            </p>
            <p className=" text-white/70 text-xl text-center">
              Explore the reasons why Showdown 1.0 is the perfect platform for
              you
            </p>
          </div>
          <div className=" w-full md:w-4/5 mx-auto">
            <ResponsiveMasonry
              columnsCountBreakPoints={{
                750: 1,
                950: 2,
                1500: 3,
              }}
            >
              <Masonry gutter="30px">
                {whyUs.map((item, index) => (
                  <div
                    key={index}
                    className=" flex flex-col glass-card  py-5 px-4"
                  >
                    <div
                      className={` w-4/5  mx-auto my-4 rounded-xl shadow-xl flex justify-center items-center ${
                        index % 2 === 0
                          ? " h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                          : index % 3 === 0
                          ? " h-52 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                          : " h-48 bg-gradient-to-r from-indigo-500 to-yellow-400"
                      }`}
                    >
                      <img src={item.image} className=" h-64 w-64" alt="" />
                    </div>
                    <p className=" text-secondaryPink text-center text-3xl">
                      {item.title}
                    </p>
                    <p className=" text-white/80 text-center text-md my-2">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-[90vw] mx-auto mt-5  min-h-[60vh] relative my-5">
          <p className=" text-5xl text-center font-bold">
            <span className=" text-primaryPink">Themes</span>
          </p>
          <p className=" text-white/70 text-xl text-center">
            Explore the diverse themes that await you at Showdown
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {themes.map((item, index) => (
              <div
                key={index}
                className="relative w-full md:w-3/5 mx-auto px-3 py-4 h-[20rem] z-10  bg-cover bg-center group  shadow-lg overflow-hidden rounded-xl "
              >
                <div
                  className=" w-full h-full bg-black/60 absolute top-0 left-0 z-0 rounded-xl"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className=" w-full h-full absolute top-0 left-0 z-20 bg-black/90 hover:bg-black/80 transition-all ease-linear duration-500 cursor-pointer rounded-xl">
                  <div className=" w-4/5 mx-auto justify-center items-center h-full flex flex-col gap-4">
                    <h2 className="text-4xl font-bold">{item.title}</h2>
                    <p className="mt-2">{item.subtitle}</p>
                    <div className=" w-full flex justify-end gap-3 text-primaryPink items-center mt-3">
                      EXPLORE <MdArrowForwardIos className=" text-lg" />
                    </div>
                  </div>
                </div>
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
