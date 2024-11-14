import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import { faq } from "../../utils/helpers";

function FAQs() {
  return (
    <div className=" flex flex-col gap-4 w-[90vw] mx-auto mt-5 dark ">
      {/* <div className=" w-40 h-3 bg-black border-b border-x border-pink-900/50  -top-[2px] rounded-b-md left-12 z-30 absolute "></div> */}
      <p className=" text-5xl text-center font-bold">
        Have some <span className=" text-primaryPink">FAQs</span> ?
      </p>
      <p className=" text-white/70 text-xl text-center">
        Answers to the most frequently asked questions!
      </p>
      <div className=" mx-auto w-[90] md:w-4/5 text-white/70 text-xl flex justify-between py-5 flex-col md:flex-row">
        <Accordion className=" w-full md:w-1/2">
          {faq.slice(0, faq.length / 2).map((item, index) => (
            <AccordionItem key={index} title={item.question}>
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion className=" w-full md:w-1/2">
          {faq.slice(faq.length / 2).map((item, index) => (
            <AccordionItem key={index} title={item.question}>
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;
