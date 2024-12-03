// // Schedule.jsx
import React from "react";
import PageContainer from "../Components/PageContainer";
import { timeline } from "../utils/helpers";
import { TimeLineCard } from "../Components/TimelineCard.jsx";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Schedule = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 2000;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 2000;
  };

  return (
    <PageContainer>
      <div>
        <div className="text-center md:mb-8">
          <p className="text-3xl md:text-5xl font-bold">
            Keep the <span className="text-primaryPink">Dates</span>
          </p>
          <p className="text-white/70 text-lg md:text-xl">
            Get a quick look at the timeline of Showdownn
          </p>
        </div>
        <div className="flex h-auto md:py-0 mb-10 items-center">
          <MdChevronLeft
            size={48}
            onClick={slideLeft}
            className="cursor-pointer mr-4 md:mr-10"
          />
          <div
            className="flex overflow-x-scroll scrollbar-hide scroll-smooth mt-6 py-5 w-full"
            id="slider"
          >
            {timeline.map((obj, index) => (
              <div className="flex items-center" key={index}>
                <TimeLineCard idx={index} obj={obj} />
                {index !== timeline.length - 1 && (
                  <div
                    className={`bg-zinc-300 h-[260px] md:h-[216px] w-[4px] md:w-[8px] ${
                      index % 2 !== 0
                        ? "rounded-br-md rounded-tl-md"
                        : "rounded-tr-md rounded-bl-md"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <MdChevronRight
            size={48}
            onClick={slideRight}
            className="cursor-pointer ml-4 md:ml-10"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default Schedule