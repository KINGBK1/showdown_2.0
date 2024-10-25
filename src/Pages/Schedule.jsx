import React from "react";
import PageContainer from "../Components/PageContainer";

import { timeline } from "../utils/helpers";
import { TimeLineCard } from "../Components/TimelineCard.jsx";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Schedule = () => {
  const slideLeft = ()=>{
    var slider = document.getElementById('slider')
    console.log(slider)
    slider.scrollLeft = slider.scrollLeft-2000
  }
  const slideRight = ()=>{
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft+2000
  }
  return (
    <PageContainer>
      <div>
        <div className="">
          <p className=" text-5xl text-center font-bold">
            Keep the <span className=" text-primaryPink">Dates</span>
          </p>
          <p className=" text-white/70 text-xl text-center">
            Get a quick look at the timeline of Showdown
          </p>
        </div>
        <div className=" flex h-[88vh] py-10 items-center">
          
            <MdChevronLeft size={64} onClick={slideLeft} className=" cursor-pointer mr-10" />
          <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth relative mt-16 py-5"  id="slider" >
            {timeline.map((obj, index) => (
              <div className="flex items-center" key={index}>
                <TimeLineCard idx={index} obj={obj} />
                {index !== timeline.length - 1 && (
                  <div
                  className={`bg-zinc-300 h-[312px] w-[8px] ${
                    index % 2 !== 0
                    ? "rounded-br-md rounded-tl-md"
                    : " rounded-tr-md rounded-bl-md"
                  }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
            <MdChevronRight size={64} onClick={slideRight} className=" cursor-pointer ml-10"/>
        </div>
      </div>
    </PageContainer>
  );
};
